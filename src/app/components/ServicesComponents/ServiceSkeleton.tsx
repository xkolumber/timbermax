import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const ServiceSkeleton = () => {
  return (
    <main>
      <div className="bg-secondary">
        <div className="main_section additional_padding">
          <h4 className="uppercase  custom-underline mb-16 2xl:mb-[76px]">
            <Skeleton baseColor="#DEDEDE" width={300} />
          </h4>
          <p className="text-tertiary">
            {" "}
            <Skeleton baseColor="#DEDEDE" count={4} />
          </p>
        </div>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1080}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPw0OAy5WbQYWBg6GnM9DDht1BmY0iJ96rOi28qSGb49e3L6f27/v/+BgC/aQ8LE9jBAQAAAABJRU5ErkJggg=="
        />
      </div>
    </main>
  );
};

export default ServiceSkeleton;
