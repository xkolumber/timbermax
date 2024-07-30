import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const MoreAboutSkeleton = () => {
  return (
    <div className="main_section additional_padding w-full justify-center items-center">
      <h2 className="">
        {" "}
        <Skeleton baseColor="#DEDEDE" width={300} />
      </h2>
      <p className="text-primary ">
        {" "}
        <Skeleton baseColor="#DEDEDE" count={4} />
      </p>
      <p className="mt-8 text-primary">
        {" "}
        <Skeleton baseColor="#DEDEDE" count={6} />
      </p>
      <Image
        src={"/viac-o.svg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AObj0Xfy6+G4DwkAuNrTvlkA6ufUeP/677g8NSi4wLmjYGzfFKZNZSBlAAAAAElFTkSuQmCC"
      />
      <p>
        <Skeleton baseColor="#DEDEDE" />
      </p>
    </div>
  );
};

export default MoreAboutSkeleton;
