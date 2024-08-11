import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import ContactPagee from "../components/ContactPagee";
import HomePageSkeleton from "../components/HomePageComponents/HomePageSkeleton";
import { GetAdminContactPage } from "../lib/functionsServer";

async function GetData() {
  unstable_noStore();
  const cookieStore = cookies();
  const language = cookieStore.get("language");

  if (
    language?.value === "sk" ||
    language?.value === "cz" ||
    language?.value === "en"
  ) {
    const data = await GetAdminContactPage(language.value);
    if (data) {
      return <ContactPagee data={data} />;
    }
    console.log(language);

    return <ContactPagee data={undefined} />;
  }
}

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <GetData />
    </Suspense>
  );
}
