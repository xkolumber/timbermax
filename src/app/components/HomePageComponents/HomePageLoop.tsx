"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import IconDoubleArrow from "../Icons/IconDoubleArrow";
import { HomePageElements } from "@/app/lib/interface";
import Link from "next/link";

interface Props {
  blurUrl: string | undefined;
  data: HomePageElements | undefined;
}
const HomePageLoop = ({ blurUrl, data }: Props) => {
  const images = [
    {
      src: "/main1_new.jpg",
      text: data?.text_photo1 ? data?.text_photo1 : "",
    },
    {
      src: "/main2_new.jpg",
      text: data?.text_photo2 ? data?.text_photo2 : "",
    },
    {
      src: "/main3_new.jpg",
      text: data?.text_photo3 ? data?.text_photo3 : "",
    },
    {
      src: "/main4_new.jpg",
      text: data?.text_photo4 ? data?.text_photo4 : "",
    },
    {
      src: "/main5_new.jpg",
      text: data?.text_photo5 ? data?.text_photo5 : "",
    },
    {
      src: "/main6_new.jpg",
      text: data?.text_photo6 ? data?.text_photo6 : "",
    },
    {
      src: "/main7_new.jpg",
      text: data?.text_photo7 ? data?.text_photo7 : "",
    },
    {
      src: "/main8_new.jpg",
      text: data?.text_photo8 ? data?.text_photo8 : "",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScale(1);
      setTimeout(() => setScale(1.05), 100);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative !pt-40 min-h-[700px] xl:min-h-screen md:justify-start flex items-center   overflow-hidden">
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
            src={`/loop${image.src}`}
            alt={`Image ${index + 1}`}
            className="h-full w-full  object-cover"
            width={5000}
            height={5000}
            placeholder="blur"
            blurDataURL={blurUrl}
          />
          <h4 className="absolute bottom-0 right-0 mb-48 mr-48 text-white uppercase">
            {image.text}
          </h4>
        </div>
      ))}

      <Link
        href={"/cennik"}
        className="btn btn--secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase"
      >
        {data ? data?.button_vypocet : ""}
      </Link>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2">
        <IconDoubleArrow />
      </div>
    </div>
  );
};

export default HomePageLoop;
