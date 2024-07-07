"use client";
import React, { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconArrowCart from "../Icons/IconArrowCart";

const projects = [
  {
    title: "Projekt Brno",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Krahulčia",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Bodnár",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt SkyPark",
    photo: "/main_picture.png",
  },
];

const ServiceIntro = () => {
  const [isHovered, setIsHovered] = useState(-1);
  return (
    <main className="bg-secondary">
      <div className="main_section additional_padding">
        <h4 className="text-tertiary">Terasy</h4>
        <p className="text-tertiary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <Image
        src={"/terasa.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
      />
      <div className="main_section ">
        <h4 className="text-tertiary">Galeriálne terasy</h4>
        <p className="text-tertiary">
          Projekty ukazovať podľa Instagramu a Facebooku Ukázať: T138 (tvar
          dosky), OKUME (farba dosky), Bazény (aplikácia) Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
          ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        speed={1000}
        className="h-[500px] "
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full rounded-[8px] cursor-pointer"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              {isHovered === index && (
                <div className="absolute w-full h-full bg-[#363128] opacity-70 rounded-[8px] transition-opacity duration-300"></div>
              )}

              <Image
                src={item.photo}
                alt="hlavna_fotka"
                height={1000}
                width={1000}
                quality={100}
                priority={true}
                className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[8px]"
              />

              <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {item.title}
              </h6>
              <div
                className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-[15%] scale-[150%] ${
                  isHovered === index ? "left-3/4" : "left-1/2"
                } duration-300`}
              >
                <IconArrowCart />
              </div>
              {isHovered === index && (
                <button className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  galéria
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ServiceIntro;
