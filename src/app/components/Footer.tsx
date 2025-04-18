"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cloudfront_url } from "../lib/functionsClient";
import { FooterItem } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import IconFacebook from "./Icons/IconFacebook";
import IconInstagram from "./Icons/IconInstagram";
import IconScrollButton from "./Icons/IconScrollButton";
import { footer_sk, footers } from "./JustFooderData";

const Footer = () => {
  const { language } = useLanguageStore();
  const [footerData, setFooterData] = useState<FooterItem[]>(footer_sk);

  useEffect(() => {
    setFooterData(footers[language] || footer_sk);
  }, [language]);

  const actual_year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer
      className={`w-full relative  flex flex-col footer ${
        pathname.startsWith("/admin") && "!hidden"
      }`}
    >
      <div className="absolute right-12 md:right-24 top-0 cursor-pointer z-[300]">
        <IconScrollButton />
      </div>
      <div className=" w-full ">
        <div className="bg-primary ">
          <div
            className={`  flex flex-col md:flex-row  md:justify-between navbar_section !pt-8 !pb-8 md:!pt-16 md:!pb-16`}
          >
            <Link
              href="/"
              className="flex items-center md:items-start justify-center"
            >
              <Image
                src={`${cloudfront_url}/neutral/logo.svg`}
                alt="logo"
                width={500}
                height={150}
                priority={true}
                className="w-[220px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start  mt-24 md:mt-8 md:w-[80%] xl:w-[70%] 2xl:w-[60%] justify-between">
              <div className="footer_elements">
                <p className="uppercase font-medium  pb-2">
                  {footerData[0].sidlo}
                </p>
                <p>Newface, s.r.o.</p>
                <p>Račianska 88 B, 831 02,</p>
                <p>Nové Mesto, Bratislava</p>
              </div>

              <div className="footer_elements ">
                <p className="uppercase font-medium  pb-2">
                  {footerData[0].sklad}
                </p>
                <p>{footerData[0].vzorkova_predajna}</p>
                <p>Senecká cesta 2, 931 01,</p>
                <p>Šamorín</p>
              </div>

              <div className="footer_elements">
                <p className="uppercase font-medium   pb-2">
                  {footerData[0].kontakt}
                </p>
                <a href="mailto:info@timbermax.sk?subject=Otázka">
                  <p>info@timbermax.sk</p>
                </a>
                <a href="tel:+421918475563">
                  <p>+421 918 475 563</p>{" "}
                </a>
              </div>

              <div className="footer_elements pb-16 md:pb-0">
                <p className="uppercase   cursor-pointer">
                  {footerData[0].social}
                </p>
                <div className="flex flex-row gap-4 items-center pt-4">
                  <Link href={"https://www.facebook.com/Timbermax"}>
                    <IconFacebook />
                  </Link>
                  <Link href={"https://www.instagram.com/timbermax_eu/"}>
                    {" "}
                    <IconInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary opacity-95">
          <div className="navbar_section w-full flex flex-col md:flex-row justify-between gap-4 copyright !pt-8 !pb-8">
            <p className="text-center">
              Copyright © {actual_year} - Newface, s.r.o, All Right Reserved
            </p>
            <p className="text-center">Designed by RoyalBuild</p>
            <a href="tel:+421918654146">
              {" "}
              <p>Developed by Kolumber</p>
            </a>

            <p className="text-center">{footerData[0].ochrana}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
