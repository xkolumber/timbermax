"use client";
import { TimbermaxLike } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  timbermax_ako: TimbermaxLike[] | [];
  button_citat_viac: string;
  timbermax_ako_mobile_nadpis: string;
  timbermax_ako_mobile_popisy: TimbermaxLike[] | [];
}

const HomePageTimbermaxLike = ({
  timbermax_ako,
  button_citat_viac,
  timbermax_ako_mobile_nadpis,
  timbermax_ako_mobile_popisy,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-secondary">
      <div className="main_section hidden md:block">
        {timbermax_ako.map((object, index) => (
          <div className="flex flex-col mb-8 xl:mb-8 relative" key={index}>
            <h3 className="text-primary uppercase font-normal mb-8 3xl:mb-14">
              {object.nadpis}
            </h3>
            <p className="text-tertiary description_section font-normal">
              {object.popis}
            </p>
            <div className="flex w-full  lg:justify-end lg:!-mt-4">
              <Link className="btn btn--primary  opacity-85" href={object.link}>
                {button_citat_viac}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="main_section md:hidden">
        <p className="uppercase text-center text-primary pb-4 font-medium">
          {timbermax_ako_mobile_nadpis}:
        </p>
        <div className="relative ">
          {timbermax_ako.length > 2 && (
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              speed={1000}
              className="h-[264px]"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {timbermax_ako_mobile_popisy.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full rounded-[16px] h-full bg-[#C6BFB6] p-8 flex flex-col items-center">
                    <h6 className="text-center font-semibold uppercase">
                      {item.nadpis}
                    </h6>

                    <p className="text-primary description_section  text-center   line-clamp-5 mt-6">
                      {item.popis}
                    </p>
                    <Link
                      href={item.link}
                      className="btn btn--primary absolute bottom-0 right-0 !m-0 !text-[10px]"
                    >
                      {button_citat_viac}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="line-container mt-8">
          <div className="line">
            {timbermax_ako.map((item, index) => (
              <div
                key={index}
                className={`circle ${
                  index === activeIndex ? "active_circle" : ""
                }`}
                style={{
                  left: `${(index + 1) * (100 / (timbermax_ako.length + 1))}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTimbermaxLike;
