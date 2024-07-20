import React from "react";
import IconRefCalculate from "../Icons/IconRefCalculate";
import IconRefHome from "../Icons/IconRefHome";
import IconRefQuality from "../Icons/IconRefQuality";
import IconRefEurope from "../Icons/IconRefEurope";
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

interface Props {
  ref_elements: string[];
}

const HomePageReferencies = ({ ref_elements }: Props) => {
  return (
    <div>
      <div className="w-full bg-secondary z-20" id="referencie">
        <div className="navbar_section ">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 mt-8 mb-8">
            {pictures_object.map((one_button, index) => (
              <div
                className="flex flex-col xl:flex-row items-center gap-4 md:gap-8"
                key={index}
              >
                <div className="w-24 h-20">{one_button.icon}</div>
                <p className=" z-50 text-primary font-normal text-center max-w-[200px]">
                  {ref_elements[index] != ""
                    ? ref_elements[index]
                    : one_button.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {" "}
            <h3 className="custom-underline  mt-16">Vaše Referencie</h3>
          </div>
          <div className="mb-16">
            <HomePageJustReferencies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageReferencies;
