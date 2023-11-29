import React from "react";

const MissionAndVisionCard = ({ title, description }) => {
  return (
    <div className="lg:max-w-[350px] mb-16 max-w-[500px]">
      <h1 className="text-[#002140] text-4xl md:text-5xl xl:text-6xl font-bold font-space mb-8">
        {title}
      </h1>
      <p className="text-xl font-medium font-poppins">{description}</p>
    </div>
  );
};

export default MissionAndVisionCard;
