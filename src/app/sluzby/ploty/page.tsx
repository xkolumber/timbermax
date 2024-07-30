import PlotyPage from "@/app/components/ServicesComponents/PlotyPage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import { GetAdminPloty } from "@/app/lib/functionsServer";
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
    if (data) {
      return <PlotyPage data={data} />;
    }
    <PlotyPage data={undefined} />;
  }
  const data = await GetAdminPloty("sk");
  if (data) {
    return <PlotyPage data={data} />;
  }
  <PlotyPage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
