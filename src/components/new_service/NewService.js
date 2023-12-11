import React, { useState } from "react";
import { motion } from "framer-motion";
import SmallCards from "./SmallCards";
import Building from "../../assets/images/Newservice/Building.png";
import Coffee from "../../assets/images/Newservice/Coffee.png";
import Curtains from "../../assets/images/Newservice/Curtains.png";
import Forklift from "../../assets/images/Newservice/Forklift.png";
import Topaz from "../../assets/images/Newservice/Topaz.png";
import SlidingCard from "./SlidingCard";
import {
  para_Coffee,
  para_Building,
  para_Curtains,
  para_Forklift,
  para_topaz,
  Topaz_list,
  Forklift_list,
  Building_list,
  Coffee_list,
  Curtains_list,
} from "./Document";

import { useMediaQuery } from "react-responsive";

const NewService = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmall = window.innerWidth <= 820;
  const [activeCard, setActiveCard] = useState("div_1");
  const [activeClick, setActive] = useState(1);
  const xValue = isSmall ? 50 : 200;

  const prop = "w-5/6 mx-auto";
  const prop2 = "md:flex md:justify-between md:w-5/6 mx-auto w-full";
  const prop3 = isSmall ? prop : prop2;

  const handleCardHover = (card) => {
    setActiveCard(card);
  };

  return (
    <div
      id="newService"
      className="bg-[#ece9e9] md:py-8 py-6 mt-8 overflow-hidden"
    >
      <div className="md:py-12 md:grid md:grid-cols-3 md:gap-20 overflow-hidden">
        <motion.h2
          className="md:text-5xl text-4xl font-extrabold text-[#00407B] md:col-span-1"
          initial={{ x: -100 }}
          whileInView={{ x: xValue, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Service
        </motion.h2>
        {isMobile ? (
          " "
        ) : (
          <motion.div
            className="col-span-2 h-10 bg-black w-full mt-1"
            initial={{ x: 400 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.5 }}
          ></motion.div>
        )}
      </div>
      <div className={prop3}>
        <div className="basis-1/2 md:py-10">
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
            <SmallCards
              image={Topaz}
              paragraph="Export and distribution of industrial and construction minerals."
              divText="div_1"
              setActiveCard={handleCardHover}
              active={activeClick}
              setActive={setActive}
              id={1}
            />
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SmallCards
              image={Building}
              paragraph="Innovative Real Estate Solutions"
              divText="div_2"
              setActiveCard={handleCardHover}
              active={activeClick}
              setActive={setActive}
              id={2}
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
            <SmallCards
              image={Coffee}
              paragraph="Export and Distribution of Premium Coffee, Oilseed and Sesame Beans"
              divText="div_3"
              setActiveCard={handleCardHover}
              active={activeClick}
              setActive={setActive}
              id={3}
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
            <SmallCards
              image={Curtains}
              paragraph="Importing High-Quality Elevators"
              divText="div_4"
              setActiveCard={handleCardHover}
              active={activeClick}
              setActive={setActive}
              id={4}
            />
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SmallCards
              image={Forklift}
              paragraph="Importing High-Quality Construction Machinery"
              divText="div_5"
              setActiveCard={handleCardHover}
              active={activeClick}
              setActive={setActive}
              id={5}
            />
          </motion.div>
        </div>
        <div className="basis-1/2">
          <div className="">
            {activeCard === "div_1" && (
              <SlidingCard images={Topaz_list} paragraphs={para_topaz} />
            )}
            {activeCard === "div_2" && (
              <SlidingCard images={Building_list} paragraphs={para_Building} />
            )}
            {activeCard === "div_3" && (
              <SlidingCard images={Coffee_list} paragraphs={para_Coffee} />
            )}
            {activeCard === "div_4" && (
              <SlidingCard images={Curtains_list} paragraphs={para_Curtains} />
            )}
            {activeCard === "div_5" && (
              <SlidingCard images={Forklift_list} paragraphs={para_Forklift} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewService;
