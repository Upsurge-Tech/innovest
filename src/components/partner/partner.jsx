import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./partners.css";
import { Autoplay } from "swiper/modules";
import black from "../../assets/images/testimonials/Black.png";


const Partners = () => {
  const partnersLogo = [
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black,
  ];
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper swiperp swiper-container-free-mode rounde"
        >
          {partnersLogo.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="w-16 h-16 bg-transparent .swiper-slidep"
            >
              {" "}
              <img
                src={logo}
                alt="partners logo"
                className="w-16 h-16 bg-transparent"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Partners;