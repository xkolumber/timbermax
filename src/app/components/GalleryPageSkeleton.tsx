import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryPageSkeleton = () => {
  return (
    <div>
      <h3 className="text-primary mb-4 custom-underline navbar_section">
        <Skeleton baseColor="#DEDEDE" width={150} height={24} />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16 2xl:gap-24 navbar_section">
        {Array(7)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="h-[500px] 2xl:h-[800px] w-full relative rounded-[8px] overflow-hidden"
            >
              <Skeleton baseColor="#DEDEDE" height="100%" width="100%" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryPageSkeleton;
