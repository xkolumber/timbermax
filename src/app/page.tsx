import HomePageAboutUs from "./components/HomePageComponents/HomePageAboutUs";
import HomePageFirstSection from "./components/HomePageComponents/HomePageFirstSection";
import HomePageOurServices from "./components/HomePageComponents/HomePageOurServices";
import HomePagePriceOffer from "./components/HomePageComponents/HomePagePriceOffer";
import HomePageReferencies from "./components/HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "./components/HomePageComponents/HomePageShowRoom";
import HomePageTimbermaxLike from "./components/HomePageComponents/HomePageTimbermaxLike";

export default function Home() {
  return (
    <main className="">
      <HomePageFirstSection />
      <HomePageOurServices />
      <HomePagePriceOffer />
      <HomePageTimbermaxLike />
      <HomePageAboutUs />
      <HomePageReferencies />
      <HomePageShowRoom />
    </main>
  );
}
