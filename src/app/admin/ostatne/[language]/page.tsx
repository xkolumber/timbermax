import AdminAboutTimbermax from "@/app/components/AdminComponents/AdminAboutTimbermax";
import AdminAboutUsPage from "@/app/components/AdminComponents/AdminAboutUsPage";
import AdminFinalNotAuthorized from "@/app/components/AdminComponents/AdminFinalNotAuthorized";
import AdminNotAuthorized from "@/app/components/AdminComponents/AdminNotAuthorized";
import AdminOstatne from "@/app/components/AdminComponents/AdminOstatne";
import AdminPageSkeleton from "@/app/components/AdminComponents/AdminPageSkeleton";
import AdminPloty from "@/app/components/AdminComponents/AdminPloty";
import AdminSlnolamy from "@/app/components/AdminComponents/AdminSlnolamy";
import { GetLanguages, getToken } from "@/app/lib/actions";
import {
  GetAdminAboutUsPage,
  GetAdminMoreAbout,
  GetAdminOstatne,
  GetAdminPloty,
  GetAdminSlnolamy,
} from "@/app/lib/functionsServer";
import jwt from "jsonwebtoken";
import { Suspense } from "react";

async function Validate(language: string) {
  const authToken = await getToken();

  if (!authToken) {
    return <AdminNotAuthorized />;
  }

  const decodedToken: any = jwt.decode(authToken!);
  if (!decodedToken || typeof decodedToken === "string") {
    return <AdminNotAuthorized />;
  }
  const browser_uid = decodedToken.user_id;

  if (browser_uid === process.env.ADMIN_UID) {
    const languages = await GetLanguages();

    const data = await GetAdminOstatne(language);
    if (data) {
      return (
        <AdminOstatne language={language} data={data} languages={languages} />
      );
    }

    return (
      <AdminOstatne
        language={language}
        data={undefined}
        languages={languages}
      />
    );
  } else {
    return <AdminFinalNotAuthorized />;
  }
}

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      {Validate(params.language)}
    </Suspense>
  );
};

export default Page;
