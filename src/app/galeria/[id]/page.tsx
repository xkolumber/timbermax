import GalleryPageId from "@/app/components/GalleryPageId";
import { GetAdminGalleryId } from "@/app/lib/functionsServer";
import { Metadata } from "next";
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
  const data = await GetAdminGalleryId(id);

  if (data) {
    return <GalleryPageId data={data} />;
  }
  return <GalleryPageId data={undefined} />;
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
