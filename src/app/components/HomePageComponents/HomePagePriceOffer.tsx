import React from "react";
import Image from "next/image";
import IconCalculatePriceOffer from "../Icons/IconCalculatePriceOffer";

interface Props {
  nadpis: string | undefined;
  popis1: string | undefined;
  popis2: string | undefined;
  button_vypocet: string | undefined;
}

const HomePagePriceOffer = ({
  nadpis,
  popis1,
  popis2,
  button_vypocet,
}: Props) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src="/cenova_ponuka.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <IconCalculatePriceOffer />
      <button className="btn btn--secondary absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        {button_vypocet}
      </button>

      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      <div className="absolute inset-0 flex flex-col justify-center  text-white z-10 p-4   main_section">
        <h5 className="text-2xl font-bold mb-4">{nadpis}</h5>
        <p className="mb-4">{popis1}</p>
        <p>{popis2}</p>
      </div>
    </div>
  );
};

export default HomePagePriceOffer;
