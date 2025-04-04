"use client";
import {
  Gallery,
  ObjectInteface,
  PalleteObject,
  Terasy,
} from "@/app/lib/interface";

import Image from "next/image";

import { icon_text } from "@/app/lib/data";
import { useState } from "react";
import ColorVariants from "./ColorVariants";
import Installation from "./Installation";
import OrderProcedure from "./OrderProcedure";
import Profiles from "./Profiles";
import Properties from "./Properties";
import ServiceGallery from "./ServiceGallery";
import {
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  colors_circles,
  terasy_url,
} from "@/app/lib/functionsClient";
import IconPalleteHorizontal from "../Icons/IconPalleteHorizontal";
import IconPalleteVertical from "../Icons/IconPalleteVertical";
import VisualizationElement from "../VisualizationElement";

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

  const [choosenObject, setChoosenObject] = useState<ObjectInteface>(
    terasy_url[0]
  );

  const handleSetNewObject = (object: PalleteObject) => {
    setSelectedPallete(object);
    const found_object = terasy_url.find((item) => item.type === object.type);
    if (found_object) {
      setChoosenObject(found_object);
    }
  };

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

      <VisualizationElement data={data} service_type="terasy" />
    </main>
  );
};

export default TerasyPage;
