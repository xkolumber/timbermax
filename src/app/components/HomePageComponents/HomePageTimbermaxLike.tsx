import { TimbermaxLike } from "@/app/lib/interface";
import Link from "next/link";
import React from "react";

interface Props {
  timbermax_ako: TimbermaxLike[] | [];
  button_citat_viac: string;
}

const HomePageTimbermaxLike = ({ timbermax_ako, button_citat_viac }: Props) => {
  return (
    <div className="bg-secondary">
      <div className="main_section">
        {timbermax_ako.map((object, index) => (
          <div className="flex flex-col mb-8 relative" key={index}>
            <h3 className="mb-4">{object.nadpis}</h3>
            <p className="text-tertiary">{object.popis}</p>
            <Link
              className="btn btn--primary absolute right-0 -bottom-16 opacity-85"
              href={object.link}
            >
              {button_citat_viac}
            </Link>
          </div>
        ))}
        <h4></h4>
      </div>
    </div>
  );
};

export default HomePageTimbermaxLike;
