import AdminBazeny from "@/app/components/AdminComponents/AdminBazeny";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminBazeny language={params.language} />;
};

export default Page;
