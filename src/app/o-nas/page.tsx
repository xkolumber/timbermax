import React from "react";
import Image from "next/image";
import AboutUsHistory from "../components/AboutUsComponents/AboutUsHistory";
import AboutUsPhilosophy from "../components/AboutUsComponents/AboutUsPhilosophy";
import AboutUsTeam from "../components/AboutUsComponents/AboutUsTeam";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../lib/firebaseClient";
import { AboutUsElements } from "../lib/interface";

async function GetAboutUsData() {
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
      collection(db, "about-us"),
      where("jazyk", "==", language.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as AboutUsElements;
      return data;
    } else {
      return undefined;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "about-us"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as AboutUsElements;
    return data;
  } else {
    return undefined;
  }
}

export default async function AboutUs() {
  const data: AboutUsElements | undefined = await GetAboutUsData();
  return (
    <div>
      <Image
        src={"/loop/main1.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[1200px] object-cover"
      />
      <AboutUsHistory
        nadpis={data?.history_nadpis ? data.history_nadpis : ""}
        popis={data?.history_popis ? data.history_popis : ""}
      />
      <AboutUsPhilosophy
        nadpis={data?.filozofia_nadpis ? data.filozofia_nadpis : ""}
        staviame_znacka={data?.staviame_znacka ? data.staviame_znacka : ""}
        popis1={data?.filozofia_popis1 ? data.filozofia_popis1 : ""}
        popis2={data?.filozofia_popis2 ? data.filozofia_popis2 : ""}
        popis3={data?.filozofia_popis3 ? data.filozofia_popis3 : ""}
        citat={data?.citat ? data.citat : ""}
      />
      <AboutUsTeam
        tim={data?.tim ? data.tim : []}
        spoznajte_tim={data?.spoznajte_tim ? data?.spoznajte_tim : ""}
      />
    </div>
  );
}
