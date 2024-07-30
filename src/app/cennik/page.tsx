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
import { PriceOffer } from "../lib/interface";

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
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as PriceOffer;
      return <PriceWholeObject data={data} />;
    } else {
      return <PriceWholeObject data={undefined} />;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "price-offer"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as PriceOffer;
    return <PriceWholeObject data={data} />;
  } else {
    return <PriceWholeObject data={undefined} />;
  }
}

export default function Page() {
  return (
    <Suspense fallback={<PriceOfferSkeleton />}>
      <GetPriceOffer />
    </Suspense>
  );
}
