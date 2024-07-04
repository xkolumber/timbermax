import React from "react";
import IconRefCalculate from "../icons/IconRefCalculate";
import IconRefHome from "../icons/IconRefHome";
import IconRefQuality from "../icons/IconRefQuality";
import IconRefEurope from "../icons/IconRefEurope";
import HomePageJustReferencies from "./HomePageJustReferencies";

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

const HomePageReferencies = () => {
  return (
    <div>
      <div className="w-full bg-secondary z-20">
        <div className="navbar_section">
          <div className="flex flex-row justify-between">
            {pictures_object.map((one_button, index) => (
              <div className="flex flex-row items-center gap-8" key={index}>
                <div className="w-16 h-12">{one_button.icon}</div>
                <p className="max-w-[210px] z-50 text-[#1F2820]">
                  {one_button.title}
                </p>
              </div>
            ))}
          </div>
          <HomePageJustReferencies />
        </div>
      </div>
    </div>
  );
};

export default HomePageReferencies;
