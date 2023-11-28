
import React, { useState, useEffect } from 'react';
import videoAsset from "../../assets/images/home/vid.mp4";

const HomePage = () => {
  // const [player, setPlayer] = useState(null);

  // useEffect(() => {
  //   if (player) {
  //     player.playVideo();
  //     player.fullscreen();
  //   }
  // }, [player]);

  // const onReady = (event) => {
  //   setPlayer(event.target);
  // };
  
  return (
    <div className="relative min-h-screen">
    
    <video
      autoPlay
      muted
      loop
      playbackRate={0.5}
      className="absolute inset-0  object-cover w-full h-full"
    >
      <source
        src={videoAsset}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> 
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text  pt-16 mt- flex sjustify-center">
     </div>
    
   </div>

    // <div className="relative min-h-screen">
    //   <div className = "mt-24"></div>
    //   <YouTube
    //     videoId={`mnT18gWDpqI?si=TiYDACe9ibFDDpFI`}
    //     opts={{ playerVars: { autoplay: 1, modestbranding: 1, controls: 0 , } }}
    //     onReady={onReady}
    //   />
    // </div>
  //    <div className="relative min-h-screen">
  //    <div className="mt-24"></div>
  //    <YouTube
  //      videoId={`mnT18gWDpqI?si=TiYDACe9ibFDDpFI`}
  //      opts={{
  //        playerVars: {
  //          autoplay: 1,
  //          modestbranding: 1,
  //          controls: 0,
  //        },
  //      }}
  //      onReady={onReady}
  //    />
  //  </div>
    // <div className="relative min-h-screen">
    //   <ReactPlayer
    //         url={`https://www.youtube.com/embed/yY13Y9a3Naw?si=zllhESflJ389kGs-?fs=1"`}
    //         playing={true}
    //         muted = {true}
    //         loop = {true}
    //         width={window.innerWidth}
    //         height={window.innerHeight}
    //         config={{
    //           youtube: {
    //             playerVars: {
    //               autoplay: 1,
    //               modestbranding: 1,
    //               controls: 0,
    //               showinfo: 0,
    //               mute: 1,
    //               rel: 0,
    //               fs: 1, // Enabling fullscreen
    //               hd: 1
    //             },
    //           },
    //         }}
    //       />
          //  <iframe
          //   title="YouTube Live Stream"
          //   width="100%"
          //   height="100%"
          //   src="https://www.youtube.com/embed/yY13Y9a3Naw?si=zllhESflJ389kGs-?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&mute=1&rel=0"
          //   muted
          //   allow="autoplay; encrypted-media"
          //   allowFullScreen
          //   className="absolute inset-0"
          // ></iframe> 
          //  <div className="absolute inset-0 bg-black opacity-10"></div> 
        // </div>
      
    //  <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text  pt-16 mt- flex sjustify-center">
    //  </div>
    

   
  );
};

export default HomePage;

// import React from "react";
// import exportImage from "../../assets/images/home/export.png";
// import ell185 from "../../assets/images/home/Ellipse-185.svg";
// import ell180 from "../../assets/images/home/Ellipse-180.svg";
// import ell190 from "../../assets/images/home/Ellipse-190.svg";
// import ell191 from "../../assets/images/home/Ellipse-191.svg";
// import ell193 from "../../assets/images/home/Ellipse-193.svg";
// import logo from "../../assets/images/home/logo.png";
// import videoAsset from "../../assets/images/home/vid.mp4";

// const HomePage = () => {
//   return (
//     <div className="relative min-h-screen">
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         playbackRate={0.5}
//         className="absolute inset-0 object-cover w-full h-full"
//       >
//         <source src={videoAsset} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black opacity-10"></div>

//       {/* Card Overlay */}
//       <div className="relative z-10 pt-96 grid grid-cols-1 md:grid-cols-3 text-secondary-text mx-4 md:mx-36 flex flex-col justify-end">

//         <div className="md:col-span-1 p-8 md:p-16 ">
//         <p className="text-lg md:text-xl text-white">
//             Inspiring
//           </p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
//             Innovation
//           </h2>
         
//         </div>

//         <div className="md:col-span-1 p-8 md:p-16 flex flex-col justify-end">
//         <p className="text-lg md:text-xl text-white">
//             Driving
//           </p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
//             Investment
//           </h2>
         
//         </div>
//         <div className="md:col-span-1 p-8 md:p-16 flex flex-col justify-end">
//         <p className="text-lg md:text-xl text-white">
//             Empowering
//           </p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
//             Growth
//           </h2>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


