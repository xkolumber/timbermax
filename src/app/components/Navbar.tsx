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
import IconTerasa from "./Icons/IconTerasa";
import IconFasady from "./Icons/IconFasady";
import IconBazeny from "./Icons/IconBazeny";
import IconSlnolamy from "./Icons/IconSlnolamy";
import IconPloty from "./Icons/IconPloty";
import IconOstatne from "./Icons/IconOstatne";
import useLanguageStore from "../zustand/store";
import { doRevalidate } from "../lib/actions";

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
    link: "/o-nas",
  },
  {
    title: "Viac o Timbermaxe",
    link: "/viac-o-timbermaxe",
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
  const { language, setLanguage } = useLanguageStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [closeClicked, setCloseClicked] = useState(false);
  const [showNavbarPart, setShowNavbarPart] = useState(true);
  const [clickedIndexMobile, setClickedIndexMobile] = useState(-1);
  const pathname = usePathname();
  const router = useRouter();

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  const handleLanguageChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
    await doRevalidate(pathname);
  };

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(hoveredIndex);
  const [hoveredItemTerasa, setHoveredItemTerasa] = useState(-1);

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

  const handleClickedItemMobile = (item_number: number) => {
    if (item_number != clickedIndexMobile) {
      setClickedIndexMobile(item_number);
    } else {
      setClickedIndexMobile(-1);
    }
  };

  const handleClickedCompanyObject = (link_: string) => {
    if (link_ === "/o-nas") {
      router.push("/o-nas");
    }
    if (link_ === "/viac-o-timbermaxe") {
      router.push("/viac-o-timbermaxe");
    }
  };

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
                height={0}
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
                <Link
                  className={`uppercase  cursor-pointer text-white font-light ${
                    clickedIndex === 1 && "font-normal"
                  }`}
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  href={"/sluzby"}
                >
                  Služby
                </Link>
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

              <Link
                className="uppercase text-white  cursor-pointer hover:font-normal"
                onMouseEnter={() => setClickedIndex(-1)}
                href={"/cennik"}
              >
                Cenník
              </Link>
              <div className="flex flex-row items-center gap-12">
                {" "}
                <p
                  className="uppercase   cursor-pointer hover:font-normal"
                  onMouseEnter={() => setClickedIndex(-1)}
                >
                  Kontakt
                </p>
                <IconCalculate />
              </div>
            </div>
          </div>
        </div>

        {/*Mobile */}
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
                Firma
              </p>
              <IconNavbarArrow index={0} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 0 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {company.map((object, index) => (
                  <p
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                    onClick={() => handleClickedCompanyObject(object.link)}
                  >
                    {object.title}
                  </p>
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
                Služby
              </p>
              <IconNavbarArrow index={1} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 1 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {services.map((object, index) => (
                  <p
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                  >
                    {object.title}
                  </p>
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
                Produkty
              </p>
              <IconNavbarArrow index={2} hoveredIndex={clickedIndexMobile} />
            </div>
            {clickedIndexMobile === 2 && (
              <div className="flex flex-col max-w-[1100px] justify-between m-auto w-full navbar_roller_color gap-2">
                {products.map((object, index) => (
                  <p
                    className="uppercase hover:underline  duration-300 cursor-pointer text-center font-extralight"
                    key={index}
                  >
                    {object.title}
                  </p>
                ))}
              </div>
            )}

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
              <p className="pl-12 font-extralight"></p>
              {/* <label id="cars">Choose a car:</label> */}
              <select name="cars" id="cars">
                <option value="sk">SK</option>
                <option value="cz">CZ</option>
                <option value="en">EN</option>
              </select>
              <IconNavbarArrow index={3} hoveredIndex={hoveredIndex} />
            </div>
          </div>
        </div>
        {/*Clicked items */}
        {clickedIndex === 0 && (
          <div
            className={`h-[100px]  ${
              pathname != "/"
                ? "navbar_roller_color_full"
                : "navbar_roller_color"
            }  flex justify-center w-full`}
            onMouseLeave={() => setClickedIndex(-1)}
          >
            <div className="flex flex-row max-w-[1100px] justify-between m-auto w-full">
              {company.map((object, index) => (
                <p
                  className="uppercase hover:underline  duration-300 cursor-pointer"
                  key={index}
                  onClick={() => handleClickedCompanyObject(object.link)}
                >
                  {object.title}
                </p>
              ))}
            </div>
          </div>
        )}
        {clickedIndex === 1 && (
          <div
            className={`h-[150px] ${
              pathname != "/"
                ? "navbar_roller_color_full"
                : "navbar_roller_color"
            }  flex justify-center w-full`}
            onMouseLeave={() => setClickedIndex(-1)}
          >
            <div className="grid grid-cols-6 max-w-[1300px] justify-between m-auto w-full h-full ">
              {services.map((one_service, index) => (
                <div
                  className={`flex items-center flex-col justify-center  gap-4 ${
                    pathname != "/" ? "hover:bg-[#576137]" : ""
                  }`}
                  key={index}
                  onMouseEnter={() => setHoveredItemTerasa(index)}
                  onMouseLeave={() => setHoveredItemTerasa(-1)}
                >
                  <div
                    className={`w-24 h-24 ${
                      hoveredItemTerasa === index ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {one_service.icon}
                  </div>
                  <p
                    className={`${
                      hoveredItemTerasa === index && "font-medium"
                    }  duration-150`}
                  >
                    {one_service.title}
                  </p>
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
