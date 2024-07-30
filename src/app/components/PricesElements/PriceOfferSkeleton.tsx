import React from "react";
import Image from "next/image";
import IconDownload from "../Icons/IconDownload";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PriceOfferSkeleton = () => {
  return (
    <div className="relative">
      <Image
        src={"/loop/main4_new.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ALKsmv/06/Ls5P//9QARAQDfyrTAtq7czscAFhQAISAaDxwAFC4A1/wSgqleEjIAAAAASUVORK5CYII="
      />
      <div
        className="flex flex-col gap-4 
absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"
      >
        <p className="uppercase">
          {" "}
          <Skeleton baseColor="#DEDEDE" width={300} />
        </p>
        <div className=" rounded-full bg-secondary w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-fourthtiary duration-100">
          {" "}
          <div className="w-10 h-10">
            <IconDownload isHovered={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceOfferSkeleton;
