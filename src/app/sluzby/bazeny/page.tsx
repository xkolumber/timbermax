// import BazenyPage from "@/app/components/ServicesComponents/BazenyPage";
// import ServiceSkeleton from "@/app/components/ServicesComponents/ServiceSkeleton";
// import {
//   GetAdminBazeny,
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
//     const data = await GetAdminBazeny(language.value);
//     const galleries = await GetGalleriesForServicePage("bazeny");
//     if (data) {
//       return <BazenyPage data={data} galleries={galleries} />;
//     }
//     <BazenyPage data={undefined} galleries={galleries} />;
//   }
//   const data = await GetAdminBazeny("sk");
//   const galleries = await GetGalleriesForServicePage("bazeny");
//   if (data) {
//     return <BazenyPage data={data} galleries={galleries} />;
//   }
//   <BazenyPage data={undefined} galleries={galleries} />;
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<ServiceSkeleton />}>
//       <GetData />
//     </Suspense>
//   );
// }

import BazenyPage from "@/app/components/ServicesComponents/BazenyPage";
import React from "react";

const page = () => {
  return <BazenyPage />;
};

export default page;
