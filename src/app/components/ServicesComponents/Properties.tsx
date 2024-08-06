import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: any;
}

const Properties = ({ data }: Props) => {
  return (
    <div className="">
      <div className="main_section">
        <p className="text-tertiary">{data?.vlastnosti_popis1}</p>
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis2}</p>
      </div>
      <Image
        src={"/sluzby/fasady/first.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
      />
      <div className="main_section">
        <p className="text-tertiary">{data?.vlastnosti_popis3}</p>
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis4}</p>
      </div>
      <Image
        src={"/sluzby/fasady/first.jpg"}
        alt="hlavna_fotka"
        height={300}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
      />
      <div className="main_section">
        <h5 className="text-tertiary">{data?.vlastnosti_nadpis_}</h5>
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis5}</p>
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis6}</p>
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis7}</p>
      </div>
      <Image
        src={"/sluzby/fasady/first.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
      />
      <div className="main_section">
        <p className="text-tertiary mt-8">{data?.vlastnosti_popis8}</p>
        <div className="flex justify-between">
          <Link
            className="btn btn--secondary border border-black"
            href={`/viac-o-timbermaxe`}
          >
            {data?.vlastnosti_btn_viac}
          </Link>
          <Link
            className="btn btn--secondary  border border-black"
            href={`/viac-o-timbermaxe`}
          >
            {data?.vlastnosti_btn_konkurencia}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Properties;
