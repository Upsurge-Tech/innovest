import React, { useState } from "react";

import img1 from "../../assets/images/partner_img/Elon.png";
import img2 from "../../assets/images/partner_img/Modi.jpg";
import img3 from "../../assets/images/partner_img/Albert.jpeg";
import img4 from "../../assets/images/partner_img/Messi.jpg";
import img5 from "../../assets/images/partner_img/Mandela.jpg";
import right from "../../assets/images/partner_img/Right.png";


export const cards = [
  {
    image: img1,
    name: "Elon Musk",
    role: "Manager",
    quote:
      ' "I couldn\'t be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding. I highly recommend them to anyone looking for a trustworthy partner in the industry"',
  },
  {
    image: img2,
    name: "Narendra Modi",
    role: "Manager",
    quote:
      ' "I am extremely satisfied with the services offered by XYZ Company. Their dedication to excellence and dependability is truly remarkable. I wholeheartedly endorse them to anyone seeking a reliable partner in the field."',
  },
  {
    image: img3,
    name: "Albert Einstain",
    role: "Researcher",
    quote:
      ' "I am overjoyed with the exceptional services provided by ABC Corporation. Their unwavering commitment to delivering quality and reliability is truly exceptional. I enthusiastically recommend them to anyone searching for a reliable partner in the sector."',
  },
  {
    image: img5,
    name: "Nelson Mandela",
    role: "Researcher",
    quote:
      ' "I am thrilled with the top-notch services extended by DEF Enterprises. Their steadfast dedication to providing quality and reliability is genuinely impressive. I highly recommend them to anyone in need of a trustworthy partner in the business."',
  },
  {
    image: img4,
    name: "Leonel Messi",
    role: "Researcher",
    quote:
      ' "I am delighted with the outstanding services rendered by GHI Industries. Their unwavering commitment to delivering excellence and reliability is truly commendable. I wholeheartedly endorse them to anyone seeking a dependable partner in the industry."',
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const currentCard = cards[currentIndex];
  const previousIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;
  const previousCard = cards[previousIndex];
  const nextCard = cards[nextIndex];

  return (
    <div className="flex justify-between mt-16 md:mt-10 w-4/5 mx-auto">
      <button className="" onClick={handlePrevious}>
        <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
          <img
            src={right}
            alt="Right_arrow"
            className="w-full transform rotate-180"
          />
        </div>
      </button>
      <div className="">
        <div className="md:w-[400px] w-full text-center mx-auto">
          <p className="text-[#718096]">{currentCard.quote}</p>
        </div>
        <div className="flex justify-between w-full items-center mx-auto md:mt-[60px] mt-[30px]">
          <img
            src={previousCard.image}
            alt="Person"
            className="rounded-full md:w-20 md:h-20 w-14 h-14 opacity-50 hidden md:block"
          />
          <img
            src={currentCard.image}
            alt="Person"
            className="rounded-full md:w-[120px] md:h-[120px] w-[80px] h-[80px] mx-auto"
          />
          <img
            src={nextCard.image}
            alt="Person"
            className="rounded-full md:w-20 md:h-20 w-14 h-14 opacity-50 hidden md:block"
          />
        </div>
        <div className="text-center md:mt-4">
          <p className="font-bold text-[20px] text-[#00407B]">
            {currentCard.name}
          </p>
          <p className="text-[15px]">{currentCard.role}</p>
        </div>
      </div>
      <button className="" onClick={handleNext}>
        <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
          <img
            src={right}
            alt="Right_arrow"
            className="w-full"
          />
        </div>
      </button>
    </div>
  );
};

export default CardCarousel;
