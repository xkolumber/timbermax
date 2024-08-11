import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import TerasyPage from "@/app/components/ServicesComponents/TerasyPage";
import {
  GetAdminTerasy,
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
    const data = await GetAdminTerasy(language.value);
    const galleries = await GetGalleriesForServicePage("terasy");

    if (data) {
      return <TerasyPage data={data} galleries={galleries} />;
    }
    <TerasyPage data={undefined} galleries={galleries} />;
  }
  const data = await GetAdminTerasy("sk");
  const galleries = await GetGalleriesForServicePage("terasy");

  if (data) {
    return <TerasyPage data={data} galleries={galleries} />;
  }
  <TerasyPage data={undefined} galleries={galleries} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
