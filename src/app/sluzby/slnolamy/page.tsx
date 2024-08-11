import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import SlnolamyPage from "@/app/components/ServicesComponents/SlnolamyPage";
import {
  GetAdminSlnolamy,
  GetGalleriesForServicePage,
} from "@/app/lib/functionsServer";
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
    const galleries = await GetGalleriesForServicePage("slnolamy");
    if (data) {
      return <SlnolamyPage data={data} galleries={galleries} />;
    }
    <SlnolamyPage data={undefined} galleries={galleries} />;
  }
  const data = await GetAdminSlnolamy("sk");
  const galleries = await GetGalleriesForServicePage("slnolamy");
  if (data) {
    return <SlnolamyPage data={data} galleries={galleries} />;
  }
  <SlnolamyPage data={undefined} galleries={galleries} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
