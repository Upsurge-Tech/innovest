import { AiOutlineClose } from "react-icons/ai";

import img1 from "../../assets/images/services/seeds.jpeg";
import img2 from "../../assets/images/services/sesame.jpeg";
import img3 from "../../assets/images/services/seeding.jpeg";

const ServiceModalSix = ({onClose}) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center ">
      <div className="lg:w-[950px] xs:w-full sm:w-[450px] max-w-full lg:h-[650px] h-[600px] bg-white rounded-xl p-4 flex flex-col relative overflow-y: auto">
        <div className="flex justify-end cursor-pointer">
          <AiOutlineClose size={30} onClick={onClose} />
        </div>
        <div className="lg:flex lg:placeholder:flex-col justify-between my-2 gap-x-10 hidden mx-auto ">
          <div className="w-[300px] h-[220px] basis-1/2 ">
            <img src={img1} alt="img1" className="h-full w-full max-w-full rounded-2xl" />
          </div>
          <div className="flex flex-col lg:gap-y-5 basis-1/2">
            <div className="w-[300px] h-[100px]">
              <img src={img3} alt="img2" className="h-full w-full max-w-full rounded-2xl" />
            </div>
            <div className="w-[300px] h-[100px]">
              <img src={img2} alt="img3" className="h-full w-full max-w-full rounded-2xl"/>
            </div>
          </div>
        </div>
        <div className=" mx-auto ml-16 mr-8">
        <div className="mt-[5px]">
          <h1 className="text-start text-[20px] lg:text-[20px] font-bold">
          Export of oilseeds beans and coffee
          </h1>
          <p className="lg:text-[13px] text-[11px] text-start">
          Discover innovative real estate solutions tailored to your needs. From residential to commercial properties, we provide a diverse portfolio. Our commitment to excellence ensures a seamless experience, whether buying, selling, or investing in real estate.


          </p>
        </div>
        <div className="lg:flex justify-between text-[11px] lg:text-[13px] py-6 gap-x-5 hidden">
          <div className="">
            <div className="lg:mb-4 ">
              <h1 className="font-bold">
              Innovative at Export Solutions:

              </h1>
              <p className="">
              Embark on a transformative voyage in the export of oilseeds and sesame seeds with our cutting-edge solutions tailored to redefine the industry. We specialize in crafting innovative approaches that elevate traditional export models. From advanced supply chain logistics to sustainable packaging solutions, we are committed to transforming the oilseed and sesame seed export landscape. 
              Partner with us to embrace innovation and stay ahead in a dynamic and competitive market. </p>
            </div>
            <div className="lg:mb-4 ">
              <h1 className="font-bold">Revolutionizing the seed Paradigm:</h1>
              <p className="">
              In addition, our commitment extends to sustainable practices, with a focus on introducing eco-friendly packaging solutions. By addressing environmental concerns and adopting responsible practices, we aim to contribute to a positive transformation in the oilseed and sesame seed export landscape.</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold">
            Your Partner in Realizing Visionary Projects:
            </h1>
            <p className="">
            Choosing to partner with us means embracing not only innovation but also a strategic commitment to staying ahead 
            in a dynamic and competitive market. Our goal is to offer you a transformative experience, 
            where forward-thinking solutions pave the way for success in an ever-evolving industry. 
            Join us on this journey towards excellence, where tradition meets innovation, and together,
             we redefine the future of oilseed and sesame seed exports.</p>
          </div>
        </div>
        <div className="text-[11px] lg:text-[13px] py-3 lg:hidden">
          <div className="">
            <div className="lg:mb-4">
              <h1 className="font-bold">
                Expertise in Export and Distribution:
              </h1>
              <p className="">
                Our team possesses an in-depth understanding of the nuances of
                mineral export. We have honed our expertise over the years,
                allowing us to navigate the complexities of international
                markets and supply chains with confidence.
              </p>
            </div>
            <div className="mt-[7px]">
              <h1 className="font-bold">Diverse Range if Minerals:</h1>
              <p className="w-full">
                Our portfolio includes a diverse range of minerals, each
                tailored to specific industrial applications. We provide
                detailed information about the minerals we deal with, their
                applications, and the industries they serve. Whether it is
                minerals used in construction, manufacturing, or other sectors,
                we have you covered. By understanding the unique properties and
                uses of these minerals, we are well-equipped to meet your
                specific needs.
              </p>
            </div>
          </div>
          <div className="mt-[7px]">
            <h1 className="font-bold">
              Quality, Reliability, and Ethical Sourcing:
            </h1>
            <p className="">
              Quality and reliability are at the core of our mineral export
              services. We uphold the highest standards in sourcing, handling,
              and delivering these minerals to our clients.{" "}
              <span className="hidden lg:block">
                Our commitment to ethical sourcing practices not only ensures
                the sustainability of these resources but also helps us build
                trust with our clients. We recognize the importance of
                responsible mineral sourcing in todays global market, and we are
                dedicated to making a positive impact.
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ServiceModalSix;