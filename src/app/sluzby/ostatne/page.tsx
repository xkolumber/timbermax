import OstatnePage from "@/app/components/ServicesComponents/OstatnePage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import { GetAdminOstatne } from "@/app/lib/functionsServer";
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
    const data = await GetAdminOstatne(language.value);
    if (data) {
      return <OstatnePage data={data} />;
    }
    <OstatnePage data={undefined} />;
  }
  const data = await GetAdminOstatne("sk");
  if (data) {
    return <OstatnePage data={data} />;
  }
  <OstatnePage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
