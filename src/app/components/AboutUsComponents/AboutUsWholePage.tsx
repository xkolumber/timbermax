import React from "react";
import Image from "next/image";
import { AboutUsElements } from "@/app/lib/interface";
import AboutUsHistory from "./AboutUsHistory";
import AboutUsPhilosophy from "./AboutUsPhilosophy";
import AboutUsTeam from "./AboutUsTeam";

interface Props {
  data: AboutUsElements | undefined;
}

const AboutUsWholePage = ({ data }: Props) => {
  return (
    <div>
      <Image
        src={"/loop/main1_new.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[1200px] object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC"
      />
      <AboutUsHistory
        nadpis={data?.history_nadpis ? data.history_nadpis : ""}
        popis={data?.history_popis ? data.history_popis : ""}
      />
      <AboutUsPhilosophy
        nadpis={data?.filozofia_nadpis ? data.filozofia_nadpis : ""}
        staviame_znacka={data?.staviame_znacka ? data.staviame_znacka : ""}
        popis1={data?.filozofia_popis1 ? data.filozofia_popis1 : ""}
        popis2={data?.filozofia_popis2 ? data.filozofia_popis2 : ""}
        popis3={data?.filozofia_popis3 ? data.filozofia_popis3 : ""}
        citat={data?.citat ? data.citat : ""}
      />
      <AboutUsTeam
        tim={data?.tim ? data.tim : []}
        spoznajte_tim={data?.spoznajte_tim ? data?.spoznajte_tim : ""}
      />
    </div>
  );
};

export default AboutUsWholePage;
