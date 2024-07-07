"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";

const Footer = () => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const [closeClicked, setCloseClicked] = useState(false);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleItemClick = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <footer className="w-full relative  flex flex-col footer ">
      <div className=" w-full ">
        <div className="bg-primary ">
          <div className={` flex flex-row  justify-between navbar_section`}>
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={1000}
                height={1000}
                className="w-[130px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="hidden xl:flex flex-row gap-12 items-center">
              <div className="flex flex-col">
                <p className="uppercase  cursor-pointer">Sídlo spoločnosti</p>
                <p>Newface, s.r.o.</p>
                <p>Račianska 88 B, 831 02,</p>
                <p>Nové Mesto, Bratislava</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">Skld a showroom</p>
                <p>Vzorková predajňa</p>
                <p>Senecká cesta 2, 931 01,</p>
                <p>Šamorín</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">Kontakt</p>
                <p>info@timbermax.sk</p>
                <p>+421 918 475 563</p>
              </div>

              <div className="flex flex-col">
                <p className="uppercase   cursor-pointer">Sociálne siete</p>
                <div className="flex flex-row gap-4 items-center">
                  <IconFacebook />
                  <IconInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary opacity-95">
          <div className="navbar_section w-full flex flex-row justify-between">
            <p>Copyright © 2023 - Newface, s.r.o, All Right Reserved</p>
            <p>Designed by RoyalBuild</p>
            <p>Developed by Kolumber</p>
            <p>Ochrana osobných údajov - Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
