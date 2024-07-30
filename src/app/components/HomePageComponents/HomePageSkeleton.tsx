import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

const HomePageSkeleton = () => {
  return (
    <>
      <div className="relative !pt-40 min-h-[700px] xl:min-h-screen md:justify-start flex items-center   overflow-hidden">
        <Image
          src={`/loop/main1_new.jpg`}
          alt={`Image`}
          className="h-full w-full  object-cover "
          width={5000}
          height={5000}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC"
        />
        <button className="btn btn--secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase">
          <Skeleton baseColor="#DEDEDE" width={300} />
        </button>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2">
          <IconDoubleArrow />
        </div>
      </div>
      <div className="bg-secondary">
        <div className="main_section">
          <h3 className="uppercase  custom-underline mb-16 2xl:mb-[76px]">
            <Skeleton baseColor="#DEDEDE" width={300} />
          </h3>

          <p className="text-primary description_section">
            <Skeleton baseColor="#DEDEDE" width={600} />
          </p>

          <p className="text-primary mt-8 description_section">
            <Skeleton baseColor="#DEDEDE" count={5} />
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePageSkeleton;
