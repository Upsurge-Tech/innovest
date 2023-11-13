import ServicesCard from './ServiceCard';
import { useState } from 'react';
import ServiceModal from './serviceModal';
import ServiceModalTwo from './serviceModalTwo';
import ServiceModalThree from './serviceModalThree';
import ServiceModalFour from './serviceModalFour';

import coffee from "../../assets/images/services/cofe.jpg";
import constr from "../../assets/images/services/const.jpg";
import estate from "../../assets/images/services/estate.jpg";
import coal from "../../assets/images/services/coal.jpg";
import deco from "../../assets/images/services/deco-line.svg";
import salt from "../../assets/images/services/red-salt.jpg";
import rocks from "../../assets/images/services/white-rocks.jpg";

export default function Services() {
  const text1 = {
    title: 'Export and distribution of industrial and construction minerals.',
    content: `
          Our expertise in mineral export includes industrial and construction
          minerals. We excel in quality control, reliable supply, and adherence
          to international standards, ensuring you can trust us as your partner
          in this sector.
        `,
    onReadMore: () => alert('card1 clicked'),
  }

  const text2 = {
    title: 'Export and Distribution of Premium Coffee Beans',
    content: `
    Our proficiency in coffee bean export encompasses premium-grade 
    coffee beans. We prioritize stringent quality control, dependable supply, 
    and strict adherence to international standards.
     You can rely on us as your trusted partner in the coffee industry.
              `,};

    const text3 = {
      title: 'Importing High-Quality Construction Machinery',
      content: `
      Explore our range of high-quality construction machinery imports.
      We prioritize reliability, efficiency, and top-notch standards, ensuring your construction 
      projects run smoothly. Trust us for premium equipment sourcing.
                `,};

    const text4 = {
      title: 'Innovative Real Estate Solutions',
      content: `
      Discover innovative real estate solutions tailored to your needs. 
      From residential to commercial properties, we provide a diverse portfolio. 
      Our commitment to excellence ensures a seamless experience, whether buying, 
      selling, or investing in real estate.
                `,};
    // onReadMore: () => alert('card2 clicked'),
    const [showModal, setShowModal] = useState(false);
    const modalFunction = () => {
      setShowModal(true);
  }
      const [showModalTwo, setShowModalTwo] = useState(false);
      const modalFunctionTwo = () => {
        setShowModalTwo(true);
    }
    const [showModalThree, setShowModalThree] = useState(false);
    const modalFunctionThree = () => {
      setShowModalThree(true);
    }
    const [showModalFour, setShowModalFour] = useState(false);
    const modalFunctionFour = () => {
      setShowModalFour(true);
    }



  const images1 = (
    <div className="flex-1 flex-grow flex  ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover rounded-xl"
        src={coal}
        alt = ""
      />
      <div className="flex-1 flex flex-col">
        <img
          className="flex-[5] min-w-0 object-cover  rounded-xl"
          src={salt}
          alt = ""
        />
        <img
          className="flex-[3] min-w-0 object-cover  rounded-xl"
          src={rocks}
          alt = ""
        />
      </div>
    </div>
  )

  const images2 = (
    <div className="flex-1 flex-grow flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover rounded-xl"
        src={coffee}
        alt = ""
      />
    </div>
  )
  const images3 = (
    <div className="flex-1 flex-grow flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover rounded-xl"
        src={constr}
        alt = ""
      />
    </div>
  )
  const images4 = (
    <div className="flex-1 flex-grow flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover rounded-xl"
        src={estate}
        alt = ""
      />
    </div>
  )
  

  return (
    <main id="services" className="min-w-screen pt-16 mt-8">
  
      <div className="flex flex-col items-center justify-center bg-black min-h-[128px] ">
        {/* header */}
        <img 
        src={deco}
        alt = ""
       
        />
        <h2 className="text-white text-[35px] ">Services</h2>
      </div>

      <div className="px-[2rem] py-[90px]">
        <div className=" text-[#4A5568] flex flex-col gap-[81px] max-w-[1244px] m-auto ">
          <ServicesCard
            imageComponent={images1}
            title={text1.title}
            content={text1.content}
            onReadMore={() => modalFunction()}
            flip={false}
          />

          <ServicesCard
            imageComponent={images2}
            title={text2.title}
            content={text2.content}
            onReadMore={() => modalFunctionTwo()}
            flip={true}
          />
          <ServicesCard
            imageComponent={images3}
            title={text3.title}
            content={text3.content}
            onReadMore={() => modalFunctionThree()}
            flip={false}
          />

          <ServicesCard
            imageComponent={images4}
            title={text4.title}
            content={text4.content}
            onReadMore={() => modalFunctionFour()}
            flip={true}
          />
          {showModal && (
            <ServiceModal onClose={() => setShowModal(false)}/>
          )}
          {showModalTwo && (
            <ServiceModalTwo onClose={() => setShowModalTwo(false)}/>
          )}
          {showModalThree && (
            <ServiceModalThree onClose={() => setShowModalThree(false)}/>
          )}
          {showModalFour && (
            <ServiceModalFour onClose={() => setShowModalFour(false)}/>
          )}
        </div>  
      </div>
    </main>
  )
}
