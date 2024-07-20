import MoreAboutInfo from "../components/MoreAboutTimberComponents.tsx/MoreAboutInfo";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { MoreAboutTimElements, PriceOffer } from "../lib/interface";
import { app } from "../lib/firebaseClient";
import PriceWholeObject from "../components/PricesElements/PriceWholeObject";

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
      collection(db, "price-offer"),
      where("jazyk", "==", language.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as PriceOffer;
      return data;
    } else {
      return undefined;
    }
  }
  const db = getFirestore(app);
  const q = query(collection(db, "price-offer"), where("jazyk", "==", "sk"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as PriceOffer;
    return data;
  } else {
    return undefined;
  }
}

export default async function Page() {
  const data: PriceOffer | undefined = await GetData();
  return (
    <main>
      <PriceWholeObject data={data} />
    </main>
  );
}
