import ServicesCard from './ServiceCard';
import { useState } from 'react';
import ServiceModal from './serviceModal';
import ServiceModalTwo from './serviceModalTwo';
import ServiceModalThree from './serviceModalThree';
import ServiceModalFour from './serviceModalFour';
import ServiceModalFive from './servicesModalFive';
import ServiceModalSix from './servicesModalSix';

import coffee from "../../assets/images/services/cofeeexp.jpeg";
import constr from "../../assets/images/services/const.jpg";
import estate from "../../assets/images/services/estate.jpg";
import coal from "../../assets/images/services/coal.jpg";
import deco from "../../assets/images/services/deco-line.svg";
import salt from "../../assets/images/services/red-salt.jpg";
import rocks from "../../assets/images/services/white-rocks.jpg";
import elev from "../../assets/images/services/elvate.jpg";
import oilseed from "../../assets/images/services/seeds.jpeg";

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
    title: 'Export and Distribution of Premium Coffee, Oilseed and Sessame Beans',
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
      title: ' Innovative Real Estate Solutions',
      content: `
      Discover innovative real estate solutions tailored to your needs. 
      From residential to commercial properties, we provide a diverse portfolio. 
      Our commitment to excellence ensures a seamless experience, whether buying, 
      selling, or investing in real estate.
                `,};
    const text5 = {
      title: 'Importing High-Quality Elevators ',
      content: `
      Discover our selection of imported construction elevators renowned for their superior quality. 
      Our focus is on ensuring reliability, efficiency, and adherence to top-notch standards, 
      guaranteeing seamless operations for your services and projects. 
      Rely on us for the procurement of premium equipment, and experience the difference in performance.
                `,};

    // const text6 = {
    //   title: 'Export of oilseeds beans and coffeeUse coffee sesame and beans',
    //   content: `
    //   Embark on a journey of discovery in the realm of oilseed beans export. 
    //   Our innovative solutions are crafted to cater to your specific requirements.
    //    Whether you are venturing into residential or commercial properties, our diverse portfolio stands ready. 
    //                         `,};
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
    const [showModalFive, setShowModalFive] = useState(false);
    const modalFunctionFive = () => {
      setShowModalFive(true);
    }
    // const [showModalSix, setShowModalSix] = useState(false);
    // const modalFunctionSix = () => {
    //   setShowModalSix(true);
    // }



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
  const images5 = (
    <div className="flex-1 flex-grow flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover rounded-xl"
        src={elev}
        alt = ""
      />
    </div>
  )
  // const images6 = (
  //   <div className="flex-1 flex-grow flex ">
  //     {/* images */}
  //     <img
  //       className="flex-1 min-w-0 object-cover rounded-xl"
  //       src={oilseed}
  //       alt = ""
  //     />
  //   </div>
  // )

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
          <ServicesCard
            imageComponent={images5}
            title={text5.title}
            content={text5.content}
            onReadMore={() => modalFunctionFive()}
            flip={false}
          />
          {/* <ServicesCard
            imageComponent={images6}
            title={text6.title}
            content={text6.content}
            onReadMore={() => modalFunctionSix()}
            flip={true}
          /> */}
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
          {showModalFive && (
            <ServiceModalFive onClose={() => setShowModalFive(false)}/>
          )}
          {/* {showModalSix && (
            <ServiceModalSix onClose={() => setShowModalSix(false)}/>
          )} */}
        </div>  
      </div>
    </main>
  )
}
