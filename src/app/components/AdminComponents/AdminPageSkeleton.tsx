import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminPageSkeleton = () => {
  return (
    <div className="main_section min-h-screen additional_padding">
      <h4 className="mt-8">
        {" "}
        <Skeleton width={300} baseColor="#DEDEDE" />
      </h4>
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
      <Skeleton baseColor="#DEDEDE" borderRadius={8} height={60} />
    </div>
  );
};

export default AdminPageSkeleton;
