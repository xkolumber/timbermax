import GalleryPageId from "@/app/components/GalleryPageId";
import { GetAdminGalleryId } from "@/app/lib/functionsServer";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export const metadata: Metadata = {
  title: "Galéria fotiek",
  description: "Galéria našej práce",

  keywords: ["Timbermax"],
  openGraph: {
    title: "Timbermax",
    description: "Najčastejšie kladené otázky.",
  },
};

async function GetGalleryPhotosId(id: string) {
  const cookieStore = cookies();
  const language = cookieStore.get("language");
  const data = await GetAdminGalleryId(id);

  if (data && language) {
    return <GalleryPageId data={data} language={language.value} />;
  }
  return <GalleryPageId data={undefined} language={"sk"} />;
}

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <div className=" main_section  additional_padding">
      <Suspense
        fallback={
          <div className="mt-4 min-h-screen">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        {GetGalleryPhotosId(params.id)}
      </Suspense>
    </div>
  );
};

export default Page;
