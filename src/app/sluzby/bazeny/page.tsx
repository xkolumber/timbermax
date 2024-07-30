import BazenyPage from "@/app/components/ServicesComponents/BazenyPage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import { GetAdminBazeny } from "@/app/lib/functionsServer";
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
    const data = await GetAdminBazeny(language.value);
    if (data) {
      return <BazenyPage data={data} />;
    }
    <BazenyPage data={undefined} />;
  }
  const data = await GetAdminBazeny("sk");
  if (data) {
    return <BazenyPage data={data} />;
  }
  <BazenyPage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
