import React from "react";
import IconQuoteUpper from "../Icons/IconQuoteUpper";
import IconQueoteDown from "../Icons/IconQuoteDown";
import IconQuoteDown from "../Icons/IconQuoteDown";

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
        <h2 className="text-white">{nadpis}</h2>
        <h6 className="text-white">{staviame_znacka}</h6>
        <p className="text-center">{popis1}</p>{" "}
        <p className="mt-8 text-center">{popis2}</p>{" "}
        <p className="mt-8 text-center">{popis3}</p>
      </div>

      {/*Ceo Talk */}
      <div className="navbar_section bg-[#354435] flex flex-col rounded-[12px] justify-center items-center relative">
        <div className="absolute bottom-0 right-0">
          <IconQuoteDown />
        </div>
        <div className="absolute top-0 left-0">
          <IconQuoteUpper />
        </div>
        <p className="max-w-[80%] text-center">{citat}</p>

        <p className="font-thin text-[#D9D4CD]">Peter Barták | CEO</p>
      </div>
    </div>
  );
};

export default AboutUsPhilosophy;
