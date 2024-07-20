import PricesDescription from "./PricesDescription";
import PricesIntro from "./PricesIntro";
import Image from "next/image";
import PricesOffer from "./PricesOffer";
import { PriceOffer } from "@/app/lib/interface";

interface Props {
  data: PriceOffer | undefined;
}

const PriceWholeObject = ({ data }: Props) => {
  return (
    <div className="relative">
      <PricesIntro
        cennik_stiahnutie={
          data?.cennik_stiahnutie ? data?.cennik_stiahnutie : ""
        }
      />
      <div className="main_section">
        <h2>{data?.ceny_sposob_nadpis}</h2>
        <p className="text-primary">{data?.ceny_sposob_popis}</p>
        <p className="text-center text-primary mt-8">
          {data?.popis_nad_fotkou}
        </p>
        <Image
          src={"/cennik_material.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover"
        />
      </div>
      <PricesDescription data={data} />
      <PricesOffer data={data} />
    </div>
  );
};

export default PriceWholeObject;
