import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IconArrowLoopLeft from "../Icons/IconArrowLoopLeft";
import IconArrowLoopRight from "../Icons/IconArrowLoopRight";
import IconDoubleArrow from "../Icons/IconDoubleArrow";

const HomePageSkeleton = () => {
  return (
    <>
      <div className="relative  flex items-center justify-center overflow-hidden">
        <Image
          src={`/loop/main1_new.jpg`}
          alt={`Image`}
          className="h-full w-full object-cover min-h-[700px] md:min-h-[800px] xl:min-h-screen"
          layout="responsive"
          width={1920}
          height={1080}
          placeholder="blur"
          priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC"
        />
        <Image
          src={`/podklad.png`}
          alt={`Image`}
          priority={true}
          className="absolute w-full h-[50%] object-cover"
          fill
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 2xl:scale-150 z-[500]">
          <IconDoubleArrow />
        </div>
      </div>
      <div className="navbar_section min-h-[700px] md:min-h-[800px] xl:min-h-screen  w-full  flex flex-col justify-between p-12">
        <div className="btn btn--secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase !font-medium">
          <Skeleton baseColor="#DEDEDE" width={300} />
        </div>

        <div className="flex flex-col  gap-8 md:gap-12 items-end absolute right-0 top-[70%] md:top-[65%] left-1/2 transform -translate-y-1/2 p-[1.6rem]">
          <div className="cursor-pointer">
            <IconArrowLoopLeft />
          </div>
          <div className="cursor-pointer">
            <IconArrowLoopRight />
          </div>
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
