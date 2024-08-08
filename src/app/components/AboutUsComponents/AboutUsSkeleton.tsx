import React from "react";
import Image from "next/image";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

const AboutUsSkeleton = () => {
  return (
    <div className="relative h-[600px] md:h-[800px] lg:min-h-[900px]">
      <Image
        src={"/o_nas_main.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1920}
        quality={100}
        priority={true}
        className="w-full  object-cover h-[600px] md:h-[800px] lg:min-h-[900px]"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNoyUl4f/vi/x/v7l08wOBvqTulvsjHzYiNjQEAx5wMSqMbGz4AAAAASUVORK5CYII="
      />
      <Image
        src={`/podklad.png`}
        alt={`Image`}
        className="absolute w-full h-[50%] object-cover"
        priority
        fill
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2xl:scale-150">
        <IconDoubleArrow />
      </div>
    </div>
  );
};

export default AboutUsSkeleton;
