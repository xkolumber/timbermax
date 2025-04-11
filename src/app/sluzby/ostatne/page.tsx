// import OstatnePage from "@/app/components/ServicesComponents/OstatnePage";
// import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
// import {
//   GetAdminOstatne,
//   GetGalleriesForServicePage,
// } from "@/app/lib/functionsServer";
// import { cookies } from "next/headers";
// import { Suspense } from "react";

// async function GetData() {
//   const cookieStore = cookies();
//   const language = cookieStore.get("language");

//   if (
//     language?.value === "sk" ||
//     language?.value === "cz" ||
//     language?.value === "en"
//   ) {
//     const data = await GetAdminOstatne(language.value);
//     const galleries = await GetGalleriesForServicePage("ostatne");
//     if (data) {
//       return <OstatnePage data={data} galleries={galleries} />;
//     }
//     <OstatnePage data={undefined} galleries={galleries} />;
//   }
//   const data = await GetAdminOstatne("sk");
//   const galleries = await GetGalleriesForServicePage("ostatne");
//   if (data) {
//     return <OstatnePage data={data} galleries={galleries} />;
//   }
//   <OstatnePage data={undefined} galleries={galleries} />;
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<ServiceSkeleton />}>
//       <GetData />
//     </Suspense>
//   );
// }

import OstatnePage from "@/app/components/ServicesComponents/OstatnePage";
import React from "react";

const page = () => {
  return <OstatnePage />;
};

export default page;
