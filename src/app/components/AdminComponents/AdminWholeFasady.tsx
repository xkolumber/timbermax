"use client";
import { Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  languages: Jazyk[];
}

const AdminWholeFasady = ({ languages }: Props) => {
  const [clickedOdvetrana, setClickedOdvetrana] = useState(false);
  const [clickedPredsadena, setClickedPredsadena] = useState(false);
  return (
    <div className="main_section additional_padding min-h-screen">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <button
            className="btn btn--primary"
            onClick={() => setClickedOdvetrana((prevState) => !prevState)}
          >
            Odvetraná fasáda
          </button>
          <div className="flex flex-col w-[150px]">
            {clickedOdvetrana &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/fasady/odvetrana/${language.jazyk}`}
                >
                  {language.jazyk}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className="btn btn--primary"
            onClick={() => setClickedPredsadena((prevState) => !prevState)}
          >
            Predsadená fasáda
          </button>
          <div className="flex flex-col w-[150px]">
            {clickedPredsadena &&
              languages.map((language, index) => (
                <Link
                  className="index p-4 bg-white text-black cursor-pointer hover:bg-gray-500 duration-200"
                  key={index}
                  href={`/admin/fasady/predsadena/${language.jazyk}`}
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

export default AdminWholeFasady;
