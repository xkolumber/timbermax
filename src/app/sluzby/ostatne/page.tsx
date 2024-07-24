import OstatnePage from "@/app/components/ServicesComponents/OstatnePage";
import { GetAdminOstatne } from "@/app/lib/functionsServer";
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
    const data = await GetAdminOstatne(language.value);
    if (data) {
      return data;
    }
    return undefined;
  }
  const data = await GetAdminOstatne("sk");
  if (data) {
    return data;
  }
  return undefined;
}

export default async function Page() {
  const data: Slnolamy | undefined = await GetData();
  return (
    <main>
      <OstatnePage data={data} />
    </main>
  );
}
