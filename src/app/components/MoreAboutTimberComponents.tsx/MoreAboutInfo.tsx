import React from "react";
import Image from "next/image";
import getBase64 from "@/app/lib/functions";
import { MoreAboutTimElements } from "@/app/lib/interface";

interface Props {
  data: MoreAboutTimElements | undefined;
}

const MoreAboutInfo = ({ data }: Props) => {
  return (
    <div className=" ">
      <div className="main_section additional_padding w-full justify-center items-center">
        <h2 className="">{data?.nadpis}</h2>
        <p className="text-primary ">{data?.popis1}</p>
        <p className="mt-8 text-primary">{data?.popis2}</p>
        <Image
          src={"/viac-o.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AObj0Xfy6+G4DwkAuNrTvlkA6ufUeP/677g8NSi4wLmjYGzfFKZNZSBlAAAAAElFTkSuQmCC"
        />
        <p>{data?.popis_porovnanie}</p>
      </div>
      <div className="relative">
        <button className="btn btn--secondary absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {data?.tim_vs_konk}
        </button>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPw0OAy5WbQYWBg6GnM9DDht1BmY0iJ96rOi28qSGb49e3L6f27/v/+BgC/aQ8LE9jBAQAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="main_section">
        <p className="text-primary">{data?.next_popis1} </p>{" "}
        <p className="mt-4 text-primary">{data?.next_popis2} </p>{" "}
        <p className="mt-4 text-primary"> {data?.next_popis3}</p>
      </div>
      <Image
        src={"/viac-info.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority
        className="w-full h-full object-cover max-h-[300px]"
      />
      <div className="main_section">
        <p className="text-primary">{data?.next_popis4} </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="btn btn--fourthtiary">Timbermax Exotic</button>
          <button className="btn btn--secondary border border-black">
            Timbermax Rustic
          </button>
        </div>
        <p className="text-primary">{data?.pod_btn}</p>
      </div>
      <Image
        src={"/o_nas.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority
        className="w-full h-full object-cover max-h-[300px]"
      />
      <div className="main_section">
        <p className="text-primary">{data?.another_popis1}</p>
        <Image
          src={"/viac-o-2.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority
          className="w-full h-full object-cover "
        />
        <p className="text-primary">{data?.another_popis2}</p>
        <p className="mt-8 text-primary">{data?.lahko_nadpis}</p>{" "}
        <p className="mt-4 text-primary">{data?.lahko_popis}</p>
      </div>
    </div>
  );
};

export default MoreAboutInfo;
