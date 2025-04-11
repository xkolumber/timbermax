"use client";
import { handleSignOut } from "@/app/lib/awsCofnitoActions";
import { Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";

// interface Props {
//   languages: Jazyk[];
// }

const services_elements = [
  {
    nazov: "Terasy",
    slug: "terasy",
  },
  {
    nazov: "Fasády",
    slug: "fasady",
  },
  {
    nazov: "Bazény",
    slug: "bazeny",
  },
  {
    nazov: "Slnolamy",
    slug: "slnolamy",
  },
  {
    nazov: "Ploty",
    slug: "ploty",
  },
  {
    nazov: "Ostatné",
    slug: "ostatne",
  },
];

const AdminPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);
  const [certainServiceClicked, setCertainServiceClicked] = useState(-1);
  const [certainServiceSlug, setCertainServiceSlug] = useState("");

  const handleServiceClicked = (index: number, slug: string) => {
    setCertainServiceClicked(index);
    setCertainServiceSlug(slug);
  };

  const handleLogout = async () => {
    await handleSignOut();
  };
  return (
    <div className="min-h-screen main_section additional_padding">
      <h2>Admin Zóna</h2>
      {/* <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setIsClicked((prevState) => !prevState)}
          >
            Domov
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/domov/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setIsClicked2((prevState) => !prevState)}
          >
            O nás
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked2 &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/o-nas/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setIsClicked3((prevState) => !prevState)}
          >
            Viac o timbermaxe
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked3 &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/viac-o-timbermaxe/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setIsClicked4((prevState) => !prevState)}
          >
            Cennik
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked4 &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/cennik/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setServicesClicked((prevState) => !prevState)}
          >
            Služby
          </button>
          <div className="flex flex-col w-[150px]">
            {servicesClicked &&
              services_elements.map((service, serviceIndex) => (
                <div
                  className="relative flex flex-row w-full"
                  key={serviceIndex}
                >
                  <div
                    className={`p-4  text-black cursor-pointer hover:bg-gray-300 duration-200 w-[600px] ${
                      service.slug === certainServiceSlug
                        ? "bg-gray-200"
                        : "bg-white"
                    }`}
                    onClick={() =>
                      handleServiceClicked(serviceIndex, service.slug)
                    }
                  >
                    {service.nazov}
                  </div>
                  {certainServiceClicked === serviceIndex &&
                    certainServiceSlug != "fasady" && (
                      <div className="flex flex-col absolute left-[160px]">
                        {languages.map((language, languageIndex) => (
                          <Link
                            className="p-4 bg-white text-black cursor-pointer hover:bg-gray-300 duration-200"
                            key={languageIndex}
                            href={`/admin/${certainServiceSlug}/${language.jazyk}`}
                          >
                            {language.jazyk}
                          </Link>
                        ))}
                      </div>
                    )}

                  {certainServiceSlug === "fasady" && (
                    <div className="flex flex-col absolute left-[160px]">
                      <Link
                        className="p-4 bg-white text-black cursor-pointer hover:bg-gray-300 duration-200"
                        href={`/admin/fasady`}
                      >
                        Fasady
                      </Link>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <Link className=" btn btn--primary max-h-[50px]" href="/admin/galeria">
          Galéria
        </Link>
        <div className="flex flex-col">
          <button
            className=" btn btn--primary"
            onClick={() => setIsClicked6((prevState) => !prevState)}
          >
            Kontakt
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked6 &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/kontakt/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
      </div> */}

      <div className="" onClick={handleLogout}>
        Odlhasit sa
      </div>
    </div>
  );
};

export default AdminPage;
