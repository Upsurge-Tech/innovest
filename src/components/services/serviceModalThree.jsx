import { AiOutlineClose } from "react-icons/ai";

import img1 from "../../assets/images/services/const.jpg";
import img2 from "../../assets/images/services/mach.jpg";
import img3 from "../../assets/images/services/machinery.webp";

const ServiceModalThree = ({onClose}) => {
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
          Importing High-Quality Construction Machinery
          </h1>
          <p className="lg:text-[13px] text-[11px] text-start">
          Explore our range of high-quality construction machinery imports. We prioritize reliability, efficiency, and top-notch standards, ensuring your construction projects run smoothly. Trust us for premium equipment sourcing.
          </p>
        </div>
        <div className="lg:flex justify-between text-[11px] lg:text-[13px] py-6 gap-x-5 hidden">
          <div className="">
            <div className="lg:mb-4 ">
              <h1 className="font-bold">
              High-Quality Construction Machinery Imports:
              </h1>
              <p className="">
              Transform your construction projects with our high-quality machinery imports. We specialize in sourcing and delivering top-tier construction equipment that meets the highest industry standards. From excavators to cranes, each piece is selected for its superior performance and durability. Elevate your construction endeavors with our commitment to excellence in every imported machine, ensuring your projects stand on a foundation of quality.
            </p>
            </div>
            <div className="lg:mb-4 ">
              <h1 className="font-bold">Reliable Supply, Unmatched Quality:</h1>
              <p className="">
              Depend on us for a steady supply of construction machinery that redefines quality. Our import operations prioritize the consistent delivery of top-notch equipment, backed by stringent quality control measures. 
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold">
            Your Trusted Ally in Construction:
            </h1>
            <p className="">
            As a trusted ally in the construction industry, we offer more than just machinery imports – we offer a commitment to your success. Our adherence to international standards ensures that each piece of equipment surpasses regulatory requirements. Whether you're a contractor, developer, or construction professional, consider us your dedicated partner. With our imported construction machinery, you're not just receiving equipment; you're gaining a reliable ally devoted to delivering excellence to your construction endeavors.
            </p>
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

export default ServiceModalThree;