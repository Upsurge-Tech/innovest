import React from "react";
// import React, { useState } from "react";
import { motion } from "framer-motion";
// import Line from "../../assets/images/about/Line.png";

import Innovation from "../../assets/images/about/Innovation.png";
import Innovation2 from "../../assets/images/about/Omnichannel.png";
import Innovation3 from "../../assets/images/about/Growing Money.png";
import Card from "./Card";
// import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import deco from "../../assets/images/vision-and-mission/deco-line.svg";

   const doc1 = {
     title: "Innovation",
     paragraph:
       " We are dedicated to fostering innovation, continuously seeking solutions to enhance our business practices and benefit our clients.",
     image: Innovation,
   };
   const doc2 = {
     title: "Multi sector",
     paragraph:
       "We engage in diverse industries, providing comprehensive solutions and opportunities for sustainable growth in various sectors.",
     image: Innovation2,
   };
   const doc3 = {
     title: "Investment",
     paragraph:
       "Our unwavering commitment to investment enables us to grow and expand, ensuring that we can better serve our clients.",
     image: Innovation3,
   }

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmall = window.innerWidth <= 830;
  const xValue = isSmall ? 50 : 200;

  const prop = "w-5/6 mx-auto gap-y-8 flex flex-wrap justify-between";
  const prop2 = "md:w-2/3 w-5/6 mx-auto flex flex-wrap justify-between gap-y-6";
  const prop3 = isSmall ? prop : prop2;

  return (
    <div className="md:mb-20 mb-4 pt-12" id="about">
      <div className="md:py-12 md:grid md:grid-cols-3 md:gap-20 overflow-hidden">
        <motion.h2
          className="md:text-5xl text-4xl font-extrabold text-[#00407B] md:col-span-1"
          initial={{ x: -100 }}
          whileInView={{ x: xValue, transition: { duration: 1 } }}
        >
          About
        </motion.h2>
        {isMobile ? (
          " "
        ) : (
          <motion.div
            className="col-span-2 h-10 bg-black w-full mt-1"
            initial={{ x: 400 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          ></motion.div>
        )}
      </div>
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex-row mr-4 p-4 text-2xl text-left sm:text-[25px] mb-4 md:mb-12 mt-12 md:mt-0 text-gray-900 md:ml-[200px] ml-6">
          <img src={deco} alt="deco" />
          <h2 className="">Know the Business</h2>
          <p className="text-gray-900 font-bold">We are Committed to</p>
        </div>
      </motion.div>

      <div className={prop3}>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title={doc1.title}
            paragraph={doc1.paragraph}
            image={doc1.image}
          />
        </motion.div>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title={doc2.title}
            paragraph={doc2.paragraph}
            image={doc2.image}
          />
        </motion.div>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title={doc3.title}
            paragraph={doc3.paragraph}
            image={doc3.image}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
