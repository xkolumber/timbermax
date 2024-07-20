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
          <div className="flex flex-col mb-4 xl:mb-8 relative" key={index}>
            <h3 className="text-primary uppercase font-normal mb-8 xl:mb-16">
              {object.nadpis}
            </h3>
            <p className="text-tertiary description_section font-normal">
              {object.popis}
            </p>
            <div className="flex w-full  md:justify-end">
              <Link className="btn btn--primary  opacity-85" href={object.link}>
                {button_citat_viac}
              </Link>
            </div>
          </div>
        ))}
        <h4></h4>
      </div>
    </div>
  );
};

export default HomePageTimbermaxLike;
