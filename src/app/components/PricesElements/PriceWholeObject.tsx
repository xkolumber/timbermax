import PricesDescription from "./PricesDescription";
import PricesIntro from "./PricesIntro";
import Image from "next/image";
import PricesOffer from "./PricesOffer";
import { HomePageElements, PriceOffer } from "@/app/lib/interface";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
import PriceComparison from "./PriceComparison";
import PricesArchitect from "./PricesArchitect";
import HomePageReferencies from "../HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "../HomePageComponents/HomePageShowRoom";

interface Props {
  data: PriceOffer | undefined;
  data2: HomePageElements | undefined;
}

const PriceWholeObject = ({ data, data2 }: Props) => {
  return (
    <main className="relative">
      <PricesIntro
        cennik_stiahnutie={
          data?.cennik_stiahnutie ? data?.cennik_stiahnutie : ""
        }
      />
      <PriceComparison />
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
          width={1900}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover md:max-w-[90%] m-auto"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />
      </div>
      <PricesDescription data={data} />
      <PricesOffer data={data} />
      <PricesArchitect />

      <HomePageReferencies
        ref_elements={data2?.ref_elements ? data2.ref_elements : []}
        references_title={data2?.references_title ? data2.references_title : ""}
        references={data2?.references ? data2.references : []}
      />
      <HomePageShowRoom
        mapa_showroomov={data2?.mapa_showroomov ? data2.mapa_showroomov : ""}
      />
    </main>
  );
};

export default PriceWholeObject;
