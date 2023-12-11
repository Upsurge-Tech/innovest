import deco from "../../assets/images/vision-and-mission/deco-line.svg";
import market from "../../assets/images/vision-and-mission/market.png";
import React from "react";
import MissionAndVisionCard from "./MissionAndVisionCard";
import { motion } from "framer-motion";

const OurMissionAndVision = () => {
  const missions = [
    {
      title: "Expertise",
      description:
        "Our team of experienced experts have the knowledge and expertise to deliver innovative solutions that meet your unique needs.",
    },
    {
      title: "Tech",
      description:
        "We're committed to reliable supply chain management, international standards, and customer-centric service to drive economic prosperity in Ethiopia.",
    },
  ];
  const values = [
    {
      title: "Solutions",
      description:
        "We aspire to be a trusted company, forging strong partnerships and contributing to Ethiopia's global trade prominence.",
    },
    {
      title: "Results",
      description:
        "We aim to lead in the export of minerals and agricultural products, making a positive impact on communities and striving for operational excellence.",
    },
  ];

  return (
    <div className="pt-[2rem] md:ml-40 md:mr-16 ml-12 mr-8 ">
      
      <div className="text-left flex-row mr-4 p-4 text-2xl text-left sm:text-[25px] mb-4 md:mb-12 text-gray-900">
        <img src={deco} />
          <h2 className="">Know the Business</h2>
          <p className="text-gray-900 font-bold">We are Committed to</p>
        </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="mt-28 hidden xl:block">
          <motion.img
            src={market}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 }, x: -40 }}
          />
        </div>
        <div>
          <motion.div
            className="mt-8 flex flex-row justify-between lg:space-x-4 flex-wrap"
            initial={{ y: 120 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            {missions.map((mission, index) => (
              <MissionAndVisionCard
                title={mission.title}
                description={mission.description}
                key={index}
              />
            ))}
          </motion.div>
          <motion.div
            className="mt-8 flex flex-row justify-between lg:space-x-10 flex-wrap"
            initial={{ y: 120 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            {values.map((mission, index) => (
              <MissionAndVisionCard
                title={mission.title}
                description={mission.description}
                key={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionAndVision;
