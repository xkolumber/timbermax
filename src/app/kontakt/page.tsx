import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import ContactPagee from "../components/ContactPagee";
import HomePageSkeleton from "../components/HomePageComponents/HomePageSkeleton";
import {
  GetAdminAboutUsPage,
  GetAdminContactPage,
} from "../lib/functionsServer";
import { ClipLoader } from "react-spinners";

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

    const data2 = await GetAdminAboutUsPage(language.value);
    if (data && data2) {
      return <ContactPagee data={data} data2={data2} />;
    }

    return <ContactPagee data={undefined} data2={undefined} />;
  }
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen main_section additional_padding">
          <ClipLoader size={20} color={"#32a8a0"} loading={true} />
        </div>
      }
    >
      <GetData />
    </Suspense>
  );
}
