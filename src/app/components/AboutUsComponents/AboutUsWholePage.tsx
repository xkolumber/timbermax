import React from "react";
import Image from "next/image";
import { AboutUsElements } from "@/app/lib/interface";
import AboutUsHistory from "./AboutUsHistory";
import AboutUsPhilosophy from "./AboutUsPhilosophy";
import AboutUsTeam from "./AboutUsTeam";
import Link from "next/link";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

interface Props {
  data: AboutUsElements | undefined;
}

const AboutUsWholePage = ({ data }: Props) => {
  return (
    <>
      <div className="relative h-[600px] md:h-[800px] max-h-[900px]">
        <Image
          src={"/o_nas_main.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-full  object-cover"
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
          O nás
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
    </>
  );
};

export default AboutUsWholePage;
