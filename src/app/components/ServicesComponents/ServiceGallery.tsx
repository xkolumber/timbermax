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
import { Gallery } from "@/app/lib/interface";
import Link from "next/link";
import { getFirstWord } from "@/app/lib/functionsClient";

interface Props {
  nadpis_galeria: string;
  galleries: Gallery[] | [];
}

const ServiceGallery = ({ nadpis_galeria, galleries }: Props) => {
  const [isHovered, setIsHovered] = useState(-1);

  console.log(nadpis_galeria);

  return (
    <>
      {" "}
      <div className="hidden md:flex relative h-[40px] max-w-[360px] text-tertiary items-center border-[1.4px] border-black flex-row justify-center z-10 m-auto mb-8">
        <div className="w-16 h-16 z-20 absolute left-0 -ml-8 -mt-[1px] arrow-right">
          <IconGalleryLeft />
        </div>
        <div className="text-center"> {nadpis_galeria}</div>
        <div className="w-16 h-16 z-20 absolute right-0 -mr-8 -mt-[1px] arrow-left">
          <IconGalleryRight />
        </div>
      </div>
      <div className="main_section md:hidden ">
        <div className=" relative h-[40px] w-[90%] text-tertiary items-center border-[1.4px] border-black flex flex-row justify-center z-10 m-auto mb-8">
          <div className="w-16 h-16 z-20 absolute left-0 -ml-8 -mt-[1px] arrow-right">
            <IconGalleryLeft />
          </div>
          <div className="text-center"> {nadpis_galeria}</div>
          <div className="w-16 h-16 z-20 absolute right-0 -mr-8 -mt-[1px] arrow-left">
            <IconGalleryRight />
          </div>
        </div>
        {galleries && galleries.length > 1 && (
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
            {galleries.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full rounded-[8px] cursor-pointer overflow-hidden"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <div className="absolute w-full h-full bg-[#363128] opacity-60 rounded-[8px] transition-opacity duration-300"></div>

                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60  transition-opacity duration-300 z-6"></div>
                  <Image
                    src={item.fotky[0]}
                    alt="hlavna_fotka"
                    height={1000}
                    width={1000}
                    quality={100}
                    priority={true}
                    className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[8px]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
                  />

                  <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {item.nazov}
                  </h6>
                  <div
                    className={`absolute top-3/4 transform -translate-x-1/2 scale-[150%] left-3/4  duration-300`}
                  >
                    <IconArrowCart />
                  </div>

                  <Link
                    className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    href={`/galeria/${item.id}`}
                  >
                    {getFirstWord(nadpis_galeria)}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {galleries && galleries.length > 3 && (
        <div className="hidden md:block">
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
            {galleries.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full rounded-[8px] cursor-pointer overflow-hidden"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  {isHovered === index && (
                    <div className="absolute w-full h-full bg-[#363128] opacity-60 rounded-[8px] transition-opacity duration-300"></div>
                  )}

                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60  transition-opacity duration-300 z-6"></div>
                  <Image
                    src={item.fotky[0]}
                    alt="hlavna_fotka"
                    height={1000}
                    width={1000}
                    quality={100}
                    priority={true}
                    className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[8px]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
                  />

                  <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {item.nazov}
                  </h6>
                  <div
                    className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-[15%] scale-[150%] ${
                      isHovered === index ? "left-3/4" : "left-1/2"
                    } duration-300`}
                  >
                    <IconArrowCart />
                  </div>
                  {isHovered === index && (
                    <Link
                      className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      href={`/galeria/${item.id}`}
                    >
                      {getFirstWord(nadpis_galeria)}
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ServiceGallery;
