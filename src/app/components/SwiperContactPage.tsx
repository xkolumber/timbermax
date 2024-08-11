"use client";
import React, { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IconArrowCart from "./Icons/IconArrowCart";
import IconCloseButton from "./Icons/IconCloseButton";
import { OpeningHours, Prevadzka } from "../lib/interface";
import { prevadzky } from "../lib/functionsClient";

interface Props {
  otvaracie_hodiny: string;
  hodiny: OpeningHours;
}

const SwiperContactPage = ({ otvaracie_hodiny, hodiny }: Props) => {
  const [isHovered, setIsHovered] = useState(-1);
  const [showWindow, setShowWindow] = useState(false);
  const [choosenPrevadzka, setChoosenPrevadzka] = useState<Prevadzka>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShowShop = (item: Prevadzka) => {
    setChoosenPrevadzka(item);
    setShowWindow(true);
  };
  return (
    <div>
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          speed={1000}
          className="h-[500px]  "
        >
          {prevadzky.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full rounded-[12px] cursor-pointer overflow-hidden"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                {isHovered === index && (
                  <div className="absolute w-full h-full bg-[#363128] opacity-60 rounded-[12px] transition-opacity duration-300"></div>
                )}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60  transition-opacity duration-300 z-6"></div>

                <Image
                  src={item.photo}
                  alt="hlavna_fotka"
                  height={1000}
                  width={1000}
                  quality={100}
                  priority={true}
                  className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[12px]"
                />

                <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {item.kraj}
                </h6>
                <div
                  className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-[15%] ${
                    isHovered === index ? "left-3/4" : "left-1/2"
                  } duration-300`}
                >
                  <IconArrowCart />
                </div>
                {isHovered === index && (
                  <button
                    className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={() => handleShowShop(item)}
                  >
                    {otvaracie_hodiny}
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden main_section !pt-0">
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
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          speed={1000}
          className="h-[500px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {prevadzky.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full rounded-[8px] cursor-pointer overflow-hidden"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <div className="absolute w-full h-full bg-[#363128] opacity-60 rounded-[8px] transition-opacity duration-300"></div>

                <Image
                  src={item.photo}
                  alt="hlavna_fotka"
                  height={1000}
                  width={1000}
                  quality={100}
                  priority={true}
                  className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[8px]"
                />

                <h6 className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {item.kraj}
                </h6>
                <div
                  className={`absolute top-3/4 transform -translate-x-1/2 -translate-y-[8%] scale-[150%] left-[80%]  duration-300`}
                >
                  <IconArrowCart />
                </div>

                <button
                  className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => handleShowShop(item)}
                >
                  {otvaracie_hodiny}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="line-container mt-8 md:hidden">
          <div className="line">
            {prevadzky.map((item, index) => (
              <div
                key={index}
                className={`circle ${
                  index === activeIndex ? "active_circle" : ""
                }`}
                style={{
                  left: `${(index + 1) * (100 / (prevadzky.length + 1))}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {showWindow && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message min-h-[600px] md:min-h-fit justify-center">
            <div className="" onClick={() => setShowWindow(false)}>
              <IconCloseButton />
            </div>{" "}
            <h5 className="text-center underline">{choosenPrevadzka?.kraj}</h5>
            <h6 className="text-center max-w-[80%] pt-8">
              {" "}
              {choosenPrevadzka?.adresa}
            </h6>
            <p className="text-primary text-center pt-8">{otvaracie_hodiny}:</p>
            <div className="flex flex-col showrooms">
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.pon}</p>
                <p>{choosenPrevadzka?.hodiny.pon}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.ut}</p>
                <p>{choosenPrevadzka?.hodiny.ut}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.st}</p>
                <p>{choosenPrevadzka?.hodiny.st}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.stv}</p>
                <p>{choosenPrevadzka?.hodiny.stv}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.pi}</p>
                <p>{choosenPrevadzka?.hodiny.pi}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{hodiny.sob}</p>
                <p>{choosenPrevadzka?.hodiny.sob}</p>
              </div>
              {choosenPrevadzka?.hodiny.ne === "-" ? (
                <div className="flex flex-row gap-8 justify-between">
                  <p className="font-bold">{hodiny.ne}</p>
                  <div className="flex justify-center w-full items-center">
                    {" "}
                    <p className="text-center">{choosenPrevadzka?.hodiny.ne}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row gap-8 justify-between">
                  <p className="font-bold">Nedeľa</p>
                  <p>{choosenPrevadzka?.hodiny.ne}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SwiperContactPage;
