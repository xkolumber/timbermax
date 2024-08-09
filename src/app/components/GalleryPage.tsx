"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { Gallery, GalleryObject } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import IconArrowCart from "./Icons/IconArrowCart";
import { galleries, gallery_sk } from "./JustGalleryData";

interface Props {
  data: Gallery[] | [];
}

const GalleryPage = ({ data }: Props) => {
  const { language } = useLanguageStore();
  const [isHovered, setIsHovered] = useState(-1);

  const [galleryData, setGalleryData] = useState<GalleryObject[]>(gallery_sk);

  useEffect(() => {
    setGalleryData(galleries[language] || gallery_sk);
  }, [language]);

  return (
    <>
      <h3 className="text-primary mb-4 custom-underline navbar_section ">
        {" "}
        {galleryData[0].title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16 2xl:gap-24 navbar_section">
        {data.map((item, index) => (
          <Link
            className="h-[500px] 2xl:h-[800px] relative rounded-[8px] flex justify-center items-center flex-col cursor-pointer overflow-hidden group"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
            key={index}
            href={`/galeria/${item.id}`}
          >
            {isHovered === index && (
              <div className="absolute w-full h-full bg-[#363128] opacity-20 rounded-[8px] transition-opacity duration-300"></div>
            )}
            {item.fotky[0] && (
              <Image
                src={item.fotky[0]}
                alt="hlavna_fotka"
                height={800}
                width={800}
                quality={100}
                priority={true}
                className="w-full h-full md:h-full max-h-[800px] object-cover rounded-[8px]"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOY9/D/sf//O/duiWgrY2ia3Nk4vVlYg4GBn4GBQZArsSzIK1ZNzUsQAHlRDqY1UQU5AAAAAElFTkSuQmCC"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60  transition-opacity duration-300 z-6"></div>

            {/* <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {item.nazov}
            </h6> */}
            <h4
              className={`absolute text-white font-light ${
                isHovered === index
                  ? "top-[35%] scale-[1]"
                  : " top-[40%] scale-[1]"
              }  duration-300 z-10`}
            >
              {item.nazov}
              {/* {object.title} */}
            </h4>
            <div
              className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-[15%] scale-[150%] ${
                isHovered === index ? "left-3/4" : "left-1/2"
              } duration-300`}
            >
              <IconArrowCart />
            </div>
            {isHovered === index && (
              <button className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {galleryData[0].title}
              </button>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
