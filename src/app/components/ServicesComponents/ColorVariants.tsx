import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/app/lib/functionsClient";

interface Props {
  data: any;
}

const ColorVariants = ({ data }: Props) => {
  const [hoveredImage, setHoveredImage] = useState(-1);
  return (
    <div className="">
      <div className="main_section">
        <p className="text-tertiary">{data?.fareb_var_popis1}</p>
      </div>
      <div className="flex flex-wrap gap-6 color_section">
        {colors.map((color, index) => (
          <div
            className="relative cursor-pointer"
            key={index}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(-1)}
          >
            <Image
              src={color.farba}
              alt="hlavna_fotka"
              height={300}
              width={160}
              quality={100}
              priority={true}
              className="w-[160px] h-[300px] object-cover"
            />
            <p
              className={`uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 bottom-0 duration-300 ${
                hoveredImage === index ? "block" : "hidden"
              }`}
            >
              {color.text}
            </p>
          </div>
        ))}
      </div>
      <div className="main_section">
        {" "}
        <p className="text-tertiary">{data?.fareb_var_popis2}</p>
      </div>
    </div>
  );
};

export default ColorVariants;
