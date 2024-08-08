import AdminFinalNotAuthorized from "@/app/components/AdminComponents/AdminFinalNotAuthorized";
import AdminNotAuthorized from "@/app/components/AdminComponents/AdminNotAuthorized";
import AdminPage from "@/app/components/AdminComponents/AdminPage";
import AdminPageSkeleton from "@/app/components/AdminComponents/AdminPageSkeleton";
import { GetLanguages, getToken } from "@/app/lib/actions";
import { Suspense } from "react";
import jwt from "jsonwebtoken";
import { GetAdminGalleryId, GetAdminHomePage } from "@/app/lib/functionsServer";
import AdminHomePage from "@/app/components/AdminComponents/AdminHomePage";
import AdminGalleryCertainAlbum from "@/app/components/AdminComponents/AdminGalleryCertainAlbum";

async function Validate(id: string) {
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
    const data = await GetAdminGalleryId(id);
    const languages = await GetLanguages();
    if (data) {
      return <AdminGalleryCertainAlbum data={data} languages={languages} />;
    }

    return <AdminGalleryCertainAlbum data={undefined} languages={languages} />;
  } else {
    return <AdminFinalNotAuthorized />;
  }
}

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>{Validate(params.id)}</Suspense>
  );
};

export default Page;
