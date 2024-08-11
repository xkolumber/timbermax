import React from "react";
import Image from "next/image";
import SwiperContactPage from "./SwiperContactPage";
import { ContactPage } from "../lib/interface";
import { OpeningHoursEmpty } from "../lib/functionsClient";

interface Props {
  data: ContactPage | undefined;
}

const ContactPagee = ({ data }: Props) => {
  return (
    <>
      <div className="main_section additional_padding">
        <h3 className="text-primary custom-underline">
          {data?.kontakt_nadpis}
        </h3>

        <h6 className="text-primary custom-underline">
          {data?.vzorkovne_nadpis}
        </h6>
        <p className="text-primary">{data?.vzorkovne_popis1}</p>

        <p className="text-primary pt-8 lg:max-w-[80%]">
          {data?.vzorkovne_popis2}
        </p>
        <p className="text-primary pt-8 lg:max-w-[80%]">
          {data?.vzorkovne_popis3}
        </p>
        <p className="text-primary pt-8">{data?.vzorkovne_popis4}</p>
        <Image
          src="/showroom_new.svg"
          className="w-full h-full object-cover min-h-[200px] pt-8 pb-8 "
          alt="referencie"
          width={1000}
          height={1000}
          quality={100}
          priority
        />
        <h3 className="custom-underline !mb-0 mt-16">
          {data?.prevadzky_nadpis}
        </h3>
      </div>
      <SwiperContactPage
        otvaracie_hodiny={data?.otvaracie_hodiny ? data.otvaracie_hodiny : ""}
        hodiny={data?.hodiny ? data.hodiny : OpeningHoursEmpty}
      />
      <div className="main_section">
        <h3 className="custom-underline">{data?.sidlo_nadpis}</h3>
        <p className="text-primary pt-8 lg:max-w-[80%]"></p>
        <p className="text-primary">{data?.sidlo}</p>
        <p className="pt-4 text-primary">{data?.sidlo_popis1}</p>
        <p className="pt-4 text-primary">{data?.sidlo_popis2}</p>
        <p className="pt-4 text-primary">{data?.sidlo_popis3}</p>
      </div>
    </>
  );
};

export default ContactPagee;
