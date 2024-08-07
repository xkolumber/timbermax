import React from "react";
import Image from "next/image";
import IconCalculatePriceOffer from "../Icons/IconCalculatePriceOffer";
import Link from "next/link";

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
    <div className="relative w-full">
      <Image
        src="/price_offer.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover absolute"
        quality={100}
        className="z-0 md:min-h-[700px] 3xl:h-[750px] hidden md:block"
      />
      <Image
        src="/price_offer_m.png"
        alt="Obrazok"
        layout="fill"
        objectFit="cover absolute"
        quality={100}
        className="z-0 md:min-h-[700px] 3xl:h-[750px] md:hidden"
      />

      <IconCalculatePriceOffer />

      <div className="relative inset-0 flex flex-col   text-white z-10 p-4   main_section md:min-h-[700px] 3xl:h-[750px] ">
        <h3 className="uppercase  custom-underline  text-white text-center md:text-left">
          {nadpis}
        </h3>
        <p className="mb-8 3xl:mb-20 md:max-w-[50%] 2xl:max-w-[639px]">
          {popis1}
        </p>
        <p className="md:max-w-[50%] 2xl:max-w-[639px]">{popis2}</p>
        <div className="w-full flex justify-center">
          {" "}
          <button className="btn btn--secondary relative z-20 text-center uppercase md:hidden !mt-32 ">
            {button_vypocet}
          </button>
        </div>

        <Link
          className="btn btn--secondary  z-20 uppercase absolute md:bottom-6 xl:bottom-10 3xl:bottom-24 left-1/2 transform -translate-x-1/2  -translate-y-1/2 !hidden md:!block"
          href={"/cennik"}
        >
          {button_vypocet}
        </Link>
      </div>
    </div>
  );
};

export default HomePagePriceOffer;
