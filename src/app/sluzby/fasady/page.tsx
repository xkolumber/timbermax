// import FasadyPage from "@/app/components/ServicesComponents/FasadyPage";
// import { GetAdminFasady, GetAdminTerasy } from "@/app/lib/functionsServer";
// import { Slnolamy } from "@/app/lib/interface";
// import { unstable_noStore } from "next/cache";
// import { cookies } from "next/headers";

// async function GetData() {
//   unstable_noStore();
//   const cookieStore = cookies();
//   const language = cookieStore.get("language");

//   if (
//     language?.value === "sk" ||
//     language?.value === "cz" ||
//     language?.value === "en"
//   ) {
//     const data = await GetAdminFasady(language.value);
//     if (data) {
//       return data;
//     }
//     return undefined;
//   }
//   const data = await GetAdminFasady("sk");
//   if (data) {
//     return data;
//   }
//   return undefined;
// }

// export default async function Page() {
//   const data: Slnolamy | undefined = await GetData();
//   return (
//     <main>
//       <FasadyPage data={data} />
//     </main>
//   );
// }

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
