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
import IconTerasa from "./icons/IconTerasa";
import IconFasady from "./icons/IconFasady";
import IconBazeny from "./icons/IconBazeny";
import IconSlnolamy from "./icons/IconSlnolamy";
import IconPloty from "./icons/IconPloty";
import IconOstatne from "./icons/IconOstatne";

const services = [
  {
    icon: <IconTerasa />,
    title: "Terasy",
  },
  {
    icon: <IconFasady />,
    title: "Fasády",
  },
  {
    icon: <IconBazeny />,
    title: "Bazény",
  },
  {
    icon: <IconSlnolamy />,
    title: "Slnolamy",
  },
  {
    icon: <IconPloty />,
    title: "Ploty",
  },
  {
    icon: <IconOstatne />,
    title: "Ostatné",
  },
];

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
  const [hoveredIndex, setHoveredIndex] = useState(-1);

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
              <div
                className="flex flex-row items-center gap-4"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <p className="pl-12">SK</p>
                <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} />
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
              <div className="flex flex-row items-center gap-2">
                <p
                  className="uppercase  cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  Firma
                </p>
                <IconNavbarArrow index={0} hoveredIndex={hoveredIndex} />
              </div>
              <div className="flex flex-row items-center gap-2">
                <p
                  className="uppercase  cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  Služby
                </p>
                <IconNavbarArrow index={1} hoveredIndex={hoveredIndex} />
              </div>
              <div
                className="flex flex-row items-center gap-2"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {" "}
                <p className="uppercase  cursor-pointer">Produkty</p>
                <IconNavbarArrow index={2} hoveredIndex={hoveredIndex} />
              </div>

              <p className="uppercase   cursor-pointer">Cenník</p>
            </div>
            <div className="flex flex-row items-center gap-12">
              {" "}
              <p className="uppercase   cursor-pointer">Kontakt</p>
              <IconCalculate />
            </div>
          </div>
        </div>
        {hoveredIndex === 0 && (
          <div className="h-[100px] navbar_roller_color  flex justify-center w-full">
            <div className="flex flex-row max-w-[1100px] justify-between m-auto w-full">
              <p>O nás</p>
              <p>Viac o Timbermaxe</p>
              <p>Showroom</p>
              <p>Referencie</p>
              <p>Záruka</p>
              <p>Blog</p>
            </div>
          </div>
        )}
        {hoveredIndex === 1 && (
          <div className="h-[150px] navbar_roller_color  flex justify-center w-full">
            <div className="flex flex-row max-w-[1300px] justify-between m-auto w-full">
              {services.map((one_service, index) => (
                <div className="flex items-center flex-col gap-4" key={index}>
                  <div className="w-24 h-24">{one_service.icon}</div>
                  <p>{one_service.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
