import React, { useState } from "react";
import {
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  colors_circles,
  fasady_url,
  ploty_url,
  slnolamy_url,
  terasy_url,
} from "../lib/functionsClient";
import { ObjectInteface, PalleteObject } from "../lib/interface";
import Image from "next/image";
import IconPalleteVertical from "./Icons/IconPalleteVertical";
import IconPalleteHorizontal from "./Icons/IconPalleteHorizontal";

interface Props {
  data: any;
  service_type: string;
}

const VisualizationElement = ({ data, service_type }: Props) => {
  let objectsData: ObjectInteface[] = [];

  if (service_type === "terasy") {
    objectsData = terasy_url;
  } else if (service_type === "fasady") {
    objectsData = fasady_url;
  } else if (service_type === "ploty") {
    objectsData = ploty_url;
  } else if (service_type === "slnolamy_pergola") {
    objectsData = slnolamy_url;
  }

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const [selectedPallete, setSelectedPallete] = useState<PalleteObject>(
    colors_circles[0]
  );

  const [selectedHorVer, setSelectedHorVer] = useState("ver");

  const [choosenObject, setChoosenObject] = useState<ObjectInteface>(
    objectsData[0]
  );

  const handleSetNewObject = (object: PalleteObject) => {
    setSelectedPallete(object);
    const found_object = objectsData.find((item) => item.type === object.type);
    if (found_object) {
      setChoosenObject(found_object);
    }
  };

  return (
    <div>
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
                  onClick={() => handleSetNewObject(object)}
                >
                  {hoveredIndex === index && (
                    <p className="absolute -top-16 text-[#1D281F] uppercase">
                      {object.type}{" "}
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
                <span className="uppercase"> {selectedPallete.type}</span>
              </p>
            </div>
          </div>
        </div>
        <Image
          src={
            selectedHorVer === "ver"
              ? cloudfront_url + `/${service_type}` + choosenObject.vertical
              : cloudfront_url + `/${service_type}` + choosenObject.horizontal
          }
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
    </div>
  );
};

export default VisualizationElement;
