import FasadyPage from "@/app/components/ServicesComponents/FasadyPage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import {
  GetAdminFasady,
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
    const data = await GetAdminFasady(language.value, "predsadena");
    const galleries = await GetGalleriesForServicePage("fasady");
    if (data) {
      return <FasadyPage data={data} galleries={galleries} />;
    }
    <FasadyPage data={undefined} galleries={galleries} />;
  }
  const data = await GetAdminFasady("sk", "predsadena");
  const galleries = await GetGalleriesForServicePage("fasady");
  if (data) {
    return <FasadyPage data={data} galleries={galleries} />;
  }
  <FasadyPage data={undefined} galleries={galleries} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
