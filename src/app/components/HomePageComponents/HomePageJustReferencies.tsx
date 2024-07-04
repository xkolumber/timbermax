"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const referencies = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag",
];

const HomePageJustReferencies = () => {
  return (
    <div className="relative mt-16">
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
      >
        {referencies.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white  text-center font-light   animate-fade-in max-w-[80%]">
                  {item}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HomePageJustReferencies;
