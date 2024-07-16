import { TimbermaxLike } from "@/app/lib/interface";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "TIMBERMAX AKO ALTERNATÍVA DREVA",
    description:
      "Terasové a fasádne dosky Timbermax ako jediný produkt na trhu reálne nahradia drevo aj svojím vzhľadom. Snaha o dosiahnutie vzhľadu pravého dreva sa po dlhoročnom výskume a novej technológii výroby stala realitou.",
    link: "/",
  },
  {
    title: "TIMBERMAX AKO EFEKTÍVNA INVESTÍCIA",
    description:
      "Farebná stálosť – Samočistiaci povrch – Odolnosť voči fľakom – kompozitné dosky Timbermax Exotic sa dodávajú s 25 ročnou zárukou na odolnosť voči fľakom a iným bežným nečistotám. Vďaka tomu údržba terasy či fasády je efektívnejšia ako drevo.",
    link: "/",
  },
  {
    title: "TIMBERMAX AKO BEZÚDRŽBOVÝ KOMPOZIT",
    description:
      "Timbermax je na rozdiel od drvivej väčšiny WPC dosiek svojím vzhľadom a úžitkovými vlastnosťami skutočne bezúdržbovou alternatívou dreva pri použití v exteriéri. ",
    link: "/",
  },
  {
    title: "TIMBERMAX AKO ekologická voľba",
    description:
      "Kompozitný materiál používaný pri výrobe WPC obkladu Timbermax má  95% zloženia z recyklovaných výrobkov a je 100% recyklovateľný.  Polymér (HDPE) je výsledkom spracovania plastového odpadu ako sú zálohované plastové fľaše a obaly. ",
    link: "/",
  },
];

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
