import React from "react";
import Image from "next/image";
import getBase64 from "@/app/lib/functions";
import IconCalculateGreen from "../Icons/IconCalculateGreen";
import { PriceOffer } from "@/app/lib/interface";
import Link from "next/link";

const three_text = [
  {
    title: "Realizácia diela na kľúč",
    description:
      "Pokiaľ máte záujem o bezstarostnú realizáciu diela so zárukou na montáž od skúsených stolárov zvolte túto možnosť. Pri procese nacenenia zákazky získate predstavu o procese realizácie a jednotlivých materiáloch. Po upresnení základných parametrov diela obdržíte predbežnú cenovú ponuku s garanciou ceny na meter štvorcový. Schválením ponuky a odoslaním objednávky obdržíte zmluvu o dielo so zálohovou faktúrou. Počas spracovania objednávky Vás kontaktujeme ohľadom termínu realizácie a v prípade nutnosti ohľadom obhliadky stavby pre upresnenie detailov.",
    button: "Výpočet ceny diela na kľúč",
  },
  {
    title: "Objednanie materiálu s prepočtom na m2",
    description:
      "Túto možnosť zvolí klient, ktorý si chce objednať kompletný materiál potrebný na realizáciu diela no montáž si chce uskutočniť vo vlastnej réžii. Naceňovač na základe klientom uvedených parametrov presne vypočíta druh a počet prvkov potrebných pre realizáciu. Pri procese naceňovania získate potrebné informácie k správnemu prevedeniu realizácie a jednotlivým fázam montáže. V posledných krokoch si klient zvolí či má záujem aj o doručenie materiálu alebo o vyzdvihnutie na centrálnom sklade. K zmluve o dielo a zálohovej faktúre bude priložený príslušný návod na montáž. ",
    button: "Výpočet ceny materiálnu na M2 ",
  },
  {
    title: "Objednanie formou e-shopu",
    description:
      "Nákup materiálu formou e-shopu slúži pre klientov či firmy, ktorí majú záujem o presný počet kusov jednotlivých položiek z našej ponuky. Túto možnosť zvolí klient, ktorý vie o aký profil v akom počte kusov s akým príslušenstvom potrebuje k zrealizácii diela. Výstupom cenovej ponuky je zálohová faktúra. Materiál Vám po spracovaní objednávky a zaplatení faktúry v plnej sume doručíme na zvolenú adresu alebo si poň môžete prísť na sklad. Pokiaľ je zvolený materiál skladom obdržíte ho do pätnástich dní od vystavenia objednávky. Platba v hotovosti nie je možná. V prípade, ak objednaný tovar nie je skladom, dodanie a platobné podmienky sa dohodnú individuálne. Klient v tomto prípade zaplatí rezervačnú zálohu 30% a zostatok pred samotným dodaním.",
    button: "Nákup materiálu | e-shop",
  },
];

interface Props {
  data: PriceOffer | undefined;
}

const PricesOffer = ({ data }: Props) => {
  return (
    <>
      <div className="main_section">
        <h3 className="custom-underline !normal-case">
          {data?.cenova_ponuka_nadpis}
        </h3>
        <p className="text-primary">{data?.cenova_ponuka_popis}</p>
      </div>
      <div className="relative">
        <Image
          src={"/cennik/nacenovac.png"}
          alt="hlavna_fotka"
          height={1000}
          width={1920}
          quality={100}
          priority={true}
          className="w-full  md:h-full h-[250px] max-h-[600px] object-cover "
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AGes0azW8sP//0JscQBcWTCfh3n/6r2AdlYApLaJzNq0MkEkAAcAs24Tihp4VaIAAAAASUVORK5CYII="
        />
        <div className="absolute z-[100] bottom-0 left-1/2 transform -translate-x-1/2  bg-secondary rounded-[8px] w-48 h-48 p-8 -mb-20">
          <IconCalculateGreen />
        </div>
      </div>
      <div className="main_section 3xl:-mt-16">
        <p className="text-primary text-center mb-8 mt-8 md:mt-0 font-semibold text-[22px]">
          {data?.nacenovac}
        </p>
        {three_text.map((object, index) => (
          <div className="flex flex-col mb-16" key={index}>
            <p className="underline text-primary">
              {data?.nacenovac_sekcie[index].nadpis != ""
                ? data?.nacenovac_sekcie[index].nadpis
                : object.title}
            </p>
            <p className="pt-4 md:pt-8 text-primary">
              {data?.nacenovac_sekcie[index].popis != ""
                ? data?.nacenovac_sekcie[index].popis
                : object.description}
            </p>
            <div className="flex md:justify-end">
              <Link
                className="btn btn--primary"
                href={`${data?.nacenovac_sekcie[index].link}`}
              >
                {data?.nacenovac_sekcie[index].button != ""
                  ? data?.nacenovac_sekcie[index].button
                  : object.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Image
        src={"/cennik/cennik3.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-[350px] h-[250px] lg:h-full  max-h-[600px] object-cover object-top"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AGes0azW8sP//0JscQBcWTCfh3n/6r2AdlYApLaJzNq0MkEkAAcAs24Tihp4VaIAAAAASUVORK5CYII="
      />
      <div className="main_section">
        <p className="text-primary">{data?.posl_popis1}</p>
        <p className="text-primary mt-8">{data?.posl_popis2}</p>
        <p className="text-primary mt-8">{data?.posl_popis3}</p>
        <p className="text-primary mt-8">{data?.posl_popis4}</p>
      </div>
    </>
  );
};

export default PricesOffer;
