import React from "react";
import Image from "next/image";
import { BLUR_DATA_URL_GRAY } from "@/app/lib/functionsClient";
import PriceIconText from "@/app/components/PricesElements/PriceIconText";
import TechnicalTable from "@/app/components/TechnicalTable";
import ColorVariantsOnly from "../components/ServicesComponents/ColorVariantsOnly";
import CertificateDownload from "../components/CertificateDownload";

const page = () => {
  return (
    <main className="product_li">
      <div className="bg-secondary  ">
        <div className="main_section additional_padding">
          <h4 className="text-tertiary custom-underline" id="profily">
            Profily
          </h4>

          <p className="pt-8 text-tertiary">
            Timbermax je medzi bezúdržbovými materiálmi na terasy výrazným
            krokom vpred nielen v oblasti vzhľadu pripomínajúceho drevené
            terasy, ale aj vo výraznom vylepšení užívateľských vlastností.
            Svedčí o tom rastúci počet záujemcov vďaka pozitívnym referenciám.
          </p>

          <p className="text-center text-primary mt-24 text-3xl mb-8">
            Pre rýchlu orientáciu ponúkame stručný prehľad jednotlivých riešení:
          </p>
          <Image
            src={"/cennik/cennik_material.svg"}
            alt="hlavna_fotka"
            height={1000}
            width={1900}
            quality={100}
            priority={true}
            className="w-full  md:h-full max-h-[600px] object-contain md:max-w-[90%] m-auto"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />
        </div>
        <div className="main_section">
          <p className="text-tertiary">
            Najčastejšie používaným druhom dosky pri realizáciach terás je
            profil T138 a T73. Profily sa montujú na neviditeľný spoj klipovým
            systémom Timbermax® navrhnutým interne spolu s tvarom profilu dosky.
            Profily T138 a T73 sa používa na obklady plôch malých aj veľkých.
          </p>
          <p className="pt-8 text-tertiary">
            {" "}
            Profily F a FT slúžia iba ako doplnkové profily na vypracovanie
            detailov stavby a nepoužívajú sa na väčších obkladaných plochách.
            Lamelové profily P postupne naberajú na prestíži a použitívajú sa vo
            všetkých druhoch obkladov okrem terás.
          </p>

          <p className="pt-8 text-tertiary">
            {" "}
            Profily naskladňujeme v dvoch základných typizovaných dĺžkach a to
            2880mm a 4400mm. Profily T138 sú celoročne dostupné skladom v dĺžke
            2880mm v prvých šestnástich farebných odtieňoch. Pri profiloch o
            dĺžke 4400mm sa treba vždy aktuálne informovať na infolinke firmy.
          </p>
          <p className="pt-8 text-tertiary">
            Na základe dlhoročnej skúsenosti neodporúčame pri montovaní napájať
            dosky dlhšie ako tri metre. Zaužívaným spôsobom obkladania veľkých
            plôch je preto ukladanie profilov o dĺžke 2880mm parketovým
            spôsobom. Pre dosiahnutie čistého dizajnu istá časť klientov
            dopytuje obklady bez napojenia či už pri terasách alebo fasádach
            montovaných zvislo. Je možné montovať dosky aj týmto spôsobom no
            treba počítať s väčším odpadom dosiek a teda aj väčšou spotrebou
            materiálu na meter štvorcový.{" "}
          </p>
        </div>{" "}
        <div className="main_section !pt-0">
          <h4 className="text-tertiary custom-underline" id="podklady">
            Podklady
          </h4>

          <p className="pt-8 text-tertiary">
            Podklady pre architektov a projektantov
          </p>

          <p className="pt-8 text-tertiary">
            Spoločnosť Timbermax prináša profesionálne riešenia pre obklady
            fasád a terás, ktoré spájajú estetiku, odolnosť a jednoduchú údržbu.
            Aby sme uľahčili prácu architektom, projektantom a realizačným
            firmám, pripravili sme podrobné PDF a DWG súbory s realizačnými a
            projekčnými detailmi. Tieto podklady vám pomôžu správne navrhnúť a
            zrealizovať montáž fasádnych a terasových obkladov tak, aby výsledok
            bol funkčný a vizuálne dokonalý.
          </p>

          <p className="pt-8 text-tertiary">
            Naše materiály sú navrhnuté s dôrazom na dlhú životnosť, odolnosť
            voči poveternostným vplyvom a minimálne nároky na údržbu, čím
            ponúkajú ideálne riešenie pre modernú architektúru. Neustále
            inovujeme a pracujeme na rozšírení našich podkladov - už čoskoro
            pribudnú aj detaily pre montáž plotov a sinolamov, ktoré budú
            dostupné do konca roka 2025.
          </p>
        </div>
        <div className="p">obrazky terasy fasady</div>
        <div className="main_section">
          <h4 className="text-tertiary custom-underline" id="technicky-list">
            Technický list
          </h4>

          <p className="pt-8 text-tertiary">
            Technický list - všetky parametre profilov na jednom mieste
          </p>

          <p className="pt-8 text-tertiary">
            Pri výbere správneho riešenia pre obklad fasády alebo terasy je
            dôležité poznať presné technické parametre jednotlivých profilov.
            Preto vám Timbermax ponúka podrobný technický list, ktorý obsahuje
            všetky kľúčové informácie pre správny výber a montáž.
          </p>

          <p className="pt-8 text-tertiary">V technickom liste nájdete</p>
          <ul className="4">
            <li>
              Rozmery a dostupné profily pre rôzne typy fasádnych a terasových
              obkladov
            </li>
            <li>
              Materiálové zloženie a povrchovú úpravu pre vysokú odolnosť a
              estetický vzhľad
            </li>
            <li>
              {" "}
              Odolnosť voči UV žiareniu, vlhkosti a mechanickému opotrebovaniu
            </li>
            <li>
              {" "}
              Montážne pokyny a odporúčania pre dlhú životnosť a bezchybný
              výsledok
            </li>
          </ul>

          <p className="pt-8 text-tertiary">
            Naše fasádne a terasové obklady Timbermax sú navrhnuté tak, aby
            poskytovali nadčasový dizajn, jednoduchú údržbu a mimoriadnu
            odolnosť voči poveternostným podmienkam. Stiahnite si technický list
            a vyberte si ten správny profil pre váš projekt.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src={`/podklad.png`}
            alt={`Image`}
            priority={true}
            className="absolute w-full h-[50%] object-cover"
            fill
          />
          <Image
            src={"/cennik/cennik.jpg"}
            alt="hlavna_fotka"
            height={1000}
            width={1000}
            quality={100}
            priority={true}
            className="w-full  object-cover object-right h-[400px]"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP48v+2R5QhAx+DhAIDw8vH11/fPbZxQfPmBfUAmBcMvwxWR4cAAAAASUVORK5CYII="
          />
          <PriceIconText cennik_stiahnutie={"Technický list na stiahnutie"} />
        </div>
        <div className="pt-40">
          <TechnicalTable />
        </div>
        <div className="main_section">
          <h4 className="text-tertiary custom-underline" id="brozura">
            Brožúra
          </h4>

          <p className="pt-8 text-tertiary">
            Brožúra Timbermax 2025 - Najkrajšie realizácie a detaily
          </p>

          <p className="pt-8 text-tertiary">
            Nechajte sa inšpirovať najkrajšími realizáciami terás a fasád v
            našej novej brožúre Timbermax 2025! Prinášame vám výber najlepších
            projektov, v ktorých zohrali hlavnú úlohu naše fasádne a terasové
            obklady, a ukážky detailného spracovania, ktoré podčiarkujú kvalitu
            a estetiku našich materiálov.
          </p>

          <p className="pt-8 text-tertiary">V brožure nájdete:</p>
          <ul className="4">
            <li>
              Exkluzívne realizácie moderných aj tradičných stavieb s použitím
              Timbermax obkladov
            </li>
            <li>
              Detailné fotografie a technické riešenia, ktoré môžu poslúžiť ako
              inšpirácia pre váš projekt
            </li>
            <li>
              Materiály, povrchové úpravy a montážne detaily, ktoré zaručujú
              dlhú životnosť a prémiový vzhľad
            </li>
            <li>
              {" "}
              Montážne pokyny a odporúčania pre dlhú životnosť a bezchybný
              výsledok
            </li>
          </ul>

          <p className="pt-8 text-tertiary">
            Timbermax prináša riešenia, ktoré kombinujú prírodný dizajn, vysokú
            odolnosť a minimálnu údržbu, čím sa stávajú ideálnou voľbou pre
            architektov, projektantov aj koncových zákazníkov. Stiahnite si
            brožúru Timbermax 2025 a presvedčte sa o kvalite našich produktov na
            vlastné oči.
          </p>
        </div>
      </div>
      <div className="relative h-[400px]">
        <Image
          src={`/podklad.png`}
          alt={`Image`}
          priority={true}
          className="absolute w-full h-[50%] object-cover"
          fill
        />
        <Image
          src={"/cennik/cennik.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  object-cover object-right h-[400px]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP48v+2R5QhAx+DhAIDw8vH11/fPbZxQfPmBfUAmBcMvwxWR4cAAAAASUVORK5CYII="
        />
        <PriceIconText cennik_stiahnutie={"Brožúra na stiahnutie"} />
      </div>

      <div className="main_section">
        <h4 className="text-tertiary custom-underline" id="certifikaty">
          Certifikáty
        </h4>

        <p className="pt-8 text-tertiary">
          Certifikáty kvality a bezpečnosti Timbermax
        </p>

        <p className="pt-8 text-tertiary">
          Kvalita, odolnosť a bezpečnosť sú pre nás v Timbermax prioritou. Naše
          fasádne a terasové obklady spĺňajú najvyššie normy a prešli prísnym
          testovaním, aby sme zaručili ich dlhú životnosť a spoľahlivosť. V
          tejto sekcii si môžete stiahnuť naše certifikáty, ktoré potvrdzujú
          vysokú úroveň našich produktov a ich súlad s medzinárodnými
          štandardmi.
        </p>

        <p className="pt-8 text-tertiary">Naše certifikáty zahŕňajú:</p>
        <ul className="4">
          <li>Odolnosť voči poveternostným vplyvom, UV žiareniu a vlhkosti</li>
          <li>
            Protipožiarne a bezpečnostné normy pre fasádne a terasové obklady
          </li>
          <li>Ekologická a zdravotná nezávadnosť použitých materiálov</li>
          <li>Testy pevnosti, mechanickej odolnosti a dlhej životnosti</li>
        </ul>

        <p className="pt-8 text-tertiary">
          Výber správnych materiálov je kľúčový pre úspešnú realizáciu projektu.
          Timbermax ponúka produkty, ktoré sú nielen esteticky atraktívne, ale
          aj certifikované pre maximálnu bezpečnosť a spoľahlivosť. Stiahnite si
          naše certifikáty a presvedčte sa o kvalite Timbermax obkladov.
        </p>
      </div>

      <CertificateDownload />

      <div className="main_section">
        <h4 className="text-tertiary custom-underline" id="farby">
          Farby
        </h4>

        <p className="pt-8 text-tertiary">
          Farby dosiek Timbermax - Najširšia ponuka na svete
        </p>

        <p className="pt-8 text-tertiary">
          Timbermax vám prináša najširšiu ponuku farieb fasádnych a terasových
          obkladov na svete - až 20 jedinečných odtieňov, dostupných pre všetky
          naše profily. Či už preferujete prírodné drevené tóny, moderné sivé
          odtiene alebo elegantné tmavé variácie, u nás si vyberiete farbu,
          ktorá dokonale doplní váš exteriér.
        </p>

        <p className="pt-8 text-tertiary">Prečo si vybrať Timbermax? </p>
        <ul className="4">
          <li>
            20 exkluzívnych farebných odtieňov pre jedinečný dizajn fasád a
            terás
          </li>
          <li>
            25-ročná záruka na farebnú stálosť - odolnosť voči UV žiareniu a
            poveternostným podmienkam
          </li>
          <li>
            5-ročná záruka na profesionálnu montáž pre bezchybný výsledok a dlhú
            životnosť
          </li>
        </ul>

        <p className="pt-8 text-tertiary">
          Vďaka špeciálnej technológii výroby si naše fasádne a terasové obklady
          zachovávajú svoj prirodzený vzhľad po celé desaťročia bez potreby
          dodatočného natierania či renovácie. Vyberte si svoj odtieň a doprajte
          svojmu projektu nadčasový a luxusný vzhľad s
        </p>
      </div>
      <div className="navbar_section">
        <ColorVariantsOnly />
      </div>
      <div className="">pridat fotky produktov? ake</div>
    </main>
  );
};

export default page;
