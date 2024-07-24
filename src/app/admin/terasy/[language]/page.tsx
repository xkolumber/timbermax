import AdminFinalNotAuthorized from "@/app/components/AdminComponents/AdminFinalNotAuthorized";
import AdminNotAuthorized from "@/app/components/AdminComponents/AdminNotAuthorized";
import AdminPageSkeleton from "@/app/components/AdminComponents/AdminPageSkeleton";
import AdminSlnolamy from "@/app/components/AdminComponents/AdminSlnolamy";
import { GetLanguages, getToken } from "@/app/lib/actions";
import { GetAdminSlnolamy } from "@/app/lib/functionsServer";
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

    const data = await GetAdminSlnolamy(language);
    if (data) {
      return (
        <AdminSlnolamy language={language} data={data} languages={languages} />
      );
    }
    //opravit na tersay

    return (
      <AdminSlnolamy
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
