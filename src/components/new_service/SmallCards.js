import React, { useState } from "react";

const SmallCards = ({
  image,
  paragraph,
  divText,
  setActiveCard,
  activeCard,
  id, 
  active, 
  setActive
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = id === active;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setActiveCard(divText);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setActiveCard(divText);
    setActive(id);
  };

  const prop = isActive ? "bg-[#000] text-[#fff]" : ""

  return (
    <div
      className={`my-10 md:w-2/3 w-5/6 md:h-[90px] mx-auto rounded-3xl hover:bg-[#000] hover:text-[#fff] text-black bg-white shadow-2xl transition-all py-2 ${prop} transform transition-transform hover:scale-105 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="">
        <div className="flex py-4 mx-auto w-5/6">
          <div className="basis-1/4">
            <img src={image} alt="imageHere" className="h-10 w-14" />
          </div>
          <div className="basis-3/4">{paragraph}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
