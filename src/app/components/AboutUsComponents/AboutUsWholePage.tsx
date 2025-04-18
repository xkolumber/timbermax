"use client";
import { fetchAboutUs, fetchHomepage } from "@/app/lib/functionsServer";
import { AboutUsElements, HomePageElements } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import HomePageReferencies from "../HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "../HomePageComponents/HomePageShowRoom";
import IconDoubleArrow from "../Icons/IconDoubleArrow";
import AboutUsHistory from "./AboutUsHistory";
import AboutUsPhilosophy from "./AboutUsPhilosophy";
import AboutUsSkeleton from "./AboutUsSkeleton";
import AboutUsTeam from "./AboutUsTeam";

const AboutUsWholePage = () => {
  const { data, error, isLoading } = useQuery<AboutUsElements | null>({
    queryKey: ["about_us", Cookies.get("language")],
    queryFn: () => fetchAboutUs(Cookies.get("language")),
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
    <>
      {isLoading && <AboutUsSkeleton />}

      {error && <div className="min-h-screen">Chyba pri načítaní dát.</div>}

      {data && (
        <>
          <div className="relative h-[600px] md:h-[800px] lg:min-h-[900px]">
            <Image
              src={"/o_nas_main.jpg"}
              alt="hlavna_fotka"
              height={1000}
              width={1920}
              quality={100}
              priority={true}
              className="w-full  object-cover h-[600px] md:h-[800px] lg:min-h-[900px]"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNoyUl4f/vi/x/v7l08wOBvqTulvsjHzYiNjQEAx5wMSqMbGz4AAAAASUVORK5CYII="
            />
            <Image
              src={`/podklad.png`}
              alt={`Image`}
              className="absolute w-full h-[50%] object-cover"
              priority
              fill
            />
            <h3 className="custom-underline text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase  ">
              {data?.o_nas ? data.o_nas : ""}
            </h3>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2xl:scale-150">
              <IconDoubleArrow />
            </div>
          </div>

          <div>
            <AboutUsHistory
              nadpis={data?.history_nadpis ? data.history_nadpis : ""}
              popis={data?.history_popis ? data.history_popis : ""}
            />
            <AboutUsPhilosophy
              nadpis={data?.filozofia_nadpis ? data.filozofia_nadpis : ""}
              staviame_znacka={
                data?.staviame_znacka ? data.staviame_znacka : ""
              }
              popis1={data?.filozofia_popis1 ? data.filozofia_popis1 : ""}
              popis2={data?.filozofia_popis2 ? data.filozofia_popis2 : ""}
              popis3={data?.filozofia_popis3 ? data.filozofia_popis3 : ""}
              citat={data?.citat ? data.citat : ""}
            />
            <AboutUsTeam
              tim={data?.tim ? data.tim : []}
              spoznajte_tim={data?.spoznajte_tim ? data?.spoznajte_tim : ""}
            />

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
          </div>
        </>
      )}
    </>
  );
};

export default AboutUsWholePage;
