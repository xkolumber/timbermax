import React from "react";
import Image from "next/image";

interface Props {
  mapa_showroomov: string;
}

const HomePageShowRoom = ({ mapa_showroomov }: Props) => {
  return (
    <div id="showroom" className="relative">
      <button className="btn btn--secondary absolute top-12 left-56 z-10 uppercase !hidden md:!block">
        {mapa_showroomov}
      </button>
      <Image
        src="/showroom_new.svg"
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
