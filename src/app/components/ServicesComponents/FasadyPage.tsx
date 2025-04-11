"use client";
import { Fasady, Gallery } from "@/app/lib/interface";

import Image from "next/image";

import { icon_text } from "@/app/lib/data";
import ServiceGallery from "./ServiceGallery";
import { useState } from "react";
import ColorVariants from "./ColorVariants";
import Installation from "./Installation";
import OrderProcedure from "./OrderProcedure";
import Profiles from "./Profiles";
import Properties from "./Properties";
import Link from "next/link";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
import VisualizationElement from "../VisualizationElement";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { fetchFasady, fetchGalleryType } from "@/app/lib/functionsServer";
import ServiceSkeleton from "./ServiceSkeleton";

interface Props {
  type: string;
}

const FasadyPage = ({ type }: Props) => {
  const { data, error, isLoading } = useQuery<Fasady | null>({
    queryKey: ["fasady", type, Cookies.get("language")],
    queryFn: () => fetchFasady(`fasady-${type}`, Cookies.get("language")),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const {
    data: galleries,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<Gallery[] | []>({
    queryKey: ["galeria", "fasady"],
    queryFn: () => fetchGalleryType("fasady"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [variantClicked, setVariantClicked] = useState(0);

  return (
    <main>
      {isLoading && <ServiceSkeleton />}

      {error && (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-black"> Chyba pri načítaní dát.</p>
        </div>
      )}
      {data && (
        <>
          <div className="bg-secondary">
            <div className="main_section additional_padding">
              <h4 className="text-tertiary custom-underline">{data?.nadpis}</h4>
              <p className="text-tertiary">{data?.popis1}</p>
              <div className="flex justify-between">
                <Link className="btn btn--primary" href={`/sluzby/fasady`}>
                  {data?.btn_odvetrana}
                </Link>
                <Link
                  className="btn btn--primary"
                  href={`/sluzby/fasady/predsadena`}
                >
                  {data?.btn_predsadena}
                </Link>
              </div>
            </div>
            <Image
              src={"/terasa.jpg"}
              alt="hlavna_fotka"
              height={1080}
              width={1920}
              quality={100}
              priority={true}
              className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />

            <div className="main_section ">
              <p className="text-primary">{data?.popis2}</p>
            </div>
          </div>
          {galleries && (
            <ServiceGallery
              nadpis_galeria={data?.nadpis_galeria ? data.nadpis_galeria : ""}
              galleries={galleries}
            />
          )}

          <div className="bg-secondary">
            <div className="main_section">
              {" "}
              <h4 className="text-tertiary">{data?.nadpis_informacie}</h4>
              <p className="text-tertiary">{data?.popis_informacie_1}</p>
            </div>
            <div className="navbar_section">
              <div className="grid grid-cols-5">
                {icon_text.map((object, index) => (
                  <div
                    className={`flex flex-col hover:border-[1.4px] ${
                      variantClicked === index && "!border-[#1D281F] border"
                    } hover:border-[#1D281F] rounded-[8px] justify-center items-center gap-6 p-4 cursor-pointer`}
                    key={index}
                    onClick={() => setVariantClicked(index)}
                  >
                    <div className="w-32 full pt-8">{object.icon}</div>
                    <p className="uppercase text-[#1D281F]">
                      {data?.info_variants[index] != ""
                        ? data?.info_variants[index]
                        : object.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {variantClicked === 0 && <ColorVariants data={data} />}
            {variantClicked === 1 && <Properties data={data} />}
          </div>
          {variantClicked === 2 && <Installation data={data} />}
          {variantClicked === 3 && <Profiles data={data} />}
          {variantClicked === 4 && <OrderProcedure data={data} />}

          <VisualizationElement data={data} service_type="fasady" />
        </>
      )}
    </main>
  );
};

export default FasadyPage;
