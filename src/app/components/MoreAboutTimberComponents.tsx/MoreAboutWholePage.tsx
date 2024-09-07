import { MoreAboutTimElements } from "@/app/lib/interface";
import React from "react";
import Image from "next/image";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";

interface Props {
  data: MoreAboutTimElements | undefined;
  language: string;
}

const MoreAboutWholePage = ({ data, language }: Props) => {
  return (
    <div className=" ">
      <div className="main_section additional_padding w-full justify-center items-center">
        <h3 className="custom-underline font-normal">{data?.nadpis}</h3>
        <p className="text-primary ">{data?.popis1}</p>
        <p className="mt-8 text-primary">{data?.popis2}</p>
        {(language === "sk" || language === "cz") && (
          <>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fpergolas_sk.png?alt=media&token=614a0323-dc46-481e-8075-0809668e7a13"
              alt="hlavna_fotka"
              height={800}
              width={1500}
              quality={100}
              priority={true}
              className="w-full h-[600px] md:h-full max-h-[800px] object-cover hidden md:block"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fpergolas_sk_m.png?alt=media&token=953dc4d7-f8d2-4d79-a19a-c9033f5811b4"
              alt="hlavna_fotka"
              height={900}
              width={900}
              quality={100}
              priority={true}
              className="w-full object-cover  md:hidden mt-16 mb-16"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </>
        )}
        {language === "en" && (
          <>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fpergolas_eng.png?alt=media&token=ab1c4fb6-7275-44c7-8e07-3bfd75928110"
              alt="hlavna_fotka"
              height={800}
              width={1500}
              quality={100}
              priority={true}
              className="w-full h-[600px] md:h-full max-h-[800px] object-cover hidden md:block"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fpergolas_eng_m.png?alt=media&token=2f5b7640-7983-4513-a21b-3f7f936de612"
              alt="hlavna_fotka"
              height={900}
              width={900}
              quality={100}
              priority={true}
              className="w-full object-cover  md:hidden mt-16 mb-16"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </>
        )}

        <p className="text-primary text-center">{data?.popis_porovnanie}</p>
      </div>
      <div className="relative">
        <button className="btn btn--secondary  uppercase absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
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
          blurDataURL={BLUR_DATA_URL_GRAY}
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
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_GRAY}
      />
      <div className="main_section hidden md:block">
        <p className="text-primary">{data?.next_popis4} </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 xl:gap-16 justify-center">
          <button className="btn btn--fourthtiary uppercase">
            Timbermax Exotic
          </button>
          <button className="btn btn--secondary border border-black uppercase">
            Timbermax Rustic
          </button>
        </div>
        <p className="text-primary pt-16 2xl:pt-32 !-mb-8 2xl:!-mb-16">
          {data?.pod_btn}
        </p>
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
        {language === "sk" && (
          <>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_sk.png?alt=media&token=114fcb73-879d-48c2-810f-a91251dacec8"
              alt="hlavna_fotka"
              height={900}
              width={1920}
              quality={100}
              priority
              className="w-full h-full object-cover hidden md:block "
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_sk_m.png?alt=media&token=4c14466e-f4a4-40e4-815b-cbc077956215"
              alt="hlavna_fotka"
              height={900}
              width={800}
              quality={100}
              priority
              className="w-full h-full object-cover md:hidden mt-16 mb-16"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </>
        )}
        {language === "cz" && (
          <>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_cz.png?alt=media&token=2baa3942-b4c1-43e6-b9b4-4c38913dca69"
              alt="hlavna_fotka"
              height={900}
              width={1920}
              quality={100}
              priority
              className="w-full h-full object-cover hidden md:block "
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_cz_m.png?alt=media&token=ff9f8251-bfa0-4089-bec6-055db5720f3d"
              alt="hlavna_fotka"
              height={900}
              width={800}
              quality={100}
              priority
              className="w-full h-full object-cover md:hidden mt-16 mb-16"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </>
        )}
        {language === "en" && (
          <>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_en.png?alt=media&token=09219d7b-f6ca-4e2b-b029-3d6c19596146"
              alt="hlavna_fotka"
              height={900}
              width={1920}
              quality={100}
              priority
              className="w-full h-full object-cover hidden md:block "
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/languages_photos%2Fwood_en_m.png?alt=media&token=c694f687-6c3b-4537-a2da-5817dc16072a"
              alt="hlavna_fotka"
              height={900}
              width={800}
              quality={100}
              priority
              className="w-full h-full object-cover md:hidden mt-16 mb-16"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </>
        )}
        <p className="text-primary">{data?.another_popis2}</p>
        <h3 className="mt-8 2xl:mt-16 text-primary font-bold">
          {data?.lahko_nadpis}
        </h3>{" "}
        <p className="mt-4 text-primary">{data?.lahko_popis}</p>
        <h3 className="mt-8 2xl:mt-16 text-primary font-bold">
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
        <h3 className="mt-4 2xl:mt-16 text-primary font-bold pb-4">
          {data?.tepel_nadpis}
        </h3>{" "}
        <p className="text-primary mt-4 ">{data?.tepel_popis}</p>
        <h3 className="mt-8  2xl:mt-16 text-primary font-bold  pb-4">
          {data?.prehrev_nadpis}
        </h3>{" "}
        <p className="text-primary">{data?.prehrev_popis1}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis2}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis2}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis3}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis4}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis5}</p>
        <p className="text-primary mt-8">{data?.prehrev_popis6}</p>
        <h3 className="mt-8 2xl:mt-16 text-primary font-bold  pb-4">
          {data?.mech_nadpis}
        </h3>{" "}
        <p className="text-primary mt-4">{data?.mech_popis}</p>
        <h3 className="mt-8 2xl:mt-16 text-primary font-bold  pb-4">
          {data?.tvar_nadpis}
        </h3>{" "}
        <p className="text-primary mt-4">{data?.tvar_popis1}</p>
        <p className="text-primary mt-8">{data?.tvar_popis2}</p>
        <p className="text-primary mt-8">{data?.tvar_popis3}</p>
        <p className="text-primary mt-8">{data?.tvar_popis4}</p>
        <p className="text-primary mt-8">{data?.tvar_popis5}</p>
        <p className="text-primary mt-8">{data?.tvar_popis6}</p>
        <h3 className="mt-8 2xl:mt-16 text-primary font-bold  pb-4">
          {data?.profil_nadpis}
        </h3>{" "}
        <Image
          src={"/profil.png"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority
          className="w-full h-full object-cover md:max-w-[90%] m-auto "
        />
        <p className="text-primary mt-8">{data?.profil_popis1}</p>
        <p className="text-primary mt-8">{data?.profil_popis2}</p>
        <p className="text-primary mt-8">{data?.profil_popis3}</p>
        <p className="text-primary mt-8 mb-8 2xl:mb-32">
          {data?.profil_popis4}
        </p>
        <Image
          src={"/tabulka.png"}
          alt="hlavna_fotka"
          height={900}
          width={1920}
          quality={100}
          priority
          className="w-full h-full object-cover mt-8 md:max-w-[90%] m-auto"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />
        <h3 className="mt-8 2xl:mt-16 text-primary custom-underline">
          {data?.nadpis_vizualizacia}
        </h3>{" "}
        <p className="text-primary mt-8">{data?.popis_viz_1}</p>
      </div>
    </div>
  );
};

export default MoreAboutWholePage;
