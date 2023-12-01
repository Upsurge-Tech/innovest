import React from "react";
import Line from "../../assets/images/about/Line.png";
import Innovation from "../../assets/images/about/Innovation.png";
import Card from "./Card";
import { motion } from "framer-motion";


   const doc1 = {
     title: "Innovation",
     paragraph:
       "We are dedicated to fostering innovation, continuously seeking new and creative ",
     image: Innovation,
   };
   const doc2 = {
     title: "Innovation",
     paragraph:
       "We are dedicated to fostering innovation, continuously seeking new and creative ",
     image: Innovation,
   };
   const doc3 = {
     title: "Innovation",
     paragraph:
       "We are dedicated to fostering innovation, continuously seeking new and creative ",
     image: Innovation,
   }


const About = () => {
  return (
    <div className="md:mb-20 mb-4">
      <div className="md:py-12 py-8">
        <div className="w-12 mx-auto">
          <img src={Line} alt="line" className="w-fu;l" />
        </div>
        <h1 className="text-center font-bold md:text-[30px] text-[30px]">
          About Us
        </h1>
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
        <div className="flex flex-col items-start justify-center md:ml-[170px] ml-6 md:mb-16 mb-10 text-[30px]">
          <div className="w-12">
            <img src={Line} alt="line" className="w-full" />
          </div>
          <p className="">
            Know the Business <br />
            <span className="font-bold">We are Committed to</span>
          </p>
        </div>
      </motion.div>
      <div className="md:w-2/3 w-5/6 mx-auto flex flex-wrap gap-y-6 justify-between">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
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
