// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./partners.css";
// import { Autoplay } from "swiper/modules";
// import black from "../../assets/images/testimonials/Black.png";

// const Partners = () => {
//   const partnersLogo = [
//     black,
//     black,
//     black,
//     black,
//     black,
//     black,
//     black,
//     black,
//     black,
//   ];
//   return (
//     <>
//       <div className="">
//         <Swiper
//           slidesPerView={2}
//           spaceBetween={30}
//           breakpoints={{
//             // when window width is >= 320px
//             320: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 4,
//               spaceBetween: 30,
//             },
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//           }}
//           loop={true}
//           autoplay={{
//             delay: 0,
//             reverseDirection: true,
//           }}
//           speed={4000}
//           modules={[Autoplay]}
//           className="mySwiper swiperp swiper-container-free-mode rounde"
//         >
//           {partnersLogo.map((logo, index) => (
//             <SwiperSlide
//               key={index}
//               className="w-16 h-16 bg-transparent .swiper-slidep"
//             >
//               {" "}
//               <img
//                 src={logo}
//                 alt="partners logo"
//                 className="w-16 h-16 bg-transparent"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };
// export default Partners;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./partners.css";
import { Autoplay } from "swiper/modules";
import black from "../../assets/images/testimonials/Black.png";
import globus from "../../assets/images/partner_img/globus.jpg";
import upsurgeee from "../../assets/images/partner_img/upsurgeee.png";
import karetta from "../../assets/images/partner_img/karetta.png";
import compi from "../../assets/images/partner_img/compi.png";
const Partners = () => {
  const partnersLogo = [
    {
      id: 1,
      logoSrc: globus,
      description:
        "Globus trade company",
    },

    {
      id: 2,
      logoSrc: karetta,
      description:
        "KARETTA GIDA TiCARET Sultançiftliği Mahallesi 5. Sokak No 2/A Sultangazi/istanbul karetta@karettaticaret.com  +902124769680",
    },
    {
      id: 3,
      logoSrc: upsurgeee,
      description:
        "Upsurge Tech Addis Ababa, Ethiopia contact@upsurge.com",
    },
    {
      id: 4,
      logoSrc: compi,
      description:
        "Company one www.companyone.com ",
    },
    {
      id: 5,
      logoSrc: compi,
      description:
      "Company one www.companyone.com ",
    },
    // {
    //   id: 6,
    //   logoSrc: black,
    //   description:
    //     "Description for Logo 2 Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    // },
  ];
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 480px
            487: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            783: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper swiperp swiper-container-free-mode rounde"
        >
          {partnersLogo.map((card, index) => (
            <SwiperSlide key={index} className="bg-transparent .swiper-slidep">
              {" "}
              <div
                key={card.id}
                className="m-4 p-4 h-full w-64 border border-gray-300 rounded-lg overflow-hidden relative cursor-pointer"
                onMouseOver={() =>
                  (document.getElementById(
                    `description-${card.id}`
                  ).style.transform = "translateY(0)")
                }
                onMouseOut={() =>
                  (document.getElementById(
                    `description-${card.id}`
                  ).style.transform = "translateY(100%)")
                }
              >
                <img
                  src={card.logoSrc}
                  alt={`Logo ${card.id}`}
                  className="w-full h-full rounded-md"
                />
                <div
                  className="description absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-center transform translate-y-full transition-transform duration-500"
                  id={`description-${card.id}`}
                >
                  {card.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Partners;
