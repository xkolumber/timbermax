"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { doRevalidate } from "../lib/actions";
import { NavbarItem } from "../lib/interface";
import useLanguageStore from "../zustand/store";
import IconCalculate from "./Icons/IconCalculate";
import IconEmail from "./Icons/IconEmail";
import IconFacebook from "./Icons/IconFacebook";
import IconHamburger from "./Icons/IconHamburger";
import IconInstagram from "./Icons/IconInstagram";
import IconNavbarArrow from "./Icons/IconNavbarArrow";
import IconNavbarCloseButton from "./Icons/IconNavbarCloseButton";
import IconTelephone from "./Icons/IconTelephone";
import { navbar_languages, navbar_sk, navbars } from "./JustNavbarData";

const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [closeClicked, setCloseClicked] = useState(false);
  const [showNavbarPart, setShowNavbarPart] = useState(true);
  const [clickedIndexMobile, setClickedIndexMobile] = useState(-1);
  const pathname = usePathname();
  const router = useRouter();
  const [navbarData, setNavbarData] = useState<NavbarItem[]>(navbar_sk);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showLanguagesMobile, setShowLanguagesMobile] = useState(false);

  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleLanguageChange = async (lang: string) => {
    setLanguage(lang);
    setCloseClicked(false);
    setShowLanguages(false);
    setShowLanguagesMobile(false);
    await doRevalidate(pathname);
  };

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [hoveredItemTerasa, setHoveredItemTerasa] = useState(-1);

  useEffect(() => {
    if (hoveredIndex != -1) {
      setClickedIndex(hoveredIndex);
    }
    if (clickedIndex > 2 && hoveredIndex == -1) {
      setClickedIndex(-1);
    }
  }, [hoveredIndex, clickedIndex]);

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

  const handleClickedItemMobile = (item_number: number) => {
    if (item_number != clickedIndexMobile) {
      setClickedIndexMobile(item_number);
    } else {
      setClickedIndexMobile(-1);
    }
  };

  useEffect(() => {
    setNavbarData(navbars[language] || navbar_sk);
  }, [language]);

  useEffect(() => {
    if (showLanguages && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [showLanguages]);

  useEffect(() => {
    if (closeClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [closeClicked]);

  return (
    <nav className="w-full relative  flex flex-col navbar ">
      {showLanguages && (
        <div
          className="absolute z-[2000] bg-primary flex-col w-24 hidden md:flex"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left - 9,
          }}
        >
          {navbar_languages
            .filter((lang) => language !== lang)
            .map((lang, index) => (
              <p
                className="px-4 py-2 text-white cursor-pointer hover:text-gray-400 duration-200 uppercase"
                onClick={() => handleLanguageChange(lang)}
                key={index}
              >
                {lang}
              </p>
            ))}
        </div>
      )}
      <div className=" w-full ">
        <div
          className={`navbar-part ${
            showNavbarPart ? "show" : "hide"
          } bg-primary hidden md:block`}
        >
          <div className="navbar_section w-full flex flex-row justify-between relative">
            <div className="flex flex-row gap-6 lg:gap-12 2xl:gap-20">
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
              <Link href={"https://www.facebook.com/Timbermax"}>
                <IconFacebook />
              </Link>
              <Link href={"https://www.instagram.com/timbermax_eu/"}>
                <IconInstagram />
              </Link>
              <div
                className="flex flex-row items-center gap-4 ml-12"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(-1)}
                ref={triggerRef}
              >
                <div
                  className="flex flex-row items-center gap-4 relative cursor-pointer"
                  onClick={() => setShowLanguages((prevState) => !prevState)}
                >
                  <p className="leading-none  uppercase">{language}</p>
                  <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-[#233027] duration-300 ${
            showNavbarPart ? "opacity-95" : "opacity-100"
          } ${clickedIndex != -1 && "!opacity-95"} `}
        >
          <div
            className={` flex flex-row  justify-between navbar_section  2xl:h-[100px]`}
          >
            <Link href="/" className="w-[130px] md:w-[150px] 2xl:w-[200px] ">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={100}
                height={10}
                priority={true}
                quality={100}
                className="w-[130px] md:w-[150px] 2xl:w-[200px]   object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6 items-center">
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

            <div className="hidden xl:flex flex-row gap-12 2xl:gap-24 items-center">
              {navbarData.map((object, index) => (
                <div className="flex flex-row items-center gap-2" key={index}>
                  <Link
                    className={`uppercase  cursor-pointer  duration-200  ${
                      pathname === object.link && "!font-semibold"
                    } ${index === clickedIndex && "!font-semibold"}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    href={object.link ? object.link : ""}
                  >
                    {object.nazov}
                  </Link>
                  {object.id != "3" && object.id != "4" && object.id != "5" && (
                    <IconNavbarArrow
                      index={index}
                      hoveredIndex={clickedIndex}
                    />
                  )}
                </div>
              ))}
              <IconCalculate />
            </div>
          </div>
        </div>

        <div
          className={`collapsible--expanded ${
            closeClicked ? "collapsible--collapsed" : ""
          }  `}
        >
          <div className="bg-primary flex flex-row justify-between navbar_section w-full !m-0 opacity-85 items-center">
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={100}
                height={10}
                priority={true}
                quality={100}
                className="w-[130px] md:w-[150px]   object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6 items-center">
              {" "}
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => clickedButtonClose()}
              >
                <IconNavbarCloseButton />
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
            <div
              className="flex flex-row items-center gap-2 justify-center"
              onClick={() => handleClickedItemMobile(0)}
            >
              <p
                className={`nav__item uppercase  cursor-pointer ${
                  clickedIndexMobile === 0 && "!font-normal"
                }`}
              >
                {navbarData[0].nazov}
              </p>
              <IconNavbarArrow index={0} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 0 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {navbarData[clickedIndexMobile].sekcie!.map((object, index) => (
                  <Link
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                    href={object.link}
                    onClick={() => setCloseClicked(false)}
                  >
                    {object.nazov}
                  </Link>
                ))}
              </div>
            )}

            <div
              className="flex flex-row items-center gap-2 justify-center"
              onClick={() => handleClickedItemMobile(1)}
            >
              <p
                className={`nav__item uppercase  cursor-pointer ${
                  clickedIndexMobile === 1 && "!font-normal"
                }`}
              >
                {navbarData[1].nazov}
              </p>
              <IconNavbarArrow index={1} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 1 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {navbarData[clickedIndexMobile].sekcie!.map((object, index) => (
                  <Link
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                    href={object.link}
                    onClick={() => setCloseClicked(false)}
                  >
                    {object.nazov}
                  </Link>
                ))}
              </div>
            )}
            <div
              className="flex flex-row items-center gap-2 justify-center"
              onClick={() => handleClickedItemMobile(2)}
            >
              <p
                className={`nav__item uppercase  cursor-pointer ${
                  clickedIndexMobile === 2 && "!font-normal"
                }`}
              >
                {navbarData[2].nazov}
              </p>
              <IconNavbarArrow index={2} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 2 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {navbarData[clickedIndexMobile].sekcie!.map((object, index) => (
                  <Link
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                    href={object.link}
                    onClick={() => setCloseClicked(false)}
                  >
                    {object.nazov}
                  </Link>
                ))}
              </div>
            )}

            <Link
              className="nav__item"
              href={"/cennik"}
              onClick={() => setCloseClicked(false)}
            >
              {navbarData[3].nazov}
            </Link>
            <Link
              className="nav__item"
              href={"/galeria"}
              onClick={() => setCloseClicked(false)}
            >
              {navbarData[4].nazov}
            </Link>
            <Link
              className="nav__item"
              href={"/kontakt"}
              onClick={() => setCloseClicked(false)}
            >
              {navbarData[5].nazov}
            </Link>

            <div className="flex flex-col bg-primary w-full justify-center gap-4 pt-4 pb-4">
              <div className="flex flex-row gap-16 justify-center items-center pt-6 pb-6">
                <div className="flex flex-row gap-4 items-center">
                  {" "}
                  <IconTelephone />
                  <p className="font-extralight text-[8px]">+421 918 475 563</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  {" "}
                  <IconEmail />
                  <p className="font-extralight text-[8px]">
                    info@timbermax.sk
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-center justify-center scale-75">
                <Link href={"https://www.facebook.com/Timbermax"}>
                  <IconFacebook />
                </Link>
                <Link href={"https://www.instagram.com/timbermax_eu/"}>
                  <IconInstagram />
                </Link>
              </div>
              <div
                className="flex flex-col items-center gap-4 justify-center relative pt-2"
                onMouseEnter={() => setHoveredIndex(8)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <div
                  className="flex flex-row items-center gap-4 relative cursor-pointer"
                  onClick={() =>
                    setShowLanguagesMobile((prevState) => !prevState)
                  }
                >
                  <p className="leading-none  uppercase">{language}</p>

                  <IconNavbarArrow index={8} hoveredIndex={hoveredIndex} />
                </div>
                {showLanguagesMobile && (
                  <div className="z-[2000] bg-primary flex-col w-24 flex bottom-0">
                    {navbar_languages
                      .filter((lang) => language !== lang)
                      .map((lang, index) => (
                        <p
                          className="px-4 py-2 text-white cursor-pointer hover:text-gray-400 duration-200 uppercase"
                          onClick={() => handleLanguageChange(lang)}
                          key={index}
                        >
                          {lang}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Clicked items */}

      {clickedIndex === 0 && (
        <div
          className={`h-[100px]  ${
            pathname != "/" ? "navbar_roller_color_full" : "navbar_roller_color"
          }  flex justify-center w-full`}
          onMouseLeave={() => setClickedIndex(-1)}
        >
          <div className="flex flex-row max-w-[1100px] justify-between m-auto w-full">
            {navbarData[clickedIndex].sekcie!.map((object, index) => (
              <Link
                className="uppercase hover:underline  duration-300 cursor-pointer"
                key={index}
                href={object.link}
              >
                {object.nazov}
              </Link>
            ))}
          </div>
        </div>
      )}

      {clickedIndex === 1 && (
        <div
          className={`h-[150px] ${
            pathname != "/" ? "navbar_roller_color_full" : "navbar_roller_color"
          }  flex justify-center w-full`}
          onMouseLeave={() => setClickedIndex(-1)}
        >
          <div className="grid grid-cols-6 max-w-[1300px] justify-between m-auto w-full h-full ">
            {navbarData[clickedIndex].sekcie!.map((object, index) => (
              <Link
                className={`flex items-center flex-col justify-center  gap-4 ${
                  pathname != "/" ? "hover:bg-[#576137]" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredItemTerasa(index)}
                onMouseLeave={() => setHoveredItemTerasa(-1)}
                href={object.link}
              >
                <div
                  className={`w-24 h-24 ${
                    hoveredItemTerasa === index ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {object.icon}
                </div>
                <p
                  className={`${
                    hoveredItemTerasa === index && "font-medium"
                  }  duration-150`}
                >
                  {object.nazov}
                </p>
              </Link>
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
            {navbarData[clickedIndex].sekcie!.map((object, index) => (
              <Link
                className="uppercase hover:underline  duration-300 cursor-pointer"
                key={index}
                href={object.link}
              >
                {object.nazov}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
