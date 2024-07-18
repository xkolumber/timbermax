"use client";
import { Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  languages: Jazyk[];
}

const AdminPage = ({ languages }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="min-h-screen main_section additional_padding">
      <h2>Admin Zóna</h2>
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
    </div>
  );
};

export default AdminPage;
