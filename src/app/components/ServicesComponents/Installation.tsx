import React from "react";
import Image from "next/image";

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
      />
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.montaz_nadpis_2}</p>
        <p className="text-tertiary mt-8">{data?.montaz_nadpis_2_category}</p>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={300}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
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
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.montaz_nadpis_2_category2}</p>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={300}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
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
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.montaz_nadpis_2_category3}</p>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={300}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
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
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.montaz_nadpis_2_category4}</p>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={300}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
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
  );
};

export default Installation;
