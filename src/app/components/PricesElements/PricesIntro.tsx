import getBase64 from "@/app/lib/functions";
import Image from "next/image";
import PriceIconText from "./PriceIconText";

interface Props {
  cennik_stiahnutie: string;
}

const PricesIntro = ({ cennik_stiahnutie }: Props) => {
  // const myBlurDataUrl = await getBase64(
  //   `${process.env.URL}/loop/main4_new.jpg`
  // );
  // console.log(myBlurDataUrl);

  return (
    <div className="relative">
      <Image
        src={"/loop/main4_new.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ALKsmv/06/Ls5P//9QARAQDfyrTAtq7czscAFhQAISAaDxwAFC4A1/wSgqleEjIAAAAASUVORK5CYII="
      />
      <PriceIconText cennik_stiahnutie={cennik_stiahnutie} />
    </div>
  );
};

export default PricesIntro;
