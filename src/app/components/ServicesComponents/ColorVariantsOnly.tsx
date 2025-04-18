"use client";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  colors,
} from "@/app/lib/functionsClient";
import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ColorVariantsOnly = () => {
  const [hoveredImage, setHoveredImage] = useState(-1);
  return (
    <div>
      <div className="flex-wrap gap-6 color_section hidden md:flex">
        {colors.map((color, index) => (
          <div
            className="relative cursor-pointer"
            key={index}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(-1)}
          >
            <Image
              src={color.farba.replace(aws_bucket_url, cloudfront_url)}
              alt="hlavna_fotka"
              height={300}
              width={160}
              quality={100}
              priority={true}
              className="w-[160px] h-[300px] object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <p
              className={`uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 bottom-0 duration-300 ${
                hoveredImage === index ? "block" : "hidden"
              }`}
            >
              {color.text}
            </p>
          </div>
        ))}
      </div>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        speed={1000}
        className="md:!hidden"
      >
        {colors.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative cursor-pointer flex justify-center items-center"
              key={index}
            >
              <Image
                src={item.farba.replace(aws_bucket_url, cloudfront_url)}
                alt="hlavna_fotka"
                height={300}
                width={160}
                quality={100}
                priority={true}
                className="h-[300px] object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL_GRAY}
              />
              <p
                className={`uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 bottom-0 duration-300 
                 `}
              >
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ColorVariantsOnly;
