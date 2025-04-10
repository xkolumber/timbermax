"use client";
import { fetchHomepage } from "@/app/lib/functionsServer";
import { HomePageElements } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import HomePageAboutUs from "./HomePageAboutUs";
import HomePageFirstSection from "./HomePageFirstSection";
import HomePageOurServices from "./HomePageOurServices";
import HomePagePriceOffer from "./HomePagePriceOffer";
import HomePageReferencies from "./HomePageReferencies";
import HomePageShowRoom from "./HomePageShowRoom";
import HomePageSkeleton from "./HomePageSkeleton";
import HomePageTimbermaxLike from "./HomePageTimbermaxLike";

const HomePageWholePage = () => {
  const { data, error, isLoading } = useQuery<HomePageElements | null>({
    queryKey: ["home_page", Cookies.get("language")],
    queryFn: () => fetchHomepage(Cookies.get("language")),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  return (
    <>
      {isLoading && <HomePageSkeleton />}

      {error && <div className="min-h-screen">Chyba pri načítaní dát.</div>}
      {data && (
        <main className="">
          <HomePageFirstSection data={data} />
          <HomePageOurServices data={data} />
          <HomePagePriceOffer
            nadpis={data?.cenova_p_nadpis}
            popis1={data?.cenova_p_popis1}
            popis2={data?.cenova_p_popis2}
            button_vypocet={data?.button_vypocet}
          />
          <HomePageTimbermaxLike
            timbermax_ako={data?.timbermax_ako ? data.timbermax_ako : []}
            button_citat_viac={
              data?.button_citat_viac ? data.button_citat_viac : ""
            }
            timbermax_ako_mobile_nadpis={
              data?.timbermax_ako_mobile_nadpis
                ? data.timbermax_ako_mobile_nadpis
                : ""
            }
            timbermax_ako_mobile_popisy={
              data?.timbermax_ako_mobile_popisy
                ? data.timbermax_ako_mobile_popisy
                : []
            }
          />
          <HomePageAboutUs
            o_nas_nadpis={data?.o_nas_nadpis ? data.o_nas_nadpis : ""}
            o_nas_popis={data?.o_nas_popis ? data.o_nas_popis : ""}
            button_citat_viac={
              data?.button_citat_viac ? data.button_citat_viac : ""
            }
            o_nas_elements={data?.o_nas_elements ? data.o_nas_elements : []}
            rokov_skusenosti={
              data?.rokov_skusenosti ? data.rokov_skusenosti : ""
            }
          />
          <HomePageReferencies
            ref_elements={data?.ref_elements ? data.ref_elements : []}
            references_title={
              data?.references_title ? data.references_title : ""
            }
            references={data?.references ? data.references : []}
          />

          <HomePageShowRoom
            mapa_showroomov={data?.mapa_showroomov ? data.mapa_showroomov : ""}
          />
        </main>
      )}
    </>
  );
};

export default HomePageWholePage;
