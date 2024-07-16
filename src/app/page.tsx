import { unstable_noStore } from "next/cache";
import HomePageAboutUs from "./components/HomePageComponents/HomePageAboutUs";
import HomePageFirstSection from "./components/HomePageComponents/HomePageFirstSection";
import HomePageOurServices from "./components/HomePageComponents/HomePageOurServices";
import HomePagePriceOffer from "./components/HomePageComponents/HomePagePriceOffer";
import HomePageReferencies from "./components/HomePageComponents/HomePageReferencies";
import HomePageShowRoom from "./components/HomePageComponents/HomePageShowRoom";
import HomePageTimbermaxLike from "./components/HomePageComponents/HomePageTimbermaxLike";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "./lib/firebaseClient";
import { cookies } from "next/headers";
import { HomePageElements } from "./lib/interface";

async function GetHomePageData() {
  unstable_noStore();
  const cookieStore = cookies();
  const language = cookieStore.get("language");

  if (
    language?.value === "sk" ||
    language?.value === "cz" ||
    language?.value === "en"
  ) {
    const db = getFirestore(app);
    const q = query(
      collection(db, "homepage"),
      where("jazyk", "==", language.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as HomePageElements;
      return data;
    } else {
      return undefined;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "homepage"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as HomePageElements;
    return data;
  } else {
    return undefined;
  }
}

export default async function Home() {
  const data: HomePageElements | undefined = await GetHomePageData();

  return (
    <main className="">
      <HomePageFirstSection button={data ? data.button_vypocet : ""} />
      <HomePageOurServices data={data} />
      <HomePagePriceOffer
        nadpis={data?.cenova_p_nadpis}
        popis1={data?.cenova_p_popis1}
        popis2={data?.cenova_p_popis2}
        button_vypocet={data?.button_vypocet}
      />
      <HomePageTimbermaxLike
        timbermax_ako={data?.timbermax_ako ? data.timbermax_ako : []}
        button_citat_viac={
          data?.button_citat_viac ? data.button_citat_viac : ""
        }
      />
      <HomePageAboutUs
        o_nas_nadpis={data?.o_nas_nadpis ? data.o_nas_nadpis : ""}
        o_nas_popis={data?.o_nas_popis ? data.o_nas_popis : ""}
        button_citat_viac={
          data?.button_citat_viac ? data.button_citat_viac : ""
        }
        o_nas_elements={data?.o_nas_elements ? data.o_nas_elements : []}
      />
      <HomePageReferencies
        ref_elements={data?.ref_elements ? data.ref_elements : []}
      />

      <HomePageShowRoom />
    </main>
  );
}
