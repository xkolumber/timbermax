"use client";
import { CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "yet-another-react-lightbox/styles.css";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
} from "../lib/functionsClient";
import { fetchGalleriesLatest } from "../lib/functionsServer";
import { GalleryObject } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import GalleryPageSkeleton from "./GalleryPageSkeleton";
import IconArrowCart from "./Icons/IconArrowCart";
import { galleries, gallery_sk } from "./JustGalleryData";

const GalleryPage = () => {
  const { language } = useLanguageStore();

  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["gallery"],
      queryFn: ({ pageParam = undefined }) => fetchGalleriesLatest(pageParam),
      getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
      initialPageParam: undefined,
      initialData: { pages: [], pageParams: [] },
      refetchOnWindowFocus: false,
    });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const [isHovered, setIsHovered] = useState(-1);

  const [galleryData, setGalleryData] = useState<GalleryObject[]>(gallery_sk);

  useEffect(() => {
    setGalleryData(galleries[language] || gallery_sk);
  }, [language]);

  console.log(data);

  return (
    <div className="mb-24">
      {isFetching && <GalleryPageSkeleton />}

      {error && (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-black"> Chyba pri načítaní dát.</p>
        </div>
      )}
      {data && (
        <>
          <h3 className="text-primary custom-underline  ">
            {" "}
            {galleryData[0].title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 2xl:gap-24  !-mt-4 md:!-mt-0">
            {data?.pages
              .flatMap((page) => page.items)
              .map((item, index) => (
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
                      src={item.fotky[0].replace(
                        aws_bucket_url,
                        cloudfront_url
                      )}
                      alt="hlavna_fotka"
                      height={800}
                      width={800}
                      quality={100}
                      priority={true}
                      className="w-full h-full md:h-full max-h-[800px] object-cover rounded-[8px]"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL_GRAY}
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
      )}

      <div className="mt-8" ref={ref}>
        {isFetchingNextPage && (
          <CircularProgress size={24} color="inherit" className="" />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
