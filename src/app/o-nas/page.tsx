import React from "react";
import Image from "next/image";
import AboutUsHistory from "../components/AboutUsComponents/AboutUsHistory";
import AboutUsPhilosophy from "../components/AboutUsComponents/AboutUsPhilosophy";
import AboutUsTeam from "../components/AboutUsComponents/AboutUsTeam";

const page = () => {
  return (
    <div>
      <Image
        src={"/main_picture.png"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[1200px] object-cover"
      />
      <AboutUsHistory />
      <AboutUsPhilosophy />
      <AboutUsTeam />
    </div>
  );
};

export default page;
