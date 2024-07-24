import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import GalleryPage from "../components/GalleryPage";
import { GetAdminGallery } from "../lib/functionsServer";

export const metadata: Metadata = {
  title: "Galéria fotiek",
  description: "Galéria našej práce",

  keywords: ["Timbermax"],
  openGraph: {
    title: "Timbermax",
    description: "Najčastejšie kladené otázky.",
  },
};

async function GetGalleryPhotos() {
  const data = await GetAdminGallery();

  if (data) {
    return <GalleryPage data={data} />;
  }
  return <GalleryPage data={[]} />;
}

const Page = () => (
  <>
    <div className=" relative main_section overflow-hidden additional_padding">
      <h1 className="text-primary mb-4">Galéria</h1>
      <Suspense
        fallback={
          <div className="mt-4 min-h-screen">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        {GetGalleryPhotos()}
      </Suspense>
    </div>
  </>
);

export default Page;
