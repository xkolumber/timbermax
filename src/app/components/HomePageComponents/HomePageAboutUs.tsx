import React from "react";
import IconTerasa from "../icons/IconTerasa";
import HomePageAboutIsElements from "./HomePageAboutIsElements";

const HomePageAboutUs = () => {
  return (
    <div className="bg-secondary">
      <div className="main_section">
        <h2 className="uppercase">Naše služby</h2>
        <p className="text-black">
          Timbermax® je dominantnou značkou dizajnových kompozitných materiálov.{" "}
        </p>
        <p className="text-black mt-16">
          Už 20 rokov ponúkame realizácie dieľ na klúč po celom Slovensku a
          strednej Európe. Kvalitný materiál si vyžaduje odbornú montáž, ktorú
          od našej firmy obdržíte s 5 ročnou zárukou. Nižšie nájdete všetky
          možnosti využitia a aplikácie profilov z našej ponuky. Zmluvne
          garantujeme sumu realizácie na meter štvorcový podľa schválenej
          cenovej ponuky. Profily Timbermax Exotic ponúkame s 25 ročnou zárukou
          na farebnú stálosť, odolnosť voči škvrnám a fľakom. NAŠE SLUŽBY
        </p>
      </div>
      <HomePageAboutIsElements />
    </div>
  );
};

export default HomePageAboutUs;
