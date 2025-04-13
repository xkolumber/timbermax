import AdminPloty from "@/app/components/AdminComponents/AdminPloty";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminPloty language={params.language} />;
};

export default Page;
