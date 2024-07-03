import React from "react";
import IconRecycle from "../icons/IconRecycle";
import IconTime from "../icons/IconTime";
import IconUv from "../icons/IconUv";

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

const HomePageIcons = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex  flex-col  md:flex-row justify-between w-full max-w-[800px] mt-16 mb-16 gap-8">
        {data.map((object, index) => (
          <div
            className="flex flex-col justify-center items-center "
            key={index}
          >
            <div className="w-[10rem] h-[10rem] mb-4">{object.icon}</div>
            <p className="text-[#2c2f30]">{object.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageIcons;
