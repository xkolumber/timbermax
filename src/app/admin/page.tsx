// import { Suspense } from "react";
// import AdminFinalNotAuthorized from "../components/AdminComponents/AdminFinalNotAuthorized";
// import AdminNotAuthorized from "../components/AdminComponents/AdminNotAuthorized";
// import { GetLanguages, getToken } from "../lib/actions";
// import jwt from "jsonwebtoken";
// import AdminPageSkeleton from "../components/AdminComponents/AdminPageSkeleton";
// import AdminPage from "../components/AdminComponents/AdminPage";

// async function Validate() {
//   const authToken = await getToken();

//   if (!authToken) {
//     return <AdminNotAuthorized />;
//   }

//   const decodedToken: any = jwt.decode(authToken!);
//   if (!decodedToken || typeof decodedToken === "string") {
//     return <AdminNotAuthorized />;
//   }
//   const browser_uid = decodedToken.user_id;

//   if (browser_uid === process.env.ADMIN_UID) {
//     const languages = await GetLanguages();
//     return <AdminPage languages={languages} />;
//   } else {
//     return <AdminFinalNotAuthorized />;
//   }
// }

// const page = () => {
//   return (
//     <Suspense fallback={<AdminPageSkeleton />}>
//       <Validate />
//     </Suspense>
//   );
// };

// export default page;

import React from "react";
import AdminPage from "../components/AdminComponents/AdminPage";

const page = () => {
  return <AdminPage />;
};

export default page;
