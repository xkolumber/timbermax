import AdminBlogId from "@/app/components/AdminComponents/AdminBlogId";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return <AdminBlogId id={params.id} />;
};

export default Page;
