"use client";
import React, { useState } from "react";
import IconTerasa from "../Icons/IconTerasa";
import IconFasady from "../Icons/IconFasady";
import IconBazeny from "../Icons/IconBazeny";
import IconPloty from "../Icons/IconPloty";
import IconOstatne from "../Icons/IconOstatne";
import Image from "next/image";
import IconSlnolamy from "../Icons/IconSlnolamy";
import IconArrowCart from "../Icons/IconArrowCart";
import { Sluzby } from "@/app/lib/interface";

const data = [
  {
    description:
      "Timbermax prináša majiteľom terás okrem reálneho vzľadu dreva benefit bezúdržbovosti vďaka vysokej odolnosti povrchu profilov voči bežným nečistotám...",
    title: "Terasy",
    image: "/oblasti/terasy.jpg",
    svg_icon: <IconTerasa />,
  },
  {
    description:
      "Drevoplastové fasádne profily Timbermax sú výrazným krokom vpred v oblasti eliminácie nedostatkov dreva pri použití v exteriéri a v priblížení sa vzhľadu pravého dreva…",
    title: "Fasády",
    image: "/oblasti/fasady.jpg",
    svg_icon: <IconFasady />,
  },
  {
    description:
      "Protišmykový povrch terasových profilov Timbermax a ich odolnosť voči UV žiareniu sú hlavnými dôvodmi prečo si nás vyberá veľký počet zákazníkov k obkladu okolia bazénov...",
    title: "Bazény",
    image: "/oblasti/bazen.jpg",
    svg_icon: <IconBazeny />,
  },
  {
    description:
      "Dizajnový bezúdržbový plot so zárukou 25 rokov na farebnú stálosť s realistickým vzhľadom dreva dodávame v 20 farebných odtieňoch ako jediný v strednej Európe...",
    title: "Ploty",
    image: "/oblasti/ploty.jpg",
    svg_icon: <IconPloty />,
  },
  {
    description:
      "Zladenie farebných odtieňov stavby s doplnkovými dizajnovými prvkami je vďaka lamelovým profilom Timbermax a jedinečnému bezspojovému systému uchytenia koenčne tu...",
    title: "Slnolamy",
    image: "/oblasti/slnolamy.jpg",
    svg_icon: <IconSlnolamy />,
  },
  {
    description:
      "Kochlíky, otváravé systémy, brány či zábradlia. Z Timbermax profilov v našej ponuke Vám vieme zrealizovať návrh podľa Vašej predstavy aj s technickým vypracovaním a realizáciou na kľúč...",
    title: "Ostatné",
    image: "/oblasti/ostatne.jpg",
    svg_icon: <IconOstatne />,
  },
];

interface Props {
  services: Sluzby[];
  button_citat_viac: string;
}
const HomePageAboutIsElements = ({ services, button_citat_viac }: Props) => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <div className="navbar_section m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-16 2xl:gap-24">
        {data.map((object, index) => (
          <div
            className="h-[500px] 2xl:h-[800px] relative rounded-[8px] flex justify-center items-center flex-col cursor-pointer overflow-hidden group"
            key={index}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
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
              className={`w-24 h-24 2xl:h-48 2xl:w-48 absolute z-10 ${
                isHovered === index
                  ? "top-[15%] scale-[1.3]"
                  : " top-[18%] scale-[1]"
              }  duration-300`}
            >
              {" "}
              {object.svg_icon}
            </div>
            <h4
              className={`absolute text-white font-light ${
                isHovered === index
                  ? "top-[35%] scale-[1]"
                  : " top-[40%] scale-[1]"
              }  duration-300 z-10`}
            >
              {services.length > 0 ? services[index].nadpis : object.title}
              {/* {object.title} */}
            </h4>

            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60  transition-opacity duration-300 z-6"></div>

            <div
              className={`absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[15%]  ${
                isHovered === index ? "left-3/4" : "left-1/2"
              } duration-300`}
            >
              <IconArrowCart />
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="text-center text-white mt-48 p-4 w-full flex justify-center">
                <p className="text-white description_section max-w-[85%] font-light">
                  {services.length > 0
                    ? services[index].popis
                    : object.description}
                </p>
              </div>
              <div className="btn btn--secondary absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {button_citat_viac}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageAboutIsElements;
