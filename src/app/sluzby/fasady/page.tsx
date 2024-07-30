import FasadyPage from "@/app/components/ServicesComponents/FasadyPage";
import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
import { GetAdminFasady } from "@/app/lib/functionsServer";
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
    const data = await GetAdminFasady(language.value, "odvetrana");
    if (data) {
      return <FasadyPage data={data} />;
    }
    <FasadyPage data={undefined} />;
  }
  const data = await GetAdminFasady("sk", "odvetrana");
  if (data) {
    return <FasadyPage data={data} />;
  }
  <FasadyPage data={undefined} />;
}

export default function Page() {
  return (
    <Suspense fallback={<ServiceSkeleton />}>
      <GetData />
    </Suspense>
  );
}
