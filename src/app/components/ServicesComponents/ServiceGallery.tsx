"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import IconArrowCart from "../Icons/IconArrowCart";
import IconGalleryLeft from "../Icons/IconGalleryLeft";
import IconGalleryRight from "../Icons/IconGalleryRight";

const projects = [
  {
    title: "Projekt Brno",
    photo: "/o_nas.jpg",
  },
  {
    title: "Projekt Krahulčia",
    photo: "/o_nas.jpg",
  },
  {
    title: "Projekt Bodnár",
    photo: "/o_nas.jpg",
  },
  {
    title: "Projekt SkyPark",
    photo: "/o_nas.jpg",
  },
];

interface Props {
  nadpis_galeria: string;
}

const ServiceGallery = ({ nadpis_galeria }: Props) => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <>
      {" "}
      <div className=" relative h-[40px] max-w-[360px] text-tertiary items-center border-[1.4px] border-black flex flex-row justify-center z-10 m-auto mb-8">
        <div className="w-16 h-16 z-20 absolute left-0 -ml-8 -mt-[1px] arrow-right">
          <IconGalleryLeft />
        </div>
        <div className="text-center"> {nadpis_galeria}</div>
        <div className="w-16 h-16 z-20 absolute right-0 -mr-8 -mt-[1px] arrow-left">
          <IconGalleryRight />
        </div>
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
        loop={true}
        freeMode={true}
        modules={[Navigation]}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
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
    </>
  );
};

export default ServiceGallery;
