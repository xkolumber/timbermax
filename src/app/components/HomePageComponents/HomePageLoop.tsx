"use client";

import getBase64 from "@/app/lib/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

interface Props {
  blurUrl: string | undefined;
}
const HomePageLoop = ({ blurUrl }: Props) => {
  const images = [
    "/main1.jpg",
    "/main2.jpg",
    "/main3.jpg",
    "/main4.jpg",
    "/main5.jpg",
    "/main6.jpg",
    "/main7.jpg",
    "/main8.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScale(1);
      setTimeout(() => setScale(1.05), 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative !pt-40 xl:min-h-screen md:justify-start md:flex items-center  hidden overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg_image_wrapper"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in, transform 0.5s ease-in-out",
            transform: `scale(${index === currentImageIndex ? scale : 1})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={`/loop${image}`}
            alt={`Image ${index + 1}`}
            className="h-full w-full  object-cover"
            width={5000}
            height={5000}
            placeholder="blur"
            blurDataURL={blurUrl}
          />
        </div>
      ))}

      <button className="btn btn--secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase">
        Výpočet ceny ihneď
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2">
        <IconDoubleArrow />
      </div>
    </div>
  );
};

export default HomePageLoop;
