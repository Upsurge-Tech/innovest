import React from "react";
import Logoo from "../../assets/images/home/logoo.png";
import Home from "../../assets/images/home/img1.jpg";

function Loading() {
  return (
    <div className="absolute">
      <div className="w-full h-screen">
        <img src={Home} alt="Loadingimg" className="w-full h-full" />
      </div>
        <div className="absolute top-0 left-30 right-0 bottom-0 hidden md:block">
          <img src={Logoo} alt="Logoimg" />
        </div>
    </div>
  );
}

export default Loading;
