"use client";
import { Sluzby } from "@/app/lib/interface";
import Image from "next/image";
import IconFasady from "../Icons/IconFasady";
import IconPloty from "../Icons/IconPloty";
import IconTerasa from "../Icons/IconTerasa";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";

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

interface Props {
  relacie: Sluzby[];
}

const PricesElements = ({ relacie }: Props) => {
  return (
    <div className="navbar_section">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-24">
        {data.map((object, index) => (
          <div
            className="h-[450px] xl:h-[550px] 2xl:h-[700px] relative rounded-[12px] flex justify-center items-center flex-col cursor-pointer overflow-hidden group"
            key={index}
          >
            <Image
              src={object.image}
              alt="Obrazok"
              width={300}
              height={700}
              quality={100}
              priority={true}
              className="absolute h-full w-full z-5 rounded-[8px] object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <div
              className={`w-24 h-24 absolute z-10 top-[25%] scale-[1.5] 2xl:scale-[2]  duration-300`}
            >
              {" "}
              {object.svg_icon}
            </div>
            <h5
              className={`absolute text-white top-[43%] 2xl:top-[41%] scale-[1]  duration-300 z-10 uppercase`}
            >
              {relacie[index].nadpis != ""
                ? relacie[index].nadpis
                : object.title}
            </h5>

            <div className="absolute inset-0 bg-black opacity-30   transition-opacity duration-300 z-6"></div>

            <div className="bg-[#363F1E] bg-opacity-[64%] absolute top-[60%] bottom-0 flex justify-center items-center z-10">
              <p className="text-center z-20 max-w-[80%] text-xl xl:text-2xl 3xl:text-[18px] 3xl:!leading-[3rem]">
                {relacie[index].popis != ""
                  ? relacie[index].popis
                  : object.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricesElements;
