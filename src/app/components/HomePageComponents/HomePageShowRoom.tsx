import React from "react";
import Image from "next/image";

const HomePageShowRoom = () => {
  return (
    <div id="showroom">
      <Image
        src="/showroom.svg"
        className="w-full h-full object-cover min-h-[200px] "
        alt="referencie"
        width={1000}
        height={1000}
        quality={100}
      />
    </div>
  );
};

export default HomePageShowRoom;
