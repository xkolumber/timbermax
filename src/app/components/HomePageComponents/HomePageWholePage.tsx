import { HomePageElements } from "@/app/lib/interface";
import React from "react";
import HomePageAboutUs from "./HomePageAboutUs";
import HomePageFirstSection from "./HomePageFirstSection";
import HomePageOurServices from "./HomePageOurServices";
import HomePagePriceOffer from "./HomePagePriceOffer";
import HomePageReferencies from "./HomePageReferencies";
import HomePageShowRoom from "./HomePageShowRoom";
import HomePageTimbermaxLike from "./HomePageTimbermaxLike";

interface Props {
  data: HomePageElements | undefined;
}

const HomePageWholePage = ({ data }: Props) => {
  return (
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
      />
      <HomePageAboutUs
        o_nas_nadpis={data?.o_nas_nadpis ? data.o_nas_nadpis : ""}
        o_nas_popis={data?.o_nas_popis ? data.o_nas_popis : ""}
        button_citat_viac={
          data?.button_citat_viac ? data.button_citat_viac : ""
        }
        o_nas_elements={data?.o_nas_elements ? data.o_nas_elements : []}
        rokov_skusenosti={data?.rokov_skusenosti ? data.rokov_skusenosti : ""}
      />
      <HomePageReferencies
        ref_elements={data?.ref_elements ? data.ref_elements : []}
        references_title={data?.references_title ? data.references_title : ""}
        references={data?.references ? data.references : []}
      />

      <HomePageShowRoom
        mapa_showroomov={data?.mapa_showroomov ? data.mapa_showroomov : ""}
      />
    </main>
  );
};

export default HomePageWholePage;
