import React from "react";
import Image from "next/image";
import IconCalculateGreen from "../Icons/IconCalculateGreen";
import { Nacenovac } from "@/app/lib/interface";
import Link from "next/link";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";

interface Props {
  data: any;
}

const OrderProcedure = ({ data }: Props) => {
  return (
    <div className="">
      <div className="main_section">
        <p className="text-tertiary">{data?.postup_popis}</p>
      </div>
      <div className="relative">
        <Image
          src={"/nacenovac.png"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover "
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />
        <div className="absolute z-[100] bottom-0 left-1/2 transform -translate-x-1/2  bg-secondary rounded-[8px] w-48 h-48 p-8 -mb-20">
          <IconCalculateGreen />
        </div>
      </div>
      <div className="main_section">
        <p className="text-primary text-center mb-8">
          {data?.postup_nacenovac}
        </p>
        {data?.nacenovac_sekcie.map((object: Nacenovac, index: number) => (
          <div className="flex flex-col mb-16" key={index}>
            <h6>{object.nadpis}</h6>
            <p className="pt-8 text-primary">{object.popis}</p>
            <div className="flex justify-end">
              {" "}
              <Link className="btn btn--primary" href={`${object.link}`}>
                {object.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProcedure;
