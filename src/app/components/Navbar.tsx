"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import IconHamburger from "./Icons/IconHamburger";
import IconTelephone from "./Icons/IconTelephone";
import IconEmail from "./Icons/IconEmail";
import IconFacebook from "./Icons/IconFacebook";
import IconInstagram from "./Icons/IconInstagram";
import IconNavbarArrow from "./Icons/IconNavbarArrow";
import IconCalculate from "./Icons/IconCalculate";
import useLanguageStore from "../zustand/store";
import { doRevalidate } from "../lib/actions";
import { navbar_sk, navbars } from "./JustNavbarData";
import { NavbarItem } from "../lib/interface";
import { createSlug } from "../lib/functionsClient";

const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [closeClicked, setCloseClicked] = useState(false);
  const [showNavbarPart, setShowNavbarPart] = useState(true);
  const [clickedIndexMobile, setClickedIndexMobile] = useState(-1);
  const pathname = usePathname();
  const router = useRouter();
  const [navbarData, setNavbarData] = useState<NavbarItem[]>(navbar_sk);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleLanguageChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
    setCloseClicked(false);
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
      console.log("neklikatelne");
      console.log(hoveredIndex);
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
                {/* <p className="pl-12">SK</p> */}
                <select
                  name="languages"
                  id="languages"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="sk">SK</option>
                  <option value="cz">CZ</option>
                  <option value="en">EN</option>
                </select>
                {/* <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} /> */}
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
            <Link href="/" className="w-[130px] md:w-[150px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={100}
                height={10}
                priority={true}
                quality={100}
                className="w-[130px] md:w-[150px] 2xl:w-[300px]   object-contain"
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
          <div className="bg-primary flex flex-row justify-between navbar_section w-full !m-0 opacity-85">
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
                <p className="pl-12 font-extralight"></p>
                <select
                  name="languages"
                  id="languages"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="sk"> SK</option>
                  <option value="cz">CZ</option>
                  <option value="en">EN</option>
                </select>
                <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} />
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
      {/* {closeClicked && <div className="behind_card_background"></div>} */}
    </nav>
  );
};

export default Navbar;
