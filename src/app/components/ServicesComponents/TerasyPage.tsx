"use client";
import { Gallery, PalleteObject, Terasy } from "@/app/lib/interface";

import Image from "next/image";

import { icon_text } from "@/app/lib/data";
import { useState } from "react";
import ColorVariants from "./ColorVariants";
import Installation from "./Installation";
import OrderProcedure from "./OrderProcedure";
import Profiles from "./Profiles";
import Properties from "./Properties";
import ServiceGallery from "./ServiceGallery";
import { BLUR_DATA_URL_GRAY, colors_circles } from "@/app/lib/functionsClient";
import IconPalleteHorizontal from "../Icons/IconPalleteHorizontal";
import IconPalleteVertical from "../Icons/IconPalleteVertical";

interface Props {
  data: Terasy | undefined;
  galleries: Gallery[] | [];
}

const TerasyPage = ({ data, galleries }: Props) => {
  const [variantClicked, setVariantClicked] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const [selectedPallete, setSelectedPallete] = useState<PalleteObject>(
    colors_circles[0]
  );

  const [selectedHorVer, setSelectedHorVer] = useState("ver");

  return (
    <main>
      <div className="bg-secondary">
        <div className="main_section additional_padding">
          <h4 className="uppercase  custom-underline mb-16 2xl:mb-[76px]">
            {data?.nadpis}
          </h4>
          <p className="text-tertiary">{data?.popis1}</p>
        </div>
        <Image
          src={"/sluzby/terasy/first.jpg"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />

        <div className="main_section ">
          <p className="text-primary">{data?.popis2}</p>
          <div className="flex flex-col mt-8">
            {data?.vlastnosti.map((object, index) => (
              <p className="text-primary" key={index}>
                {object}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ServiceGallery
        nadpis_galeria={data?.nadpis_galeria ? data.nadpis_galeria : ""}
        galleries={galleries}
      />

      <div className="bg-secondary">
        <div className="main_section">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_informacie}</h4>
          <p className="text-tertiary">{data?.popis_informacie_1}</p>
        </div>
        <div className="navbar_section">
          <div className="grid-cols-2 grid md:grid-cols-5">
            {icon_text.map((object, index) => (
              <div
                className={`flex flex-col hover:border-[1.4px] ${
                  variantClicked === index && "!border-[#1D281F] border"
                } hover:border-[#1D281F] rounded-[8px] justify-center items-center gap-6 p-4 cursor-pointer`}
                key={index}
                onClick={() => setVariantClicked(index)}
              >
                <div className="w-32 full pt-8">{object.icon}</div>
                <p className="uppercase text-[#1D281F] text-center">
                  {data?.info_variants[index] != ""
                    ? data?.info_variants[index]
                    : object.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {variantClicked === 0 && <ColorVariants data={data} />}
        {variantClicked === 1 && <Properties data={data} />}
      </div>
      {variantClicked === 2 && <Installation data={data} />}
      {variantClicked === 3 && <Profiles data={data} />}
      {variantClicked === 4 && <OrderProcedure data={data} />}

      <div className="bg-secondary">
        <main className="main_section !pb-8">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_vizualizacia}</h4>
          <p className="text-tertiary">{data?.popis_viz_1}</p>
          <div className="flex justify-end pt-40">
            <div className="relative flex flex-wrap gap-6">
              {colors_circles.map((object, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  onClick={() => setSelectedPallete(object)}
                >
                  {hoveredIndex === index && (
                    <p className="absolute -top-16 text-[#1D281F] uppercase">
                      {object.text}{" "}
                    </p>
                  )}

                  <div
                    className={`circle_pallete w-12 h-12 rounded-full ${
                      selectedPallete.farba === object.farba && "scale-[1.4]"
                    } ${
                      selectedPallete.farba != object.farba &&
                      "hover:scale-[1.4]"
                    }`}
                    style={{ backgroundColor: object.farba }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div
        className="relative 
      "
      >
        <div className="w-full m-auto absolute top-0">
          <div className="flex flex-row     w-full main_section m-auto !pt-0 ">
            <div className="flex flex-col gap-6 bg-secondary p-8 rounded-b-[16px]">
              {" "}
              <div
                className={`cursor-pointer ${
                  selectedHorVer === "ver" ? "opacity-100" : "opacity-25"
                }`}
                onClick={() => setSelectedHorVer("ver")}
              >
                <IconPalleteVertical />
              </div>
              <div
                className={`cursor-pointer ${
                  selectedHorVer === "hor" ? "opacity-100" : "opacity-25"
                }`}
                onClick={() => setSelectedHorVer("hor")}
              >
                <IconPalleteHorizontal />
              </div>
            </div>
            <div
              className=" rounded-br-[16px] w-[236px] h-fit p-8"
              style={{ backgroundColor: selectedPallete.farba }}
            >
              <p className="text-white">
                {" "}
                farba:{" "}
                <span className="uppercase"> {selectedPallete.text}</span>
              </p>
            </div>
          </div>
        </div>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1080}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />
      </div>
    </main>
  );
};

export default TerasyPage;
