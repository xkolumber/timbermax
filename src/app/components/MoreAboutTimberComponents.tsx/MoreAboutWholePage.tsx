import { MoreAboutTimElements } from "@/app/lib/interface";
import React from "react";
import Image from "next/image";

interface Props {
  data: MoreAboutTimElements | undefined;
}

const MoreAboutWholePage = ({ data }: Props) => {
  return (
    <div className=" ">
      <div className="main_section additional_padding w-full justify-center items-center">
        <h3 className="custom-underline font-normal">{data?.nadpis}</h3>
        <p className="text-primary ">{data?.popis1}</p>
        <p className="mt-8 text-primary">{data?.popis2}</p>
        <Image
          src={"/more_about/first.png"}
          alt="hlavna_fotka"
          height={800}
          width={1500}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover hidden md:block"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AObj0Xfy6+G4DwkAuNrTvlkA6ufUeP/677g8NSi4wLmjYGzfFKZNZSBlAAAAAElFTkSuQmCC"
        />
        <Image
          src={"/more_about/first_m.png"}
          alt="hlavna_fotka"
          height={900}
          width={900}
          quality={100}
          priority={true}
          className="w-full object-cover  md:hidden mt-16 mb-16"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AObj0Xfy6+G4DwkAuNrTvlkA6ufUeP/677g8NSi4wLmjYGzfFKZNZSBlAAAAAElFTkSuQmCC"
        />
        <p className="text-primary text-center">{data?.popis_porovnanie}</p>
      </div>
      <div className="relative">
        <button className="btn btn--secondary !font-normal uppercase absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {data?.tim_vs_konk}
        </button>
        <Image
          src={"/more_about/second.jpg"}
          alt="hlavna_fotka"
          height={500}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-[400px] md:h-full max-h-[800px] object-cover"
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
        src={"/more_about/third.jpg"}
        alt="hlavna_fotka"
        height={300}
        width={1920}
        quality={100}
        priority={true}
        className="w-full md:h-full object-cover h-[450px] max-h-[400px] 3xl:max-h-[500px] object-[65%]"
      />
      <div className="main_section hidden md:block">
        <p className="text-primary">{data?.next_popis4} </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="btn btn--fourthtiary uppercase">
            Timbermax Exotic
          </button>
          <button className="btn btn--secondary border border-black uppercase">
            Timbermax Rustic
          </button>
        </div>
        <p className="text-primary">{data?.pod_btn}</p>
      </div>
      <div className="bg-[#C6BFB6] flex flex-col justify-center items-center pt-12 pb-12 md:hidden">
        <p className="text-primary font-normal">TIMBERMAX</p>
        <div className="flex flex-row gap-8">
          <button className="btn btn--fourthtiary uppercase !text-[12px]">
            Exotic
          </button>
          <button className="btn btn--secondary border border-black uppercase !text-[12px]">
            Rustic
          </button>
        </div>
      </div>
      <div className="main_section md:hidden">
        {" "}
        <p className="text-primary">{data?.pod_btn}</p>
      </div>

      <Image
        src={"/more_about/fourth.jpg"}
        alt="hlavna_fotka"
        height={700}
        width={1920}
        quality={100}
        priority
        className="w-full h-[400px] md:h-full object-cover max-h-[600px] 3xl:max-h-[800px]  object-[65%]"
      />
      <div className="main_section">
        <p className="text-primary">{data?.another_popis1}</p>
        <Image
          src={"/more_about/fifth.png"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority
          className="w-full h-full object-cover hidden md:hlock "
        />
        <Image
          src={"/more_about/fifth_m.png"}
          alt="hlavna_fotka"
          height={900}
          width={800}
          quality={100}
          priority
          className="w-full h-full object-cover md:hidden mt-16 mb-16"
        />
        <p className="text-primary">{data?.another_popis2}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.lahko_nadpis}
        </h3>{" "}
        <p className="mt-4 text-primary">{data?.lahko_popis}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.fareb_nadpis}
        </h3>{" "}
        <p className="mt-4 text-primary">{data?.fareb_popis}</p>
      </div>
      <Image
        src={"/viac-info.jpg"}
        alt="hlavna_fotka"
        height={900}
        width={1920}
        quality={100}
        priority
        className="w-full h-full object-cover max-h-[400px] 2xl:max-h-[600px] "
      />
      <div className="main_section">
        <h3 className="mt-8 text-primary font-semibold">
          {data?.tepel_nadpis}
        </h3>{" "}
        <p className="text-primary">{data?.tepel_popis}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.prehrev_nadpis}
        </h3>{" "}
        <p className="text-primary">{data?.prehrev_popis1}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis2}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis2}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis3}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis4}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis5}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis6}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.mech_nadpis}
        </h3>{" "}
        <p className="text-primary">{data?.mech_popis}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.tvar_nadpis}
        </h3>{" "}
        <p className="text-primary">{data?.tvar_popis1}</p>
        <p className="text-primary mt-8">{data?.tvar_popis2}</p>
        <p className="text-primary mt-8">{data?.tvar_popis3}</p>
        <p className="text-primary mt-8">{data?.tvar_popis4}</p>
        <p className="text-primary mt-8">{data?.tvar_popis5}</p>
        <p className="text-primary mt-8">{data?.tvar_popis6}</p>
        <h3 className="mt-8 text-primary font-semibold">
          {data?.profil_nadpis}
        </h3>{" "}
        <Image
          src={"/profil.png"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority
          className="w-full h-full object-cover "
        />
        <p className="text-primary mt-8">{data?.profil_popis1}</p>
        <p className="text-primary mt-8">{data?.profil_popis2}</p>
        <p className="text-primary mt-8">{data?.profil_popis3}</p>
        <p className="text-primary mt-8">{data?.profil_popis4}</p>
        <Image
          src={"/tabulka.png"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority
          className="w-full h-full object-cover mt-8 "
        />
        <h3 className="mt-8 text-primary custom-underline">
          {data?.nadpis_vizualizacia}
        </h3>{" "}
        <p className="text-primary mt-8">{data?.popis_viz_1}</p>
      </div>
    </div>
  );
};

export default MoreAboutWholePage;
