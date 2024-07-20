import getBase64 from "@/app/lib/functions";
import Image from "next/image";
import PriceIconText from "./PriceIconText";

interface Props {
  cennik_stiahnutie: string;
}

const PricesIntro = ({ cennik_stiahnutie }: Props) => {
  // const myBlurDataUrl = await getBase64(`${process.env.URL}/main_picture.png`);

  return (
    <div className="relative">
      <Image
        src={"/loop/main4.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover"
        // placeholder="blur"
        // blurDataURL={myBlurDataUrl}
      />
      <PriceIconText cennik_stiahnutie={cennik_stiahnutie} />
    </div>
  );
};

export default PricesIntro;
