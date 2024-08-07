import getBase64 from "@/app/lib/functions";
import Image from "next/image";
import PriceIconText from "./PriceIconText";

interface Props {
  cennik_stiahnutie: string;
}

const PricesIntro = async ({ cennik_stiahnutie }: Props) => {
  // const myBlurDataUrl = await getBase64(`${process.env.URL}/pic.webp`);
  // console.log(myBlurDataUrl);

  return (
    <div className="relative h-[600px] md:h-[800px] lg:min-h-[900px]">
      <Image
        src={`/podklad.png`}
        alt={`Image`}
        priority={true}
        className="absolute w-full h-[50%] object-cover"
        fill
      />
      <Image
        src={"/cennik/cennik.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  object-cover object-right h-[600px] md:h-[800px] lg:min-h-[900px]"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP48v+2R5QhAx+DhAIDw8vH11/fPbZxQfPmBfUAmBcMvwxWR4cAAAAASUVORK5CYII="
      />
      <PriceIconText cennik_stiahnutie={cennik_stiahnutie} />
    </div>
  );
};

export default PricesIntro;
