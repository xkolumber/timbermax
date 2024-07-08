"use client";
import React, { useState } from "react";
import IconTerasa from "../Icons/IconTerasa";
import IconFasady from "../Icons/IconFasady";
import IconPloty from "../Icons/IconPloty";
import Image from "next/image";
import IconArrowCart from "../Icons/IconArrowCart";

const data = [
  {
    description:
      "Obklad fasády na drevenej podkonštrukcii: 190 – 230 Eur/m2 vrátane DPH",
    title: "Terasy",
    image: "/oblasti/terasy.jpg",
    svg_icon: <IconTerasa />,
  },
  {
    description:
      "Obklad terasy zmontovanej na hliníkovej podkonštrukcii: 200 – 250 Eur/m2 vrátane DPH",
    title: "Fasády",
    image: "/oblasti/fasady.jpg",
    svg_icon: <IconFasady />,
  },
  {
    description:
      "Plotové dielce s dvoma stĺpmi – oceľové stĺpy RAL s U-profilmi, do ktorých sa zasunú dosky T138 - 750 Eur s DPH za jedno pole 2 x 2 m (4 m2) vrátane montáže",
    title: "Ploty",
    image: "/oblasti/ploty.jpg",
    svg_icon: <IconPloty />,
  },
];

const PricesElements = () => {
  return (
    <div className="navbar_section">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((object, index) => (
          <div
            className="h-[450px] relative rounded-[8px] flex justify-center items-center flex-col cursor-pointer overflow-hidden group"
            key={index}
          >
            <Image
              src={object.image}
              alt="Obrazok"
              width={1000}
              height={1000}
              quality={100}
              className="absolute h-full w-full z-5 rounded-[8px] object-cover"
            />
            <div
              className={`w-24 h-24 absolute z-10 top-[25%] scale-[1.5]   duration-300`}
            >
              {" "}
              {object.svg_icon}
            </div>
            <h5
              className={`absolute text-white top-[43%] scale-[1]  duration-300 z-10`}
            >
              {object.title}
            </h5>

            <div className="absolute inset-0 bg-black opacity-30   transition-opacity duration-300 z-6"></div>

            <div className="bg-[#363F1E] opacity-[64%] absolute top-[60%] bottom-0 flex justify-center items-center">
              <p className="text-center">{object.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricesElements;
