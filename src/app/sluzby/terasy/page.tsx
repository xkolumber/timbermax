import SlnolamyPage from "@/app/components/ServicesComponents/SlnolamyPage";
import TerasyPage from "@/app/components/ServicesComponents/TerasyPage";
import { app } from "@/app/lib/firebaseClient";
import { GetAdminTerasy } from "@/app/lib/functionsServer";
import { Slnolamy } from "@/app/lib/interface";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";

async function GetData() {
  unstable_noStore();
  const cookieStore = cookies();
  const language = cookieStore.get("language");

  if (
    language?.value === "sk" ||
    language?.value === "cz" ||
    language?.value === "en"
  ) {
    const data = await GetAdminTerasy(language.value);
    if (data) {
      return data;
    }
    return undefined;
  }
  const data = await GetAdminTerasy("sk");
  if (data) {
    return data;
  }
  return undefined;
}

export default async function Page() {
  const data: Slnolamy | undefined = await GetData();
  return (
    <main>
      <TerasyPage data={data} />
    </main>
  );
}
