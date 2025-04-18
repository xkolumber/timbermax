import { BLUR_DATA_URL_GRAY, cloudfront_url } from "@/app/lib/functionsClient";
import { PriceOffer } from "@/app/lib/interface";
import Image from "next/image";
import PricesElements from "./PricesElements";

interface Props {
  data: PriceOffer | undefined;
}
const PricesDescription = ({ data }: Props) => {
  return (
    <>
      <div className="main_section">
        <h3 className="custom-underline !normal-case ">
          {data?.profil_nadpis}{" "}
        </h3>
        <p className="text-primary">{data?.profil_popis2}</p>{" "}
        <p className="text-primary mt-8">{data?.profil_popis3}</p>{" "}
        <p className="text-primary mt-8">{data?.profil_popis4}</p>
        <p className="text-primary  mt-16 xl:mt-32">
          {data?.profil_popis5}
        </p>{" "}
        <p className="text-primary mt-8">{data?.profil_popis6}</p>
      </div>
      <Image
        src={`${cloudfront_url}/random/cennik_photo_aws.png`}
        alt="hlavna_fotka"
        height={1000}
        width={1920}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_GRAY}
      />
      <div className="main_section">
        <h3 className="custom-underline !normal-case ">
          {" "}
          {data?.dielo_nadpis}
        </h3>
        <p className="text-primary">{data?.dielo_popis}</p>{" "}
        <p className="mt-8 underline text-primary"> {data?.relacia_nadpis}</p>
        <p className="text-primary">{data?.relacia_popis1}</p>{" "}
        <p className="text-primary"> {data?.relacia_popis2}</p>
        <p className="text-primary">{data?.relacia_lista1}</p>
        <p className="text-primary">{data?.relacia_lista2}</p>
      </div>
      <PricesElements relacie={data?.relacie ? data.relacie : []} />
    </>
  );
};

export default PricesDescription;
