"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  references: string[];
}

const HomePageJustReferencies = ({ references }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="main_section !pt-0 !pb-0">
      <div className="relative mt-16 ">
        <Image
          src="/referencie.jpg"
          className="w-full h-full object-cover absolute rounded-[8px]"
          alt="referencie"
          width={1000}
          height={1000}
        />

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          speed={1000}
          className="h-[200px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {references.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white  text-center font-light   animate-fade-in max-w-[80%] line-clamp-5">
                    {item}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="line-container mt-8">
        <div className="line">
          {references.map((item, index) => (
            <div
              key={index}
              className={`circle ${
                index === activeIndex ? "active_circle" : ""
              }`}
              style={{
                left: `${(index + 1) * (100 / (references.length + 1))}%`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePageJustReferencies;
