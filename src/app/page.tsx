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
import HomePageSkeleton from "./components/HomePageComponents/HomePageSkeleton";
import HomePageWholePage from "./components/HomePageComponents/HomePageWholePage";
import { app } from "./lib/firebaseClient";
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
      return <HomePageWholePage data={data} />;
    } else {
      return <HomePageWholePage data={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "homepage"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as HomePageElements;
    return <HomePageWholePage data={data} />;
  } else {
    return <HomePageWholePage data={undefined} />;
  }
}

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <GetHomePageData />
    </Suspense>
  );
}
