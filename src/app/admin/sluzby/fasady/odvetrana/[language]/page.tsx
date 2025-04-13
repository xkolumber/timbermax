import AdminFasadyOdvetrana from "@/app/components/AdminComponents/AdminFasadyOdvetrana";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminFasadyOdvetrana language={params.language} />;
};

export default Page;
