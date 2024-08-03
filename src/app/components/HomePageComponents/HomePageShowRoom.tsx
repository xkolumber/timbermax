"use client";

import React, { useRef } from "react";
import Image from "next/image";
import IconDoubleArrowLeft from "../Icons/IconDoubleArrowLeft";
import IconDoubleArrowRight from "../Icons/IconDoubleArrowRight";

interface Props {
  mapa_showroomov: string;
}

const HomePageShowRoom = ({ mapa_showroomov }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="showroom">
      <div id="showroom" className="relative !hidden md:!block">
        <button className="btn btn--secondary absolute top-12 left-56 z-10 uppercase ">
          {mapa_showroomov}
        </button>
        <button className="btn btn--secondary absolute top-0 z-10 uppercase md:hidden !m-0 map_round transform -translate-x-1/2 left-1/2">
          {mapa_showroomov}
        </button>
        <Image
          src="/showroom_new.svg"
          className="w-full h-full object-cover min-h-[200px] "
          alt="referencie"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="relative md:hidden">
        <div
          className="absolute left-[42%] bottom-0 transform -translate-x-1/2 z-10 pb-8"
          onClick={() => scroll("left")}
        >
          <IconDoubleArrowLeft />
        </div>
        <div
          className="absolute left-[58%] bottom-0 transform -translate-x-1/2 z-10 pb-8"
          onClick={() => scroll("right")}
        >
          <IconDoubleArrowRight />
        </div>

        <div
          className="relative overflow-x-auto w-full scroll"
          ref={scrollContainerRef}
        >
          <div className="flex w-[1000px] h-full">
            <Image
              src="/showroom_new.svg"
              className="object-contain"
              alt="referencie"
              width={1000}
              height={600}
              quality={100}
            />
          </div>
        </div>

        <button className="btn btn--secondary absolute top-0 z-10 uppercase md:hidden !m-0 map_round transform -translate-x-1/2 left-1/2">
          {mapa_showroomov}
        </button>
      </div>
    </div>
  );
};

export default HomePageShowRoom;
