import { Metadata } from "next";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import GalleryPage from "../components/GalleryPage";
import { GetAdminGallery } from "../lib/functionsServer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    <div className=" relative navbar_section overflow-hidden additional_padding">
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
