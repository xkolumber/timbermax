import AdminPriceOffer from "@/app/components/AdminComponents/AdminPriceOffer";

type Props = {
  params: { language: string };
};

const Page = ({ params }: Props) => {
  return <AdminPriceOffer language={params.language} />;
};

export default Page;
