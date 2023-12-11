import React, { useState, useEffect } from 'react';
import videoAsset from "../../assets/images/home/vid.mp4";
import Loading from './Loading';
import LoadingComponent from './LoadingComponent';


const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = document.querySelector('.video-element');
    videoElement.addEventListener('loadeddata', handleVideoLoad);

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoad);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {!videoLoaded && (
        <div className="loading-component">
          <Loading/>
        </div>
      )}

      <video
        autoPlay
        muted
        loop
        playbackRate={0.5}
        className="absolute inset-0 object-cover w-full video-element h-screen"
      >
        <source src={videoAsset} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text  pt-16 md:flex justify-center">
      </div>
    </div>
  );
};

export default HomePage;