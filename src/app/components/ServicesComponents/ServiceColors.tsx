import React from "react";
import Image from "next/image";

const ServiceColors = () => {
  return (
    <Image
      src={"/farby.jpg"}
      alt="hlavna_fotka"
      height={1000}
      width={1000}
      quality={100}
      priority={true}
      className="w-full  md:h-full  object-cover"
    />
  );
};

export default ServiceColors;
