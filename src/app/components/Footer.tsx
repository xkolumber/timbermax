"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import IconFacebook from "./Icons/IconFacebook";
import IconInstagram from "./Icons/IconInstagram";
import { FooterItem } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import { footer_sk, footers } from "./JustFooderData";

const Footer = () => {
  const { language } = useLanguageStore();

  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [footerData, setFooterData] = useState<FooterItem[]>(footer_sk);

  const [closeClicked, setCloseClicked] = useState(false);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleItemClick = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  useEffect(() => {
    setFooterData(footers[language] || footer_sk);
  }, [language]);

  return (
    <footer className="w-full relative  flex flex-col footer ">
      <div className=" w-full ">
        <div className="bg-primary ">
          <div
            className={` flex flex-col md:flex-row  justify-between navbar_section !pt-8 !pb-8 md:!pt-16 md:!pb-16`}
          >
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={1000}
                height={1000}
                className="w-[130px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="flex flex-col md:flex-row gap-12  mt-8">
              <div className="flex flex-col">
                <p className="uppercase  cursor-pointer">
                  {footerData[0].sidlo}
                </p>
                <p>Newface, s.r.o.</p>
                <p>Račianska 88 B, 831 02,</p>
                <p>Nové Mesto, Bratislava</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">
                  {footerData[0].sklad}
                </p>
                <p>{footerData[0].vzorkova_predajna}</p>
                <p>Senecká cesta 2, 931 01,</p>
                <p>Šamorín</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">
                  {footerData[0].kontakt}
                </p>
                <p>info@timbermax.sk</p>
                <p>+421 918 475 563</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">
                  {footerData[0].social}
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <IconFacebook />
                  <IconInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary opacity-95">
          <div className="navbar_section w-full flex flex-col md:flex-row justify-between gap-4">
            <p>Copyright © 2023 - Newface, s.r.o, All Right Reserved</p>
            <p>Designed by RoyalBuild</p>
            <a href="tel:+421918654146">
              {" "}
              <p>Developed by Kolumber</p>
            </a>

            <p>{footerData[0].ochrana}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
