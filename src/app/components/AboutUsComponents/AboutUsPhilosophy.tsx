import React from "react";
import IconQuoteUpper from "../icons/IconQuoteUpper";
import IconQueoteDown from "../icons/IconQuoteDown";
import IconQuoteDown from "../icons/IconQuoteDown";

const AboutUsPhilosophy = () => {
  return (
    <div className="bg-fourthtiary">
      <div className="main_section flex flex-col justify-center items-center">
        <h2 className="text-white">Filozofia a poslanie</h2>
        <h6 className="text-white">
          Staviame na silnej značke, ktorá má charakter a emóciu
        </h6>
        <p className="text-center">
          Kladieme dôraz na poskytovanie odborných služieb a dlhodobý rozvoj
          firmy. Našim cieľom je kvalitne odvedená práca s dlhoročnou
          životnosťou, ktorá má za následok spokojnosť zákazníka. Rozumieme
          tomu, že každá stavba vyžaduje individuálny prístup a pochopenie ako
          aj jednotlivý zákazník.
        </p>{" "}
        <p className="mt-8 text-center">
          Ponúkame spoľahlivosť a komplexnosť služieb od analýzy a identifikácie
          potrieb, vypracovanie technického riešenia až po realizáciu vlastnými
          prostriedkami a personálom. Poskytujeme najdlhšiu záruku na práce v sú
          súčasťou firmy cez 15 rokov.{" "}
        </p>{" "}
        <p className="mt-8 text-center">
          Návrhy obkladov realizuje interný architekt spoločnosti po osobnom či
          virtuálnom stretnutí s klientom. Výstup architekta je zvyčajne
          vizualizácia podľa ktorej sa zrealizuje konečné vyhotovenie obkladu.
          Vieme vypracovať aj realizačné detaily stavby podľa požiadavky.{" "}
        </p>
      </div>

      {/*Ceo Talk */}
      <div className="navbar_section bg-[#354435] flex flex-col rounded-[12px] justify-center items-center relative">
        <div className="absolute bottom-0 right-0">
          <IconQuoteDown />
        </div>
        <div className="absolute top-0 left-0">
          <IconQuoteUpper />
        </div>
        <p className="max-w-[80%] text-center">
          Precízne odvedená práca v spojení s kvalitným bezúdržbovým materiálom
          prinesie klientovi pri dokončovaní stavby pokoj na duši a z dlhodobého
          hľadiska ušetrí peniaze.
        </p>

        <p className="font-thin text-[#D9D4CD]">Peter Barták | CEO</p>
      </div>
    </div>
  );
};

export default AboutUsPhilosophy;
