import AdminAboutUsPage from "@/app/components/AdminComponents/AdminAboutUsPage";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminAboutUsPage language={params.language} />;
};

export default Page;
