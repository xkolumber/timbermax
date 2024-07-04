import Image from "next/image";
import HomePageOurServices from "./components/HomePageComponents/HomePageOurServices";
import HomePagePriceOffer from "./components/HomePageComponents/HomePagePriceOffer";
import HomePageTimbermaxLike from "./components/HomePageComponents/HomePageTimbermaxLike";
import HomePageAboutUs from "./components/HomePageComponents/HomePageAboutUs";
import HomePageReferencies from "./components/HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "./components/HomePageComponents/HomePageShowRoom";

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
      <HomePageOurServices />
      <HomePagePriceOffer />
      <HomePageTimbermaxLike />
      <HomePageAboutUs />
      <HomePageReferencies />
      <HomePageShowRoom />
    </main>
  );
}
