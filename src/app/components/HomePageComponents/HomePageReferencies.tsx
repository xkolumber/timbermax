"use client";

import React from "react";
import IconRefCalculate from "../Icons/IconRefCalculate";
import IconRefHome from "../Icons/IconRefHome";
import IconRefQuality from "../Icons/IconRefQuality";
import IconRefEurope from "../Icons/IconRefEurope";
import HomePageJustReferencies from "./HomePageJustReferencies";
import { usePathname } from "next/navigation";

const pictures_object = [
  {
    icon: <IconRefCalculate />,
    title: "Rýchla cenová ponuka a objednanie",
  },
  {
    icon: <IconRefHome />,
    title: "Zameranie a obhliadka stavby v cene realizácie",
  },
  {
    icon: <IconRefQuality />,
    title: "Kvalita montáže a detailnosť práce",
  },
  {
    icon: <IconRefEurope />,
    title: "Realizácia projektov po celej Európe",
  },
];

interface Props {
  ref_elements: string[];
  references_title: string;
  references: string[];
}

const HomePageReferencies = ({
  ref_elements,
  references_title,
  references,
}: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="w-full bg-secondary z-20" id="referencie">
        <div className="navbar_section ">
          <div
            className={`grid grid-cols-2 xl:grid-cols-4 justify-between gap-8 md:gap-16 mt-8 mb-8 ${
              pathname === "/o-nas" && "hidden"
            } `}
          >
            {pictures_object.map((one_button, index) => (
              <div
                className="flex flex-col xl:flex-row items-center gap-4 md:gap-8"
                key={index}
              >
                <div className="w-24 h-20">{one_button.icon}</div>
                <p className="text-[12px] font-medium z-50 text-primary 2xl:text-[14px] text-center md:text-left max-w-[200px]">
                  {ref_elements[index] != ""
                    ? ref_elements[index]
                    : one_button.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {" "}
            <h3 className="custom-underline  mt-16 uppercase">
              {references_title}
            </h3>
          </div>
          <div className="md:mb-16">
            <HomePageJustReferencies references={references} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageReferencies;
