import React from "react";
import Image from "next/image";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";

interface Props {
  data: any;
}

const Installation = ({ data }: Props) => {
  return (
    <div className="">
      <div className="main_section">
        <h5 className="text-tertiary">{data?.montaz_nadpis}</h5>
        <p className="text-tertiary mt-8">{data?.montaz_popis1}</p>
        <p className="text-tertiary mt-8">{data?.montaz_popis2}</p>
        <p className="text-tertiary mt-8">{data?.montaz_popis3}</p>
      </div>
      <Image
        src={"/terasa.jpg"}
        alt="hlavna_fotka"
        height={300}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_GRAY}
      />
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.montaz_popis4}</p>
      </div>
      <Image
        src={"/terasa.jpg"}
        alt="hlavna_fotka"
        height={300}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_GRAY}
      />
      <div className="bg-[#B2A496] !pb-16">
        <p className="text-tertiary font-semibold text-white text-center pt-8 pb-8">
          {data?.montaz_nadpis_2}
        </p>
        <div className="main_section rounded-[8px] bg-secondary relative !mb-32">
          <button className="btn btn--secondary text-tertiary mt-8 uppercase border border-black absolute left-0 top-0 !m-0 p-2 text-center whitespace-normal w-[250px] md:w-full">
            {data?.montaz_nadpis_2_category}
          </button>
          <Image
            src={"/sluzby/terasy/montaz1.png"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full  md:h-full  object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category_popis1}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category_popis2}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category_popis3}
          </p>
        </div>
        <div className="main_section rounded-[8px] bg-secondary relative !mb-32">
          <button className=" btn btn--secondary text-tertiary mt-8 uppercase border border-black absolute left-0 top-0 !m-0">
            {data?.montaz_nadpis_2_category2}
          </button>
          <Image
            src={"/sluzby/terasy/montaz2.png"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full  md:h-full  object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category2_popis1}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category2_popis2}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category2_popis3}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category2_popis4}
          </p>
        </div>
        <div className="main_section rounded-[8px] bg-secondary relative !mb-32">
          <button className=" btn btn--secondary text-tertiary mt-8 uppercase border border-black absolute left-0 top-0 !m-0">
            {data?.montaz_nadpis_2_category3}
          </button>
          <Image
            src={"/sluzby/terasy/montaz3.png"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full  md:h-full  object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category3_popis1}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category3_popis2}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category3_popis3}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category3_popis4}
          </p>
        </div>
        <div className="main_section rounded-[8px] bg-secondary relative !mb-32 ">
          <button className=" btn btn--secondary text-tertiary mt-8 uppercase border border-black absolute left-0 top-0 !m-0">
            {data?.montaz_nadpis_2_category4}
          </button>
          <Image
            src={"/sluzby/terasy/montaz4.png"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full  md:h-full  object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category4_popis1}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category4_popis2}
          </p>
          <p className="text-tertiary mt-8">
            {data?.montaz_nadpis_2_category4_popis3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Installation;
