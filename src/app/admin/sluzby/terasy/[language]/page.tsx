import AdminTerasy from "@/app/components/AdminComponents/AdminTerasy";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminTerasy language={params.language} />;
};

export default Page;
