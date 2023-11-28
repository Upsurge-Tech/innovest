import { AiOutlineClose } from "react-icons/ai";

import img3 from "../../assets/images/services/elvate.jpg";
import img2 from "../../assets/images/services/elev.PNG";
import img1 from "../../assets/images/services/elev2.PNG";

const ServiceModalFive = ({onClose}) => {
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
          Importing High-Quality Elevators
          </h1>
          <p className="lg:text-[13px] text-[11px] text-start">
          Discover our selection of imported construction elevators renowned for their superior quality. 
          Our focus is on ensuring reliability, efficiency, and adherence to top-notch standards, 
          guaranteeing seamless operations for your services and projects. Rely on us for the procurement
           of premium equipment, and experience the difference in performance.

          </p>
        </div>
        <div className="lg:flex justify-between text-[11px] lg:text-[13px] py-6 gap-x-5 hidden">
          <div className="">
            <div className="lg:mb-4 ">
              <h1 className="font-bold">
              Innovative Elevator Solutions:

              </h1>
              <p className="">
              Embark on a revolutionary journey in the elevator industry with our forward-looking solutions designed to reshape the landscape. We excel in developing visionary approaches that transcend conventional elevator models. From state-of-the-art technological advancements to sustainable design innovations, we are dedicated to revolutionizing the elevator industry. Join forces with us to embrace innovation and stay at the forefront in a dynamic market.</p>
            </div>
            <div className="lg:mb-4 ">
              <h1 className="font-bold">Revolutionizing the Paradigm:</h1>
              <p className="">
              Step into a new era of importing Elevators with our revolutionary 
              solutions designed to disrupt the conventional paradigm. 
              Our commitment to innovation extends across the entire spectrum.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold">
            Your Partner in Realizing Visionary Projects:
            </h1>
            <p className="">
            Choosing to collaborate with us means embracing more than just innovation; 
            it means becoming a part of a movement dedicated to shaping the future of 
            vertical transportation. Together, let's transcend the boundaries of conventional 
            elevator models, embracing a future where our forward-looking solutions set the 
            standard for excellence. Join forces with us to stay not only at the forefront 
            but ahead of the curve in a dynamic and ever-evolving market.

</p>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  );
};

export default ServiceModalFive;