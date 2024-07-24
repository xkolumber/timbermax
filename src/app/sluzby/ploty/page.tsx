import PlotyPage from "@/app/components/ServicesComponents/PlotyPage";
import { GetAdminPloty } from "@/app/lib/functionsServer";
import { Slnolamy } from "@/app/lib/interface";
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
    const data = await GetAdminPloty(language.value);
    if (data) {
      return data;
    }
    return undefined;
  }
  const data = await GetAdminPloty("sk");
  if (data) {
    return data;
  }
  return undefined;
}

export default async function Page() {
  const data: Slnolamy | undefined = await GetData();
  return (
    <main>
      <PlotyPage data={data} />
    </main>
  );
}
