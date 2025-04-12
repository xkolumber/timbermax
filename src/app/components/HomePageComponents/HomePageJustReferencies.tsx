"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconArrowLoopLeft from "../Icons/IconArrowLoopLeft";
import IconArrowLoopRight from "../Icons/IconArrowLoopRight";
import { Navigation } from "swiper/modules";
import { cloudfront_url } from "@/app/lib/functionsClient";

interface Props {
  references: string[];
}

const HomePageJustReferencies = ({ references }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="md:main_section !pt-0 !pb-0">
      <div className="relative ">
        <Image
          src={`${cloudfront_url}/neutral/ref.jpg`}
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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Navigation]}
          speed={1000}
          className="h-[200px]"
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {references.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white  text-center font-light   animate-fade-in max-w-[70%] md:max-w-[80%] line-clamp-5">
                    {item}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cursor-pointer absolute left-8 md:left-14 3xl:left-24  top-1/2 transform -translate-x-1/2 -translate-y-1/2 arrow-right z-20 scale-75">
          <IconArrowLoopLeft />
        </div>
        <div className="cursor-pointer absolute right-8  md:right-14 3xl:right-24  top-1/2 transform translate-x-1/2 -translate-y-1/2 arrow-left z-20 scale-75">
          <IconArrowLoopRight />
        </div>
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
