"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

const company = [
  {
    title: "O nás",
    link: "/",
  },
  {
    title: "Viac o Timbermaxe",
    link: "/",
  },
  {
    title: "Showroom",
    link: "/",
  },
  {
    title: "Referencie",
    link: "/",
  },
  {
    title: "Záruka",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];

const products = [
  {
    title: "Profily",
    link: "/",
  },
  {
    title: "Farby",
    link: "/",
  },
  {
    title: "Výkresy",
    link: "/",
  },
  {
    title: "Technický list",
    link: "/",
  },
  {
    title: "Brožúra",
    link: "/",
  },
  {
    title: "Certifikáty",
    link: "/",
  },
];

const Navbar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [closeClicked, setCloseClicked] = useState(false);
  const [showNavbarPart, setShowNavbarPart] = useState(true);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleItemClick = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(hoveredIndex);

  useEffect(() => {
    if (hoveredIndex != -1) {
      setClickedIndex(hoveredIndex);
    }
  }, [hoveredIndex]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavbarPart(false);
    } else {
      setShowNavbarPart(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full relative  flex flex-col navbar ">
      <div className=" w-full ">
        <div
          className={`navbar-part ${
            showNavbarPart ? "show" : "hide"
          } bg-primary hidden md:block`}
        >
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

        <div
          className={`bg-[#233027] duration-300  ${
            showNavbarPart ? "opacity-95" : "opacity-100"
          } ${clickedIndex != -1 && "!opacity-95"} `}
        >
          <div className={` flex flex-row  justify-between navbar_section`}>
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-[130px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6">
              {" "}
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => clickedButtonClose()}
              >
                <IconHamburger />
              </div>
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => clickedButtonClose()}
              >
                <IconCalculate />
              </div>
            </div>

            <div className="hidden xl:flex flex-row gap-12 items-center">
              <div className="flex flex-row items-center gap-2">
                <p
                  className={`uppercase  cursor-pointer ${
                    clickedIndex === 0 && "font-normal"
                  }`}
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  Firma
                </p>
                <IconNavbarArrow index={0} hoveredIndex={clickedIndex} />
              </div>
              <div className="flex flex-row items-center gap-2">
                <p
                  className={`uppercase  cursor-pointer ${
                    clickedIndex === 1 && "font-normal"
                  }`}
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  Služby
                </p>
                <IconNavbarArrow index={1} hoveredIndex={clickedIndex} />
              </div>
              <div
                className="flex flex-row items-center gap-2"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {" "}
                <p
                  className={`uppercase  cursor-pointer ${
                    clickedIndex === 2 && "font-normal"
                  }`}
                >
                  Produkty
                </p>
                <IconNavbarArrow index={2} hoveredIndex={clickedIndex} />
              </div>

              <p className="uppercase   cursor-pointer hover: font-normal">
                Cenník
              </p>
              <div className="flex flex-row items-center gap-12">
                {" "}
                <p className="uppercase   cursor-pointer hover:font-normal">
                  Kontakt
                </p>
                <IconCalculate />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`collapsible--expanded ${
            closeClicked ? "collapsible--collapsed" : ""
          }  `}
        >
          <div className="bg-primary flex flex-row justify-between navbar_section w-full !m-0 opacity-85">
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={1000}
                height={1000}
                className="w-[130px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6">
              {" "}
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => clickedButtonClose()}
              >
                <IconHamburger />
              </div>
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => clickedButtonClose()}
              >
                <IconCalculate />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 pb-4">
            <p
              className={`nav__item  ${
                expandedItem === "o_nas" ? "!underline !font-semibold" : ""
              }`}
              onClick={() => handleItemClick("o_nas")}
            >
              Firma
            </p>

            <p
              className={`nav__item  ${
                expandedItem === "elektroinstalacie"
                  ? "!underline !font-semibold"
                  : ""
              }`}
              onClick={() => handleItemClick("elektroinstalacie")}
            >
              Služby
            </p>
            <p
              className={`nav__item  ${
                expandedItem === "elektroinstalacie"
                  ? "!underline !font-semibold"
                  : ""
              }`}
              onClick={() => handleItemClick("elektroinstalacie")}
            >
              Produkty
            </p>

            <Link className="nav__item" href={"/"}>
              Cenník
            </Link>
            <Link className="nav__item" href={"/"}>
              Galéria
            </Link>
            <Link className="nav__item" href={"/"}>
              Kontakt
            </Link>
          </div>
          <div className="flex flex-col bg-primary w-full justify-center gap-4 pt-4 pb-4">
            <div className="flex flex-row gap-6 justify-center items-center">
              <div className="flex flex-row gap-4 items-center">
                {" "}
                <IconTelephone />
                <p className="font-extralight">+421 918 475 563</p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                {" "}
                <IconEmail />
                <p className="font-extralight">info@timbermax.sk</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <IconFacebook />
              <IconInstagram />
            </div>
            <div
              className="flex flex-row items-center gap-4 justify-center"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <p className="pl-12 font-extralight">SK</p>
              <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} />
            </div>
          </div>
        </div>
        {clickedIndex === 0 && (
          <div
            className={`h-[100px]  navbar_roller_color  flex justify-center w-full`}
            onMouseLeave={() => setClickedIndex(-1)}
          >
            <div className="flex flex-row max-w-[1100px] justify-between m-auto w-full">
              {company.map((object, index) => (
                <p
                  className="uppercase hover:underline  duration-300 cursor-pointer"
                  key={index}
                >
                  {object.title}
                </p>
              ))}
            </div>
          </div>
        )}
        {clickedIndex === 1 && (
          <div
            className="h-[150px] navbar_roller_color  flex justify-center w-full"
            onMouseLeave={() => setClickedIndex(-1)}
          >
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
        {clickedIndex === 2 && (
          <div
            className="h-[100px] navbar_roller_color  flex justify-center w-full"
            onMouseLeave={() => setClickedIndex(-1)}
          >
            <div className="flex flex-row max-w-[1300px] justify-between m-auto w-full">
              {products.map((object, index) => (
                <p
                  className="uppercase hover:underline  duration-300 cursor-pointer"
                  key={index}
                >
                  {object.title}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* {closeClicked && <div className="behind_card_background"></div>} */}
    </nav>
  );
};

export default Navbar;
