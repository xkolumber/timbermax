import AdminSlnolamy from "@/app/components/AdminComponents/AdminSlnolamy";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminSlnolamy language={params.language} />;
};

export default Page;
