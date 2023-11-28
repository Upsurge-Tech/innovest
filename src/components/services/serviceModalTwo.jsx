import { AiOutlineClose } from "react-icons/ai";

import img1 from "../../assets/images/services/cofeeexp.jpeg";
import img2 from "../../assets/images/services/Ethiopian-Coffee.jpg";
import img3 from "../../assets/images/services/cofee.jpg";

const ServiceModalTwo = ({onClose}) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center ">
      <div className="lg:w-[950px] xs:w-full sm:w-[450px] max-w-full lg:h-[650px] h-[600px] bg-white rounded-xl p-4 flex flex-col relative overflow-y: auto">
        <div className="flex justify-end cursor-pointer">
          <AiOutlineClose size={30} onClick={onClose} />
        </div>
        <div className="lg:flex lg:placeholder:flex-col justify-between my-2 gap-x-10 hidden mx-auto ">
          <div className="w-[300px] h-[220px] basis-1/2 ">
            <img src={img2} alt="img1" className="h-full w-full max-w-full rounded-2xl" />
          </div>
          <div className="flex flex-col lg:gap-y-5 basis-1/2">
            <div className="w-[300px] h-[100px]">
              <img src={img3} alt="img2" className="h-full w-full max-w-full rounded-2xl" />
            </div>
            <div className="w-[300px] h-[100px]">
              <img src={img1} alt="img3" className="h-full w-full max-w-full rounded-2xl"/>
            </div>
          </div>
        </div>
        <div className=" mx-auto ml-16 mr-8">
        <div className="mt-[5px]">
          <h1 className="text-start text-[20px] lg:text-[20px] font-bold">
          Export and Distribution of Premium Coffee Beans
          </h1>
          <p className="lg:text-[13px] text-[11px] text-start">
          Our proficiency in coffee bean export encompasses premium-grade coffee beans.
           We prioritize stringent quality control, dependable supply, 
           and strict adherence to international standards. 
           You can rely on us as your trusted partner in the coffee industry.
          </p>
        </div>
        <div className="lg:flex justify-between text-[11px] lg:text-[13px] py-6 gap-x-5 hidden">
          <div className="">
            <div className="lg:mb-4 ">
              <h1 className="font-bold">
              Premium Coffee, Oil Seed and Sessame Seed Bean Excellence:
              </h1>
              <p className="">
              Elevate your coffee experience with our premium-grade coffee beans. 
              We take pride in exporting only the finest beans, carefully selected and
               cultivated for an unparalleled richness of flavor. Our commitment to 
               excellence is reflected in every batch we export, ensuring that you receive
                a sensory journey with each cup. Experience the epitome of coffee sophistication
                 with our premium beans, where quality meets passion.
              </p>
            </div>
            <div className="lg:mb-4 ">
              <h1 className="font-bold">Dependable Supply, Unwavering Quality:</h1>
              <p className="">
              At the core of our coffee bean export operation is a commitment to dependable supply and unwavering quality. 
              We understand the importance of a reliable source in the coffee industry.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold">
            Trusted Partner in the Coffee Industry:
            </h1>
            <p className="">
            Entrust your coffee, oil seed and other needs to a reliable partner in the industry. 
            We go beyond just exporting premium coffee beans; we establish trust. 
            Our adherence to international standards ensures that our beans not only meet 
            regulations but also surpass expectations. Whether you're a coffee roaster, 
            distributor, or retailer, consider us your dedicated ally in the coffee business.
             With us, you gain more than coffee beans – you gain a trusted partnership committed to excellence.
            </p>
          </div>
        </div>
       
          
        
      </div>
      </div>
    </div>
  );
};

export default ServiceModalTwo;