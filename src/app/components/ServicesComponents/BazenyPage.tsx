"use client";
import { Bazeny, Gallery, Slnolamy } from "@/app/lib/interface";

import Image from "next/image";

import IconServiceFeatures from "../Icons/IconServiceFeatures";
import IconServiceInstallation from "../Icons/IconServiceInstallation";
import IconServiceOrder from "../Icons/IconServiceOrder";
import IconServiceProfile from "../Icons/IconServiceProfile";
import IconServiceVariants from "../Icons/IconServiceVariants";
import ServiceGallery from "./ServiceGallery";
import { useState } from "react";
import ColorVariants from "./ColorVariants";
import Installation from "./Installation";
import OrderProcedure from "./OrderProcedure";
import Profiles from "./Profiles";
import Properties from "./Properties";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { fetchBazeny, fetchGalleryType } from "@/app/lib/functionsServer";
import ServiceSkeleton from "./ServiceSkeleton";
import { icon_text } from "@/app/lib/data";

const BazenyPage = () => {
  const [variantClicked, setVariantClicked] = useState(0);

  const { data, error, isLoading } = useQuery<Bazeny | null>({
    queryKey: ["terasy", Cookies.get("language")],
    queryFn: () => fetchBazeny(Cookies.get("language")),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const {
    data: galleries,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<Gallery[] | []>({
    queryKey: ["galeria", "bazeny"],
    queryFn: () => fetchGalleryType("bazeny"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  return (
    <main>
      {isLoading && <ServiceSkeleton />}

      {error && <div className="min-h-screen">Chyba pri načítaní dát.</div>}

      {data && (
        <>
          <div className="bg-secondary">
            <div className="main_section additional_padding">
              <h4 className="text-tertiary custom-underline">{data?.nadpis}</h4>
              <p className="text-tertiary">{data?.popis1}</p>
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
              {/* <div className="flex flex-col mt-8">
      {data?.vlastnosti.map((object, index) => (
        <p className="text-primary" key={index}>
          {object}
        </p>
      ))}
    </div> */}
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

          <div className="bg-secondary">
            <main className="main_section">
              {" "}
              <h4 className="text-tertiary">{data?.nadpis_vizualizacia}</h4>
              <p className="text-tertiary">{data?.popis_viz_1}</p>
            </main>
          </div>
          <Image
            src={"/terasa.jpg"}
            alt="hlavna_fotka"
            height={1000}
            width={1000}
            quality={100}
            priority={true}
            className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
        </>
      )}
    </main>
  );
};

export default BazenyPage;
