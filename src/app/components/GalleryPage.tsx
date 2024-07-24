"use client";
import React, { useState } from "react";
import { Gallery } from "../lib/interface";
import Image from "next/image";
import IconArrowCart from "./Icons/IconArrowCart";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextImage";

interface Props {
  data: Gallery[] | [];
}

const GalleryPage = ({ data }: Props) => {
  const [isHovered, setIsHovered] = useState(-1);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpenGallery = (object: Gallery) => {
    const transformedAlbum = object.fotky.map((url) => ({ src: url }));
    setChoosenAlbum(transformedAlbum);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {data.map((item, index) => (
          <div
            className="relative w-full  rounded-[8px] cursor-pointer max-w-[400px] h-[400px]"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
            onClick={() => handleOpenGallery(item)}
            key={index}
          >
            {isHovered === index && (
              <div className="absolute w-full h-full bg-[#363128] opacity-70 rounded-[8px] transition-opacity duration-300"></div>
            )}
            {item.fotky[0] && (
              <Image
                src={item.fotky[0]}
                alt="hlavna_fotka"
                height={500}
                width={500}
                quality={100}
                priority={true}
                className="w-full h-[600px] md:h-full max-h-[800px] object-cover rounded-[8px]"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOY9/D/sf//O/duiWgrY2ia3Nk4vVlYg4GBn4GBQZArsSzIK1ZNzUsQAHlRDqY1UQU5AAAAAElFTkSuQmCC"
              />
            )}

            <h6 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {item.nazov}
            </h6>
            <div
              className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-[15%] scale-[150%] ${
                isHovered === index ? "left-3/4" : "left-1/2"
              } duration-300`}
            >
              <IconArrowCart />
            </div>
            {isHovered === index && (
              <button className="btn btn--secondary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                galéria
              </button>
            )}
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
        />
      )}
    </>
  );
};

export default GalleryPage;
