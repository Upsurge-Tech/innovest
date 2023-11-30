import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
// import { motion } from "framer-motion";

const SlidingCard = ({ images, paragraphs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative rounded-3xl bg-white shadow-2xl transition-all w-full">
      <div className="md:p-6 p-4">
        <div className="md:w-full md:h-[400px] h-[250px]">
          <img
            className="w-full h-full rounded-3xl"
            src={images[currentImageIndex]}
            alt="Sliding Image"
          />
        </div>
      </div>
      <div className="flex md:w-[50px] w-[70px] mx-auto justify-between pb-4">
        {isMobile ? (
          ""
        ) : (
          <button className="text-black" onClick={handlePrevImage}>
            <FaCircle size={10} />
          </button>
        )}
        {isMobile ? (
          <button className="text-black" onClick={handlePrevImage}>
            <AiFillCaretLeft size={25} />
          </button>
        ) : (
          ""
        )}
        <button className="text-[#0000ff]">
          <FaCircle size={10} />
        </button>
        {isMobile ? (
          <button className="text-black" onClick={handlePrevImage}>
            <AiFillCaretRight size={25} />
          </button>
        ) : (
          ""
        )}
        {isMobile ? (
          ""
        ) : (
          <button className="text-black" onClick={handleNextImage}>
            <FaCircle size={10} />
          </button>
        )}
      </div>
      <div className="">
        <h1 className="text-center font-bold py-6 px-4">{paragraphs.title}</h1>
        <p className="py-4 px-8 md:px-14">{paragraphs.para1}</p>
        <p className="py-4 px-8 md:px-14">{paragraphs.para2}</p>
        <p className="py-4 px-8 md:px-14">{paragraphs.para3}</p>
      </div>
    </div>
  );
};

export default SlidingCard;
