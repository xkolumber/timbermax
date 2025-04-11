"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { BLUR_DATA_URL_GRAY } from "../lib/functionsClient";
import { fetchGalleryId } from "../lib/functionsServer";
import { Gallery, GalleryTranslate } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import NextJsImage from "./NextImage";
import StepBack from "./StepBack";

interface Props {
  id: string;
}

const GalleryPageId = ({ id }: Props) => {
  const { language } = useLanguageStore();

  const { data, error, isLoading } = useQuery<Gallery>({
    queryKey: ["gallery", id],
    queryFn: () => fetchGalleryId(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedLanguageContent, setSelectedLanguageContent] =
    useState<GalleryTranslate>();

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

  useEffect(() => {
    if (data?.jazyky_kontent) {
      const content = data?.jazyky_kontent.find(
        (content) => content.jazyk === language
      );
      if (content) {
        setSelectedLanguageContent(content);
      }
    }
  }, [data]);

  return (
    <div className="">
      <StepBack />

      {isLoading && (
        <div className="mt-4 min-h-screen">
          <ClipLoader size={20} color={"#00000"} loading={true} />
        </div>
      )}

      {error && (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-black"> Chyba pri načítaní dát.</p>
        </div>
      )}

      {data && (
        <>
          <h2 className="text-primary">
            {selectedLanguageContent?.nazov_projekt} {data?.nazov}
          </h2>
          <div className="flex flex-col md:flex-row md:gap-6 pt-4">
            <h5>
              <span className="uppercase">
                {selectedLanguageContent?.nazov_profil}
              </span>{" "}
              <span className="font-semibold">{data?.profil}</span>
            </h5>
            <h5>
              <span className="uppercase">
                {selectedLanguageContent?.nazov_farba}
              </span>{" "}
              <span className="font-semibold">{data?.farba} </span>
            </h5>
          </div>
          {selectedLanguageContent?.popis1 && (
            <p className="text-primary pt-8">
              {selectedLanguageContent.popis1}
            </p>
          )}
          {data?.fotky[0] && (
            <Image
              src={data.fotky[0]}
              alt="hlavna_fotka"
              height={1000}
              width={1920}
              quality={100}
              priority={true}
              className="w-full md:h-[500px]  2xl:h-[800px] object-cover cursor-pointer mt-8 rounded-[8px]"
              onClick={() => handleOpenGallery(0)}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          )}
          {selectedLanguageContent?.popis2 && (
            <p className="text-primary pt-8">
              {selectedLanguageContent.popis2}
            </p>
          )}
          <div className="flex flex-col md:flex-row gap-6  pt-8">
            {data?.fotky[1] && (
              <Image
                src={data.fotky[1]}
                alt="hlavna_fotka"
                height={800}
                width={800}
                quality={100}
                priority={true}
                className="w-full md:w-1/2 md:h-[500px]   2xl:h-[800px] object-cover rounded-[8px] cursor-pointer"
                onClick={() => handleOpenGallery(1)}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL_GRAY}
              />
            )}
            {data?.fotky[2] && (
              <Image
                src={data.fotky[2]}
                alt="hlavna_fotka"
                height={800}
                width={800}
                quality={100}
                priority={true}
                className="w-full md:w-1/2 md:h-[500px]  2xl:h-[800px] object-cover rounded-[8px]  cursor-pointer"
                onClick={() => handleOpenGallery(2)}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL_GRAY}
              />
            )}
          </div>
          {selectedLanguageContent?.popis3 && (
            <p className="text-primary pt-8">
              {selectedLanguageContent.popis3}
            </p>
          )}
          <div className="flex flex-col">
            {data?.fotky.map((object, index) => (
              <div className="" key={index}>
                {object && index > 2 && (
                  <Image
                    src={object}
                    alt="hlavna_fotka"
                    height={1000}
                    width={1920}
                    quality={100}
                    priority={true}
                    className="w-full h-[600px] md:h-full  2xl:h-[800px] object-cover  cursor-pointer rounded-[8px]  mt-8 2xl:mt-16"
                    onClick={() => handleOpenGallery(index)}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_GRAY}
                  />
                )}
              </div>
            ))}
          </div>
        </>
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
