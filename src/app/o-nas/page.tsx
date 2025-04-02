import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import AboutUsSkeleton from "../components/AboutUsComponents/AboutUsSkeleton";
import AboutUsWholePage from "../components/AboutUsComponents/AboutUsWholePage";
import { app } from "../lib/firebaseClient";
import { AboutUsElements, HomePageElements } from "../lib/interface";

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

    const q2 = query(
      collection(db, "homepage"),
      where("jazyk", "==", language.value)
    );
    const querySnapshot = await getDocs(q);

    const querySnapshot2 = await getDocs(q2);
    if (!querySnapshot.empty && !querySnapshot2.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as AboutUsElements;

      const docSnap2 = querySnapshot2.docs[0];
      const data2 = docSnap2.data() as HomePageElements;
      return <AboutUsWholePage data={data} data2={data2} />;
    } else {
      return <AboutUsWholePage data={undefined} data2={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "about-us"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);

  const q2 = query(collection(db, "homepage"), where("jazyk", "==", "sk"));

  const querySnapshot2 = await getDocs(q2);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as AboutUsElements;

    const docSnap2 = querySnapshot2.docs[0];
    const data2 = docSnap2.data() as HomePageElements;

    return <AboutUsWholePage data={data} data2={data2} />;
  } else {
    return <AboutUsWholePage data={undefined} data2={undefined} />;
  }
}

export default async function AboutUs() {
  return (
    <Suspense fallback={<AboutUsSkeleton />}>
      <GetAboutUsData />
    </Suspense>
  );
}
