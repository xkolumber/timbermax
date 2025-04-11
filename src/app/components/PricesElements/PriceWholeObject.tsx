"use client";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
import { fetchHomepage, fetchPriceOffer } from "@/app/lib/functionsServer";
import { HomePageElements, PriceOffer } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import HomePageReferencies from "../HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "../HomePageComponents/HomePageShowRoom";
import PriceComparison from "./PriceComparison";
import PriceOfferSkeleton from "./PriceOfferSkeleton";
import PricesArchitect from "./PricesArchitect";
import PricesDescription from "./PricesDescription";
import PricesIntro from "./PricesIntro";
import PricesOffer from "./PricesOffer";

const PriceWholeObject = () => {
  const { data, error, isLoading } = useQuery<PriceOffer | null>({
    queryKey: ["price_offer", Cookies.get("language")],
    queryFn: () => fetchPriceOffer(Cookies.get("language")),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<HomePageElements | null>({
    queryKey: ["home_page", Cookies.get("language")],
    queryFn: () => fetchHomepage(Cookies.get("language")),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  return (
    <main className="relative">
      {isLoading && <PriceOfferSkeleton />}

      {error && (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-black"> Chyba pri načítaní dát.</p>
        </div>
      )}

      {data && (
        <>
          <PricesIntro
            cennik_stiahnutie={
              data?.cennik_stiahnutie ? data?.cennik_stiahnutie : ""
            }
          />
          <PriceComparison />
          <div className="main_section">
            <h3 className="custom-underline !normal-case ">
              {data?.ceny_sposob_nadpis}
            </h3>

            <p className="text-primary">{data?.ceny_sposob_popis}</p>
            <p className="text-center text-primary mt-24 text-3xl mb-8">
              {data?.popis_nad_fotkou}
            </p>
            <Image
              src={"/cennik/cennik_material.svg"}
              alt="hlavna_fotka"
              height={1000}
              width={1900}
              quality={100}
              priority={true}
              className="w-full  md:h-full max-h-[600px] object-cover md:max-w-[90%] m-auto"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </div>
          <PricesDescription data={data} />
          <PricesOffer data={data} />
          <PricesArchitect />

          <HomePageReferencies
            ref_elements={data2?.ref_elements ? data2.ref_elements : []}
            references_title={
              data2?.references_title ? data2.references_title : ""
            }
            references={data2?.references ? data2.references : []}
          />
          <HomePageShowRoom
            mapa_showroomov={
              data2?.mapa_showroomov ? data2.mapa_showroomov : ""
            }
          />
        </>
      )}
    </main>
  );
};

export default PriceWholeObject;
