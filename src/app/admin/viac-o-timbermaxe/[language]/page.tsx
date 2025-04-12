import AdminAboutTimbermax from "@/app/components/AdminComponents/AdminAboutTimbermax";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminAboutTimbermax language={params.language} />;
};

export default Page;
