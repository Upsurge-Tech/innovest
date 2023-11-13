
import React from "react";
import exportImage from "../../assets/images/home/export.png";
import ell185 from "../../assets/images/home/Ellipse-185.svg";
import ell180 from "../../assets/images/home/Ellipse-180.svg";
import ell190 from "../../assets/images/home/Ellipse-190.svg";
import ell191 from "../../assets/images/home/Ellipse-191.svg";
import ell193 from "../../assets/images/home/Ellipse-193.svg";
import logo from "../../assets/images/home/logo.png";
import videoAsset from "../../assets/images/home/vd.mp4";

const HomePage = () => {
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
      
    <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text  pt-16 mt- flex justify-center">
{/* <div className="relative flex items-center justify-center bottom-0 md:p-4 bg-black bg-opacity-50 rounded-xl border-b-2 border-t-2 border-l-2 border-r-2 border-md h-1/4 md:h-auto">
  <div className="relative col-span-1 text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-start">
    <div className="pb-2">
      <p className="text-6xl md:text-7xl flex items-center">
        <span className="word">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#54A044] to-[#9CA6FF]">
            Innovation
          </span>
        </span>
        <span className="dot"> &middot; </span>
        <span className="word">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9CF6FF] to-[#0D1C9F] opacity-60">
            Investment
          </span>
        </span>
        <span className="dot"> &middot; </span>
        <span className="word">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6B4D70] to-[#3677DA]">
            Growth
          </span>
        </span>
      </p>
    </div>
  </div>
</div>  */}
    </div>
    </div>
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
