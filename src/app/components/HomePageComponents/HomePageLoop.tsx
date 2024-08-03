"use client";

import { HomePageElements } from "@/app/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconArrowLoopLeft from "../Icons/IconArrowLoopLeft";
import IconArrowLoopRight from "../Icons/IconArrowLoopRight";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

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
  const [clickedManually, setClickedManually] = useState(false);
  const [currentImageText, setCurrentImageText] = useState(
    images[0]?.text || ""
  );

  useEffect(() => {
    setCurrentImageText(images[currentImageIndex]?.text || "");
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScale(1);
      setTimeout(() => setScale(1.05), 100);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  const handleArrowClick = (direction: string) => {
    if (direction === "right") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
    setCurrentImageText(images[currentImageIndex]?.text || "");
  };

  return (
    <div className="relative min-h-[700px] md:min-h-[800px] xl:min-h-screen flex items-center justify-center overflow-hidden">
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
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            placeholder="blur"
            blurDataURL={blurUrl}
          />

          <h4 className=" w-full h-full bottom-0 !absolute right-0 text-white uppercase hidden lg:block z-[5000]">
            {/* {image.text} */}
          </h4>
          <Image
            src={`/podklad.png`}
            alt={`Image`}
            className="absolute w-full h-[50%] object-cover"
            fill
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2xl:scale-150">
        <IconDoubleArrow />
      </div>

      <div className="navbar_section min-h-[700px] md:min-h-[800px] xl:min-h-screen  w-full  flex flex-col justify-between p-12">
        <Link
          href={"/cennik"}
          className="btn btn--secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase !font-medium"
        >
          {data ? data?.button_vypocet : ""}
        </Link>

        <h4 className="text-white uppercase hidden lg:block  absolute right-0 bottom-0  top-[85%] p-[1.6rem] ">
          {currentImageText}
        </h4>

        <div className="flex flex-col  gap-8 md:gap-12 items-end absolute right-0 top-[70%] md:top-[65%] left-1/2 transform -translate-y-1/2 p-[1.6rem]">
          <div
            onClick={() => handleArrowClick("left")}
            className="cursor-pointer"
          >
            <IconArrowLoopLeft />
          </div>
          <div
            onClick={() => handleArrowClick("right")}
            className="cursor-pointer"
          >
            <IconArrowLoopRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLoop;
