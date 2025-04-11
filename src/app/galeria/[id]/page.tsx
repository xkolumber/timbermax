import GalleryPageId from "@/app/components/GalleryPageId";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galéria fotiek",
  description: "Galéria našej práce",

  keywords: ["Timbermax"],
  openGraph: {
    title: "Timbermax",
    description: "Najčastejšie kladené otázky.",
  },
};

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <div className=" main_section  additional_padding">
      <GalleryPageId id={params.id} />
    </div>
  );
};

export default Page;
