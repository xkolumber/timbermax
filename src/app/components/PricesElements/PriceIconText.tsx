"use client";
import { useState } from "react";
import IconDownload from "../Icons/IconDownload";

interface Props {
  cennik_stiahnutie: string;
}

const PriceIconText = ({ cennik_stiahnutie }: Props) => {
  const [iconHovered, setIconHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 
absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"
    >
      <p className="uppercase pb-8 text-center 3xl:text-[22px]">
        {cennik_stiahnutie}
      </p>
      <div
        className=" rounded-full bg-secondary w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-fourthtiary duration-100 3xl:scale-[1.2]"
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
