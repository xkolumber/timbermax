"use client";
import React, { useState } from "react";
import { Gallery } from "../lib/interface";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import NextJsImage from "./NextImage";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";

interface Props {
  data: Gallery | undefined;
}

const GalleryPageId = ({ data }: Props) => {
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpenGallery = (index: number) => {
    if (!data) return;
    const reorderedFotky = [
      data.fotky[index],
      ...data.fotky.slice(0, index),
      ...data.fotky.slice(index + 1),
    ];
    const transformedAlbum = reorderedFotky.map((url) => ({ src: url }));
    setChoosenAlbum(transformedAlbum);
    setOpen(true);
  };

  return (
    <div className="">
      <h2 className="text-primary">{data?.nazov}</h2>
      <div className="flex flex-row">
        <h3>PROFIL: {data?.profil}</h3>
        <h3>VO FARBE: {data?.farba}</h3>
      </div>
      {data?.popis1 && <p className="text-primary">{data?.popis1}</p>}
      {data?.fotky[0] && (
        <Image
          src={data.fotky[0]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover cursor-pointer"
          onClick={() => handleOpenGallery(0)}
        />
      )}
      {data?.popis2 && <p className="text-primary">{data?.popis2}</p>}
      <div className="flex flex-col md:flex-row gap-6">
        {data?.fotky[1] && (
          <Image
            src={data.fotky[1]}
            alt="hlavna_fotka"
            height={500}
            width={500}
            quality={100}
            priority={true}
            className="w-full h-[600px] md:h-full max-h-[800px] object-cover  cursor-pointer"
            onClick={() => handleOpenGallery(1)}
          />
        )}
        {data?.fotky[2] && (
          <Image
            src={data.fotky[2]}
            alt="hlavna_fotka"
            height={500}
            width={500}
            quality={100}
            priority={true}
            className="w-full h-[600px] md:h-full max-h-[800px] object-cover  cursor-pointer"
            onClick={() => handleOpenGallery(2)}
          />
        )}
      </div>
      {data?.popis3 && <p className="text-primary">{data?.popis3}</p>}
      {data?.fotky[3] && (
        <Image
          src={data.fotky[3]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover  cursor-pointer"
          onClick={() => handleOpenGallery(3)}
        />
      )}

      {data?.fotky[4] && (
        <Image
          src={data.fotky[4]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover  cursor-pointer"
          onClick={() => handleOpenGallery(4)}
        />
      )}
      {data?.fotky[5] && (
        <Image
          src={data.fotky[5]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover  cursor-pointer"
          onClick={() => handleOpenGallery(5)}
        />
      )}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
        />
      )}
    </div>
  );
};

export default GalleryPageId;

// onClick={() => handleOpenGallery(item)}
