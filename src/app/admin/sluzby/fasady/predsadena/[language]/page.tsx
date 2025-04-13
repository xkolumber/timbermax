import AdminFasadyPredsadena from "@/app/components/AdminComponents/AdminFasadyPredsadena";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminFasadyPredsadena language={params.language} />;
};

export default Page;
