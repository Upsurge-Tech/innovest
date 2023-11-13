import ValueMissionCard from '../our-mission-and-vision/ValueMissionCard';
import deco from "../../assets/images/vision-and-mission/deco-line.svg";
import setting from "../../assets/images/vision-and-mission/setting.svg";
import target from "../../assets/images/vision-and-mission/target.svg";

export default function OurMissionAndVision() {
  const visions = [
    'Our vision is to be the preferred partner for exporting minerals and agricultural products in Africa, known for excellence and sustainable practices.',
    "We aspire to be a trusted company, forging strong partnerships and contributing to Ethiopia's global trade prominence.",
    'We aim to lead with quality, reliability, and innovation, making Ethiopian products globally recognized for excellence and sustainability.',
  ]
  const missions = [
    'Our mission is to connect Ethiopian businesses with global markets through the export of minerals and agricultural products, fostering sustainable growth in the region.',
    "We're committed to reliable supply chain management, international standards, and customer-centric service to drive economic prosperity in Ethiopia.",
    'We aim to lead in the export of minerals and agricultural products, making a positive impact on communities and striving for operational excellence.',
  ]

  return (
    <div className="pt-[2rem] pb-[5rem] bg-[#262626]">
      <div className="flex flex-col gap-[44px] m-auto  max-w-[1211px]">
        <div className="text-white">
          <img 
          src={deco}
          />
          <p className="text-[35px]">Know the Business</p>
          <h2 className="text-[35px] font-bold">Our Mission and Vision</h2>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-[65px]">
          <ValueMissionCard
            bulletIcon={target}
            title={'Mission'}
            statements={missions}
            hasBlueCircle={true}
          />

          <ValueMissionCard
            bulletIcon={setting}
            title={'Vision'}
            statements={visions}
            hasBlueCircle={false}
          />
        </div>
      </div>
    </div>
  )
}
