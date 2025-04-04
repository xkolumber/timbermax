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
import PriceOfferSkeleton from "../components/PricesElements/PriceOfferSkeleton";
import PriceWholeObject from "../components/PricesElements/PriceWholeObject";
import { app } from "../lib/firebaseClient";
import { HomePageElements, PriceOffer } from "../lib/interface";

async function GetPriceOffer() {
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
      collection(db, "price-offer"),
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
      const data = docSnap.data() as PriceOffer;

      const docSnap2 = querySnapshot2.docs[0];
      const data2 = docSnap2.data() as HomePageElements;
      return <PriceWholeObject data={data} data2={data2} />;
    } else {
      return <PriceWholeObject data={undefined} data2={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "price-offer"), where("jazyk", "==", "sk"));

  const q2 = query(collection(db, "homepage"), where("jazyk", "==", "sk"));

  const querySnapshot2 = await getDocs(q2);

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as PriceOffer;

    const docSnap2 = querySnapshot2.docs[0];
    const data2 = docSnap2.data() as HomePageElements;
    return <PriceWholeObject data={data} data2={data2} />;
  } else {
    return <PriceWholeObject data={undefined} data2={undefined} />;
  }
}

export default function Page() {
  return (
    <Suspense fallback={<PriceOfferSkeleton />}>
      <GetPriceOffer />
    </Suspense>
  );
}
