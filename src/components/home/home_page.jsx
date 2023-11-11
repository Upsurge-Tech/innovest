
import React from "react";
import exportImage from "../../assets/images/home/export.png";
import ell185 from "../../assets/images/home/Ellipse-185.svg";
import ell180 from "../../assets/images/home/Ellipse-180.svg";
import ell190 from "../../assets/images/home/Ellipse-190.svg";
import ell191 from "../../assets/images/home/Ellipse-191.svg";
import ell193 from "../../assets/images/home/Ellipse-193.svg";
import logo from "../../assets/images/home/logo.png";


const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-secondary-text mr-6 ml-6 relative mb-4">
      <div className="absolute top-12 left-72 ">
        <img
          src={ell185}
          width={45}
          height={45}
          alt="small ellipse"
        />
      </div>
      <div className="absolute bottom-12 left-32">
        <img
          src={ell191}
          width={30}
          height={30}
          alt="medium ellipse"
        />
      </div>
      <div className="absolute -bottom-28 md:-bottom-28 left-96">
        <img
          src={ell180}
          width={80}
          height={80}
          alt="large ellipse"
        />
      </div>

      <div className="relative col-span-1 ml-0 sm:ml-20 md:ml-16 lg:ml-20 mt-20 lg:mt-52 text-3xl md:text-4xl lg:text-5xl text-center md:text-start mb-16">
        <div className="absolute lg:right-20">
          <img
            src={ell190}
            width={35}
            height={35}
            alt="small green ellipse"
          />
        </div>
        <p className="pb-5 z-20">
          Inspiring{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#54A044] to-[#9CA6FF]">
            Innovation
          </span>
        </p>
        <p className="pb-5">
          Driving{"   "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#073136] to-[#0D1C9F] opacity-60">
            {"   "} Investment
          </span>
        </p>
        <p className="pb-5">
          Empowering{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6B4D70] to-[#3677DA] text-3xl md:text-4xl lg:text-5xl xl:6xl">
            Growth
          </span>
        </p>
      </div>
      <div className="hidden md:block col-span-1 lg:mt-20 xl:mt-0">
        <img
          src={exportImage}
          width={700}
          height={700}
          className=""
          alt="Export svg"
        />
      </div>
    </div>
  );
};

export default HomePage;
