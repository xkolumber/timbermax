"use client";
import { useState } from "react";
import IconDownload from "../Icons/IconDownload";

const PriceIconText = () => {
  const [iconHovered, setIconHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 
absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"
    >
      <p className="uppercase">Cenník na stiahnutie</p>
      <div
        className=" rounded-full bg-secondary w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-fourthtiary duration-100"
        onMouseEnter={() => setIconHovered(true)}
        onMouseLeave={() => setIconHovered(false)}
      >
        {" "}
        <div className="w-10 h-10">
          <IconDownload isHovered={iconHovered} />
        </div>
      </div>
    </div>
  );
};

export default PriceIconText;
