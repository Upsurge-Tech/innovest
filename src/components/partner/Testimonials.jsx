import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonials.css";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Jone Doe",
    paragraph:
      "I couldn't be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding.",
  },
  {
    name: "Jone Doe",
    paragraph:
      "I couldn't be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding. ",
  },
  {
    name: "Jone Doe",
    paragraph:
      "I couldn't be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding. ",
  },
  {
    name: "Jone Doe",
    paragraph:
      "I couldn't be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding. ",
  },
  {
    name: "Jone Doe",
    paragraph:
      "I couldn't be happier with the services provided by Innovest Africa Business Group. Their commitment to quality and reliability is truly outstanding. ",
  },
];
const Testimonilas = () => {
  return (
    <>
      {/* <motion.div
        className="ml-36"
        initial={{ x: -400 }}
        whileInView={{ x: 0, transition: { duration: 1 } }}
      >
        <div className="grid grid-cols-3 gap-20">
          <h2 className="text-5xl font-extrabold text-[#00407B] col-span-1">
            Testimonials
          </h2>
          <div className="col-span-2 h-10 bg-black w-full mt-1"></div>
        </div>
      </motion.div> */}

      <div id='#testimonials' className="ml-36">
        <div className="grid grid-cols-3 gap-20 overflow-hidden">
          <motion.h2
            className="text-5xl font-extrabold text-[#00407B] col-span-1"
            initial={{ x: -100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="col-span-2 h-10 bg-black w-full mt-1"
            initial={{ x: 400 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          ></motion.div>
        </div>
      </div>

      <div className="mx-36 my-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 0,
          }}
          speed={4000}
          // navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper swipert swiper-container-free-mode swiper-wrapper rounded-2xl"
        >
          <div className="rounded-lg">
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="rounded-2xl swiper-slidet">
                <div className="m-12 font-poppins">
                  <p className="text-justify">
                    <span className="text-blue-600 text-5xl">&#8220;</span>
                    {testimonial.paragraph}{" "}
                  </p>
                  <span className="text-blue-600 text-5xl text-end">
                    &#8221;
                  </span>

                  <h2 className="text-center font-bold">{testimonial.name}</h2>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default Testimonilas;