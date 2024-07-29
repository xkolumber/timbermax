"use client";
import { Terasy } from "@/app/lib/interface";

import Image from "next/image";

import IconServiceFeatures from "../Icons/IconServiceFeatures";
import IconServiceInstallation from "../Icons/IconServiceInstallation";
import IconServiceOrder from "../Icons/IconServiceOrder";
import IconServiceProfile from "../Icons/IconServiceProfile";
import IconServiceVariants from "../Icons/IconServiceVariants";
import ServiceGallery from "./ServiceGallery";
import { useState } from "react";
import { colors } from "@/app/lib/functionsClient";
import Link from "next/link";

const projects = [
  {
    title: "Projekt Brno",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Krahulčia",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Bodnár",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt SkyPark",
    photo: "/main_picture.png",
  },
];

const icon_text = [
  {
    icon: <IconServiceVariants />,
    text: "Farebné varianty",
  },
  {
    icon: <IconServiceFeatures />,
    text: "Vlastnosti",
  },
  {
    icon: <IconServiceInstallation />,
    text: "Montáž",
  },
  {
    icon: <IconServiceProfile />,
    text: "Profily",
  },
  {
    icon: <IconServiceOrder />,
    text: "Postup objednania",
  },
];

interface Props {
  data: Terasy | undefined;
}

const TerasyPage = ({ data }: Props) => {
  const [variantClicked, setVariantClicked] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(-1);
  return (
    <main>
      <div className="bg-secondary">
        <div className="main_section additional_padding">
          <h4 className="text-tertiary">{data?.nadpis}</h4>
          <p className="text-tertiary">{data?.popis1}</p>
        </div>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
        />

        <div className="main_section ">
          <p className="text-primary">{data?.popis2}</p>
          <div className="flex flex-col mt-8">
            {data?.vlastnosti.map((object, index) => (
              <p className="text-primary" key={index}>
                {object}
              </p>
            ))}
          </div>

          <h4 className="text-tertiary">{data?.nadpis_galeria}</h4>
        </div>
      </div>
      <ServiceGallery />

      <div className="bg-secondary">
        <div className="main_section">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_informacie}</h4>
          <p className="text-tertiary">{data?.popis_informacie_1}</p>
        </div>
        <div className="navbar_section">
          <div className="grid grid-cols-5">
            {icon_text.map((object, index) => (
              <div
                className={`flex flex-col hover:border-[1.4px] ${
                  variantClicked === index && "!border-[#1D281F] border"
                } hover:border-[#1D281F] rounded-[8px] justify-center items-center gap-6 p-4 cursor-pointer`}
                key={index}
                onClick={() => setVariantClicked(index)}
              >
                <div className="w-32 full pt-8">{object.icon}</div>
                <p className="uppercase text-[#1D281F]">
                  {data?.info_variants[index] != ""
                    ? data?.info_variants[index]
                    : object.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {variantClicked === 0 && (
          <div className="">
            <div className="main_section">
              <p className="text-tertiary">{data?.fareb_var_popis1}</p>
            </div>
            <div className="flex flex-wrap gap-6 color_section">
              {colors.map((color, index) => (
                <div
                  className="relative cursor-pointer"
                  key={index}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(-1)}
                >
                  <Image
                    src={color.farba}
                    alt="hlavna_fotka"
                    height={300}
                    width={160}
                    quality={100}
                    priority={true}
                    className="w-[160px] h-[300px] object-cover"
                  />
                  <p
                    className={`uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 bottom-0 duration-300 ${
                      hoveredImage === index ? "block" : "hidden"
                    }`}
                  >
                    {color.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="main_section">
              {" "}
              <p className="text-tertiary">{data?.fareb_var_popis2}</p>
            </div>
          </div>
        )}

        {variantClicked === 1 && (
          <div className="">
            <div className="main_section">
              <p className="text-tertiary">{data?.vlastnosti_popis1}</p>
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis2}</p>
            </div>
            <Image
              src={"/terasa.jpg"}
              alt="hlavna_fotka"
              height={1000}
              width={1000}
              quality={100}
              priority={true}
              className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
            />
            <div className="main_section">
              <p className="text-tertiary">{data?.vlastnosti_popis3}</p>
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis4}</p>
            </div>
            <Image
              src={"/terasa.jpg"}
              alt="hlavna_fotka"
              height={300}
              width={1000}
              quality={100}
              priority={true}
              className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
            />
            <div className="main_section">
              <h5 className="text-tertiary">{data?.vlastnosti_nadpis_}</h5>
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis5}</p>
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis6}</p>
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis7}</p>
            </div>
            <Image
              src={"/terasa.jpg"}
              alt="hlavna_fotka"
              height={1000}
              width={1000}
              quality={100}
              priority={true}
              className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
            />
            <div className="main_section">
              <p className="text-tertiary mt-8">{data?.vlastnosti_popis8}</p>
              <div className="flex justify-between">
                <Link className="btn btn--primary" href={`/viac-o-timbermaxe`}>
                  {data?.vlastnosti_btn_viac}
                </Link>
                <Link className="btn btn--primary" href={`/viac-o-timbermaxe`}>
                  {data?.vlastnosti_btn_konkurencia}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {variantClicked === 2 && (
        <div className="">
          <div className="main_section">
            <h5 className="text-tertiary">{data?.montaz_nadpis}</h5>
            <p className="text-tertiary mt-8">{data?.montaz_popis1}</p>
            <p className="text-tertiary mt-8">{data?.montaz_popis2}</p>
            <p className="text-tertiary mt-8">{data?.montaz_popis3}</p>
          </div>
          <Image
            src={"/terasa.jpg"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
          />
          <div className="main_section">
            <p className="text-tertiary mt-8">{data?.montaz_popis4}</p>
          </div>
          <Image
            src={"/terasa.jpg"}
            alt="hlavna_fotka"
            height={300}
            width={1000}
            quality={100}
            priority={true}
            className="w-full h-[300px] md:h-full max-h-[400px] object-cover"
          />
          <div className="main_section">
            <p className="text-tertiary mt-8">{data?.montaz_nadpis_2}</p>
          </div>
        </div>
      )}

      <div className="bg-secondary">
        <main className="main_section">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_vizualizacia}</h4>
          <p className="text-tertiary">{data?.popis_viz_1}</p>
        </main>
      </div>
      <Image
        src={"/terasa.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
      />
    </main>
  );
};

export default TerasyPage;
