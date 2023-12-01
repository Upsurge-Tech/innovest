import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";


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
    <div className="relative rounded-3xl bg-white shadow-2xl transition-all mx-auto w-full md:w-[500px] md:h-[750px] overflow-auto">
      <div className="md:p-6 p-4">
        <div className="md:w-full md:h-[300px] h-[250px]">
          {images.map((image, index) => {
            const opacity = index === currentImageIndex ? 1 : 0;
            const transition =
              index === currentImageIndex ? "opacity 0.5s ease-in-out" : "";

            return (
              <div
                key={image}
                style={{ opacity, transition }}
                className="absolute top-0 left-0 w-full h-full md:p-6 p-4"
              >
                <div className="md:w-full md:h-[300px] h-[250px]">
                  <img
                    src={image}
                    alt="Sliding Image"
                    className="w-full h-full rounded-3xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex md:w-[50px] w-[70px] mx-auto justify-between pb-4">
        {isMobile ? (
          ""
        ) : (
          <button
            className="text-black hover:text-[#0000ff]"
            onClick={handlePrevImage}
          >
            <FaCircle size={10} />
          </button>
        )}
        {isMobile ? (
          <button
            className="text-black hover:text-[#0000ff]"
            onClick={handlePrevImage}
          >
            <AiFillCaretLeft size={25} />
          </button>
        ) : (
          ""
        )}
        <button className="text-[#0000ff]">
          <FaCircle size={10} />
        </button>
        {isMobile ? (
          <button
            className="text-black hover:text-[#0000ff]"
            onClick={handlePrevImage}
          >
            <AiFillCaretRight size={25} />
          </button>
        ) : (
          ""
        )}
        {isMobile ? (
          ""
        ) : (
          <button
            className="text-black hover:text-[#0000ff]"
            onClick={handleNextImage}
          >
            <FaCircle size={10} />
          </button>
        )}
      </div>
      <div className="md:text-[12px] text-[14px]">
        <h1 className="text-center font-bold py-6 px-4 text-[13px]">
          {paragraphs.title}
        </h1>
        <p className="py-4 px-8 md:px-4">{paragraphs.para1}</p>
        <p className="py-4 px-8 md:px-4">{paragraphs.para2}</p>
        <p className="py-4 px-8 md:px-4">{paragraphs.para3}</p>
      </div>
    </div>
  );
};

export default SlidingCard;
