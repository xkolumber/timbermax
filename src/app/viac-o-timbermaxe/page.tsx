import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { MoreAboutTimElements } from "../lib/interface";
import { app } from "../lib/firebaseClient";
import { Suspense } from "react";
import HomePageSkeleton from "../components/HomePageComponents/HomePageSkeleton";
import MoreAboutWholePage from "../components/MoreAboutTimberComponents.tsx/MoreAboutWholePage";
import MoreAboutSkeleton from "../components/MoreAboutTimberComponents.tsx/MoreAboutSkeleton";

async function GetData() {
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
      collection(db, "more-about"),
      where("jazyk", "==", language.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as MoreAboutTimElements;
      return <MoreAboutWholePage data={data} />;
    } else {
      return <MoreAboutWholePage data={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "more-about"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as MoreAboutTimElements;
    return <MoreAboutWholePage data={data} />;
  } else {
    return <MoreAboutWholePage data={undefined} />;
  }
}

export default function Page() {
  return (
    <Suspense fallback={<MoreAboutSkeleton />}>
      <GetData />
    </Suspense>
  );
}
