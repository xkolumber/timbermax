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
      return <AboutUsWholePage data={data} />;
    } else {
      return <AboutUsWholePage data={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "about-us"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as AboutUsElements;
    return <AboutUsWholePage data={data} />;
  } else {
    return <AboutUsWholePage data={undefined} />;
  }
}

export default async function AboutUs() {
  return (
    <Suspense fallback={<AboutUsSkeleton />}>
      <GetAboutUsData />
    </Suspense>
  );
}
