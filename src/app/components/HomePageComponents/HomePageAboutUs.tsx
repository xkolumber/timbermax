import React from "react";
import Image from "next/image";
import useLanguageStore from "@/app/zustand/store";
import { cookies } from "next/headers";
import ClientComponent from "../ClientComponent";

const buttons = [
  {
    nunber: "3000+",
    description: "realizácii terás",
  },
  {
    nunber: "25",
    description: "rokov záruky na farebnú stálosť",
  },
  {
    nunber: "5",
    description: "rokov záruky na montáž",
  },
  {
    nunber: "4500+",
    description: "realizácii fasád",
  },
];

interface Props {
  o_nas_nadpis: string;
  o_nas_popis: string;
  button_citat_viac: string;
  o_nas_elements: string[];
}

const HomePageAboutUs = ({
  o_nas_nadpis,
  o_nas_popis,
  button_citat_viac,
  o_nas_elements,
}: Props) => {
  return (
    <div className="relative  w-full">
      <Image
        src="/o_nas.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div className="relative flex flex-col justify-center text-white p-4 md:pl-40  z-20 main_section">
        <h5 className="text-2xl font-bold mb-4">{o_nas_nadpis}</h5>
        <p className="mb-4 max-w-[630px]">{o_nas_popis}</p>
        <div className="btn btn--secondary">{button_citat_viac}</div>
      </div>

      <div className="w-full border-t border-white z-20">
        <div className="navbar_section">
          <div className="flex flex-col md:flex-row justify-between">
            {buttons.map((one_button, index) => (
              <div className="flex flex-col items-center" key={index}>
                <button className="btn btn--tertiary">
                  {one_button.nunber}
                </button>
                <p className="uppercase text-center max-w-[130px] z-50">
                  {o_nas_elements[index] != ""
                    ? o_nas_elements[index]
                    : one_button.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageAboutUs;
