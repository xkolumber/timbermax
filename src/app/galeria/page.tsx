import { Metadata } from "next";
import GalleryPage from "../components/GalleryPage";

export const metadata: Metadata = {
  title: "Galéria fotiek",
  description: "Galéria našej práce",

  keywords: ["Timbermax"],
  openGraph: {
    title: "Timbermax",
    description: "Najčastejšie kladené otázky.",
  },
};

const Page = () => (
  <>
    <div className=" relative navbar_section overflow-hidden additional_padding">
      <GalleryPage />
    </div>
  </>
);

export default Page;
