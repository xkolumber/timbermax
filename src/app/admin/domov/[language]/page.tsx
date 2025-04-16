import AdminHomePage from "@/app/components/AdminComponents/AdminHomePage";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminHomePage language={params.language} />;
};

export default Page;
