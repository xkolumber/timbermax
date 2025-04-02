import React from "react";
import IconQuoteUpper from "../Icons/IconQuoteUpper";
import IconQueoteDown from "../Icons/IconQuoteDown";
import IconQuoteDown from "../Icons/IconQuoteDown";
import Image from "next/image";

interface Props {
  nadpis: string;
  staviame_znacka: string;
  popis1: string;
  popis2: string;
  popis3: string;
  citat: string;
}

const AboutUsPhilosophy = ({
  nadpis,
  staviame_znacka,
  popis1,
  popis2,
  popis3,
  citat,
}: Props) => {
  return (
    <div className="bg-fourthtiary">
      <div className="main_section flex flex-col justify-center items-center">
        <h3 className="custom-underline text-center  text-white">{nadpis}</h3>
        <h6 className="text-white text-center">{staviame_znacka}</h6>
        <p className="text-center pt-8">{popis1}</p>{" "}
        <p className="mt-8 text-center">{popis2}</p>{" "}
        <p className="mt-8 text-center">{popis3}</p>
      </div>

      {/*Ceo Talk */}
      <div className="navbar_section">
        <div className=" bg-[#354435]  flex flex-col rounded-[12px] justify-center items-center relative p-[1.6rem] md:!p-16 pt-8 md:!pt-16 xl:!pt-28">
          <div className="md:max-w-[80%] relative">
            <div className="absolute -top-12 left-0  scale-75 xl:scale-100 hidden md:block">
              <IconQuoteUpper />
            </div>
            <div className="absolute -bottom-12 -right-0 scale-75 xl:scale-100 hidden md:block">
              <IconQuoteDown />
            </div>
            <p className=" text-center text-white font-light md:hidden">
              {" "}
              „{citat}“
            </p>
            <p className=" text-center text-white font-light hidden md:flex text-[18px] 2xl:text-[25px]">
              {" "}
              {citat}
            </p>
          </div>

          <p className="font-thin text-[#D9D4CD] pt-8 2xl:pt-16 pb-8">
            Peter Barták | CEO
          </p>

          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2FAsset%201.png?alt=media&token=e4952a2f-fa19-4d2b-a996-b882f8c1e568`}
            alt={`Image`}
            className=" w-full h-[50px] object-contain"
            priority
            width={400}
            height={200}
          />
        </div>
      </div>
      <div className="h-16 2xl:h-48"></div>
    </div>
  );
};

export default AboutUsPhilosophy;
