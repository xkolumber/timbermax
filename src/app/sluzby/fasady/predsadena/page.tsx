import FasadyPage from "@/app/components/ServicesComponents/FasadyPage";
import { GetAdminFasady, GetAdminTerasy } from "@/app/lib/functionsServer";
import { Fasady, Slnolamy, Terasy } from "@/app/lib/interface";
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
    const data = await GetAdminFasady(language.value, "predsadena");
    if (data) {
      return data;
    }
    return undefined;
  }
  const data = await GetAdminFasady("sk", "predsadena");
  if (data) {
    return data;
  }
  return undefined;
}

export default async function Page() {
  const data: Fasady | undefined = await GetData();
  return (
    <main>
      <FasadyPage data={data} />
    </main>
  );
}
