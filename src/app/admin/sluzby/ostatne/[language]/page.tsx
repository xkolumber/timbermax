import AdminOstatne from "@/app/components/AdminComponents/AdminOstatne";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminOstatne language={params.language} />;
};

export default Page;
