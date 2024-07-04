"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import IconHamburger from "./icons/IconHamburger";
import IconTelephone from "./icons/IconTelephone";
import IconEmail from "./icons/IconEmail";
import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";
import IconNavbarArrow from "./icons/IconNavbarArrow";
import IconCalculate from "./icons/IconCalculate";

const Navbar = () => {
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
    <nav className="w-full relative  flex flex-col navbar ">
      <div className=" w-full ">
        <div className="bg-primary">
          <div className="navbar_section w-full flex flex-row justify-between">
            <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-4 items-center">
                {" "}
                <IconTelephone />
                <p>+421 918 475 563</p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                {" "}
                <IconEmail />
                <p>info@timbermax.sk</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <IconFacebook />
              <IconInstagram />
              <div className="flex flex-row items-center gap-4">
                <p className="pl-12">SK</p>
                <IconNavbarArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary opacity-85">
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
              <p className="uppercase  cursor-pointer">Firma</p>
              <p className="uppercase   cursor-pointer">Služby</p>
              <p className="uppercase cursor-pointer">Produkty</p>
              <p className="uppercase   cursor-pointer">Cenník</p>
            </div>
            <div className="flex flex-row items-center gap-12">
              {" "}
              <p className="uppercase   cursor-pointer">Kontakt</p>
              <IconCalculate />
            </div>
          </div>
        </div>
      </div>
      {closeClicked && <div className="behind_card_background"></div>}
      <div
        className={`collapsible--expanded ${
          closeClicked ? "collapsible--collapsed" : ""
        }  `}
      >
        <span className="nav__item">
          <div
            className={`icon icon--white nav__close-button `}
            onClick={() => clickedButtonClose()}
          >
            <IconHamburger />
          </div>
        </span>
        <p
          className={`nav__item ${
            expandedItem === "o_nas" ? "!underline !font-semibold" : ""
          }`}
          onClick={() => handleItemClick("o_nas")}
        >
          O nás
        </p>
        <div
          className={`sub-menu ${
            expandedItem === "o_nas" ? "sub-menu--expanded" : ""
          }`}
        >
          <div className="flex flex-col"></div>
        </div>
        <p
          className={`nav__item ${
            expandedItem === "elektroinstalacie"
              ? "!underline !font-semibold"
              : ""
          }`}
          onClick={() => handleItemClick("elektroinstalacie")}
        >
          Elektroinštalácie
        </p>
        <div
          className={`sub-menu ${
            expandedItem === "elektroinstalacie" ? "sub-menu--expanded" : ""
          }`}
        >
          <div className="flex flex-col"></div>
        </div>

        <Link className="nav__item" href={"/cenova-ponuka"}>
          Cenová ponuka
        </Link>
        <Link
          className="btn btn--primary !mr-4"
          href={"https://www.fstavenergy.sk"}
        >
          Eshop
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
