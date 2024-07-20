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
    <div className="relative h-[600px] 3xl:h-[900px] w-full">
      <Image
        src="/cenova_ponuka.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover absolute"
        quality={100}
        className="z-0"
      />

      <IconCalculatePriceOffer />

      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      <div className="relative inset-0 flex flex-col justify-center  text-white z-10 p-4   main_section">
        <h3 className="uppercase  custom-underline mb-[46px] text-white">
          {nadpis}
        </h3>
        <p className="mb-4 md:max-w-[50%]">{popis1}</p>
        <p className="md:max-w-[50%]">{popis2}</p>
        <button className="btn btn--secondary relative z-20 uppercase">
          {button_vypocet}
        </button>
      </div>
    </div>
  );
};

export default HomePagePriceOffer;
