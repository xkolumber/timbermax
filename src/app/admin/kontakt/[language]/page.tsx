import AdminContactPage from "@/app/components/AdminComponents/AdminContactPage";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminContactPage language={params.language} />;
};

export default Page;
