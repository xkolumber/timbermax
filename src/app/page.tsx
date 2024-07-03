import Image from "next/image";
import HomePageAboutUs from "./components/HomePageComponents/HomePageAboutUs";
import HomePagePriceOffer from "./components/HomePageComponents/HomePagePriceOffer";

export default function Home() {
  return (
    <main className="">
      <Image
        src={"/main_picture.png"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-full max-h-[1200px] object-cover"
      />
      <HomePageAboutUs />
      <HomePagePriceOffer />
    </main>
  );
}
