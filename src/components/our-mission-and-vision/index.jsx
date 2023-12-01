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
        "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    },
    {
      title: "Tech",
      description:
        "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
    },
  ];
  const values = [
    {
      title: "Solutions",
      description:
        "We take a personalized approach to every project, working closely with you to understand your business and create specific solutions.",
    },
    {
      title: "Results",
      description:
        "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
    },
  ];

  return (
    <div className="pt-[2rem] md:ml-40 md:mr-16 ml-12 mr-8 ">
      <div className="flex flex-col gap-[44px]">
        <div className="flext flex-col space-y-3">
          <img src={deco} />
          <p className="text-2xl sm:text-3xl md:text-[35px]">
            Know the Business
          </p>
          <h2 className="text-xl sm:text-3xl md:text-[35px] font-bold">
            Our Vision and Mission
          </h2>
        </div>
        <br />
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="mt-28 hidden xl:block">
          <motion.img
            src={market}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
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
