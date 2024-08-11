import PlotyPage from "@/app/components/ServicesComponents/PlotyPage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import {
  GetAdminPloty,
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
    const data = await GetAdminPloty(language.value);
    const galleries = await GetGalleriesForServicePage("ploty");
    if (data) {
      return <PlotyPage data={data} galleries={galleries} />;
    }
    <PlotyPage data={undefined} galleries={galleries} />;
  }
  const data = await GetAdminPloty("sk");
  const galleries = await GetGalleriesForServicePage("slnolamy");
  if (data) {
    return <PlotyPage data={data} galleries={galleries} />;
  }
  <PlotyPage data={undefined} galleries={galleries} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
