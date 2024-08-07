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
    <main className="relative">
      <PricesIntro
        cennik_stiahnutie={
          data?.cennik_stiahnutie ? data?.cennik_stiahnutie : ""
        }
      />
      <div className="main_section">
        <h3 className="custom-underline !normal-case ">
          {data?.ceny_sposob_nadpis}
        </h3>

        <p className="text-primary">{data?.ceny_sposob_popis}</p>
        <p className="text-center text-primary mt-24 text-3xl mb-8">
          {data?.popis_nad_fotkou}
        </p>
        <Image
          src={"/cennik/cennik_material.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGNggIL/3+58ub5vzReGsuLUW0d3L799Ym3n7aubp9wGAO9XEfVObI8ZAAAAAElFTkSuQmCC"
        />
      </div>
      <PricesDescription data={data} />
      <PricesOffer data={data} />
    </main>
  );
};

export default PriceWholeObject;
