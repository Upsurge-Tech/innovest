import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonials.css";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const xValue = isMobile ? 0 : 100;
  return (
    <div id ="testimonials" className="mt-12 pt-4">
      <div className="ml-8 mt-12 sm:mt-20">
        <div  className="grid grid-cols-3 overflow-hidden ">
          <motion.h2
            className="text-2xl md:text-3xl lg:4xl xl:text-5xl font-extrabold text-[#00407B] col-span-3 sm:col-span-1"
            initial={{ x: -100 }}
            whileInView={{ x: xValue, transition: { duration: 1 } }}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="sm:col-span-2 h-10 bg-black w-full mt-1 hidden sm:block"
            initial={{ x: 400 }}
            whileInView={{ x: xValue, transition: { duration: 1 } }}
          ></motion.div>
        </div>
      </div>

      <div className="lg:mx-36 my-20">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
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
    </div>
  );
};
export default Testimonilas;
