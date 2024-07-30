import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import SlnolamyPage from "@/app/components/ServicesComponents/SlnolamyPage";
import { GetAdminSlnolamy } from "@/app/lib/functionsServer";
import { cookies } from "next/headers";
import { Suspense } from "react";

async function GetData() {
  const cookieStore = cookies();
  const language = cookieStore.get("language");

  if (
    language?.value === "sk" ||
    language?.value === "cz" ||
    language?.value === "en"
  ) {
    const data = await GetAdminSlnolamy(language.value);
    if (data) {
      return <SlnolamyPage data={data} />;
    }
    <SlnolamyPage data={undefined} />;
  }
  const data = await GetAdminSlnolamy("sk");
  if (data) {
    return <SlnolamyPage data={data} />;
  }
  <SlnolamyPage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
