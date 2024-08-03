import React from "react";
import IconRecycle from "../Icons/IconRecycle";
import IconTime from "../Icons/IconTime";
import IconUv from "../Icons/IconUv";

const data = [
  {
    title: "95% recyklovaný",
    icon: <IconRecycle />,
  },
  {
    title: "Rýchla a jednoduchá montáž",
    icon: <IconTime />,
  },
  {
    title: "UV stabilný",
    icon: <IconUv />,
  },
];

interface Props {
  svg_titles: string[];
}

const HomePageIcons = ({ svg_titles }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="p-[1.6rem] flex flex-col md:flex-row justify-between w-full max-w-[800px] mt-14 mb-14 3xl:mt-24 3xl:mb-24 gap-8">
        {data.map((object, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div className="w-[10rem] h-[10rem] mb-4">{object.icon}</div>
            <p className="text-[#2c2f30]">
              {svg_titles[index] || object.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePageIcons;
