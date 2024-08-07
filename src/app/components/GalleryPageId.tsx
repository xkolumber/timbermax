"use client";
import React, { useState } from "react";
import { Gallery } from "../lib/interface";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import NextJsImage from "./NextImage";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";

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
      <Link href={"/galeria"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>
      <h2 className="text-primary">Projekt {data?.nazov}</h2>
      <div className="flex flex-col md:flex-row md:gap-6 pt-4">
        <h5>
          PROFIL: <span className="font-semibold">{data?.profil}</span>
        </h5>
        <h5>
          VO FARBE: <span className="font-semibold">{data?.farba} </span>
        </h5>
      </div>
      {data?.popis1 && <p className="text-primary pt-8">{data?.popis1}</p>}
      {data?.fotky[0] && (
        <Image
          src={data.fotky[0]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full md:h-[500px]  2xl:h-[800px] object-cover cursor-pointer mt-8 rounded-[8px]"
          onClick={() => handleOpenGallery(0)}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
        />
      )}
      {data?.popis2 && <p className="text-primary pt-8">{data?.popis2}</p>}
      <div className="flex flex-col md:flex-row gap-6  pt-8">
        {data?.fotky[1] && (
          <Image
            src={data.fotky[1]}
            alt="hlavna_fotka"
            height={500}
            width={500}
            quality={100}
            priority={true}
            className="w-full md:w-1/2 md:h-[500px]   2xl:h-[800px] object-cover rounded-[8px] cursor-pointer"
            onClick={() => handleOpenGallery(1)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
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
            className="w-full md:w-1/2 md:h-[500px]  2xl:h-[800px] object-cover rounded-[8px]  cursor-pointer"
            onClick={() => handleOpenGallery(2)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
          />
        )}
      </div>
      {data?.popis3 && <p className="text-primary  pt-8">{data?.popis3}</p>}
      {data?.fotky[3] && (
        <Image
          src={data.fotky[3]}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full  2xl:h-[800px] object-cover  cursor-pointer rounded-[8px]  mt-8"
          onClick={() => handleOpenGallery(3)}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
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
          className="w-full h-[600px] md:h-full 2xl:h-[800px] object-cover rounded-[8px] cursor-pointer"
          onClick={() => handleOpenGallery(4)}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
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
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/AOT8/9jz/6fC4gAcLTgiMDcAAQQAsbWug6GhUYaKAJ6SfeLh3Onq5KPQFUEu0lHCAAAAAElFTkSuQmCC"
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
