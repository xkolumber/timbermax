import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import TerasyPage from "@/app/components/ServicesComponents/TerasyPage";
import { GetAdminTerasy } from "@/app/lib/functionsServer";
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
    if (data) {
      return <TerasyPage data={data} />;
    }
    <TerasyPage data={undefined} />;
  }
  const data = await GetAdminTerasy("sk");
  if (data) {
    return <TerasyPage data={data} />;
  }
  <TerasyPage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
