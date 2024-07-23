"use client";
import { Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  languages: Jazyk[];
}

const AdminPage = ({ languages }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  return (
    <div className="min-h-screen main_section additional_padding">
      <h2>Admin Zóna</h2>
      <div className="flex flex-wrap gap-4">
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
            onClick={() => setIsClicked5((prevState) => !prevState)}
          >
            Slnolamy
          </button>
          <div className="flex flex-col w-[150px]">
            {isClicked5 &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/slnolamy/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
