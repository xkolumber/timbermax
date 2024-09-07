import React from "react";
import Image from "next/image";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
interface Props {
  data: any;
}

const Profiles = ({ data }: Props) => {
  return (
    <div className="">
      <div className="main_section">
        <h6 className="text-center"> {data?.profil_orientacia}</h6>
        <Image
          src={"/profil.png"}
          alt="hlavna_fotka"
          height={300}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[300px] md:h-full max-h-[400px] object-contain"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />
        <p className="text-tertiary mt-8">{data?.profil_popis1}</p>
        <p className="text-tertiary mt-8">{data?.profil_popis2}</p>
        <p className="text-tertiary mt-8">{data?.profil_popis3}</p>
        <p className="text-tertiary mt-8">{data?.profil_popis4}</p>
      </div>
    </div>
  );
};

export default Profiles;
