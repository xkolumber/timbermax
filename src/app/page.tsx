import Image from "next/image";
import IconDoubleArrow from "./components/icons/IconDoubleArrow";
import HomePageAboutUs from "./components/HomePageComponents/HomePageAboutUs";
import IconTerasa from "./components/icons/IconTerasa";

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
      {/* <IconDoubleArrow /> */}
      <HomePageAboutUs />
      <IconTerasa />
    </main>
  );
}
