import getBase64 from "@/app/lib/functions";
import Image from "next/image";
import PricesElements from "./PricesElements";

const PricesDescription = async () => {
  const myBlurDataUrl = await getBase64(`${process.env.URL}/cennik2.jpg`);
  return (
    <>
      <div className="main_section">
        <h2>Stručný popis profilov</h2>
        <p className="text-primary">
          Najčastejšie používaným druhom dosky pri realizáciach je profil T138.
          Používa sa pri obkladoch terás, fasád a aj do plotových výplní.
          Montujú sa na neviditeľný spoj klipovým systémom Timbermax® navrhnutým
          interne spolu s tvarom profilu dosky. Profil T138 sa používa na
          obklady plôch malých aj veľkých.{" "}
        </p>{" "}
        <p className="text-primary">
          Profily F a FT slúžia iba ako doplnkové profily na vypracovanie
          detailov stavby a nepoužívajú sa na väčších obkladaných plochách.
          Lamelové profily P postupne naberajú na prestíži a použitívajú sa vo
          všetkých druhoch obkladov okrem terás.
        </p>{" "}
        <p className="text-primary mt-8">
          Profily naskladňujeme v dvoch základných typizovaných dĺžkach a to
          2880mm a 4400mm. Profily T138 sú celoročne dostupné skladom v dĺžke
          2880mm v prvých šestnástich farebných odtieňoch. Pri profiloch o dĺžke
          4400mm sa treba vždy aktuálne informovať na infolinke firmy.{" "}
        </p>{" "}
        <p className="text-primary mt-8">
          Na základe dlhoročnej skúsenosti neodporúčame pri montovaní napdájať
          dosky dlhšie ako tri mestre. Zaužívaným spôsobom obkladania veľkých
          plôch je preto ukladanie profilov o dĺžke 2880mm parketovým spôsobom.
          Pre dosiehnutie čistého dizajnu istá časť klientov dopytuje obklady
          bez napojenia či už pri terasách alebo fasádach montovaných zvislo. Je
          možné montovať dosky aj týmto spôsobom no treba počítať s väčším
          odpadom dosiek a teda aj väčšou spotrebou materiálu na meter
          štvorcový.
        </p>
        <p className="text-primary mt-32">
          Cena materiálu na obloženie jedného metra štvorcového profilom T138 je
          83,97 Eur/m2 bez DPH pri medzere medzi doskami 2 mm. Medzera sa pri
          montáži nadstavuje automaticky pomocou klipu našej výroby. Pri montáži
          terás a fasád sa používajú až tri druhy klipov pre dosiahnutie fixácie
          alebo pružnsti dosky podľa toho v akom mieste je čo potrebné.{" "}
        </p>{" "}
        <p className="text-primary mt-8">
          Zľavy sú poskytované tabulkovo podľa veľkosti obkladanej plochy.
          Individuálne zľavy pre firmy a veľkoodoberateľov je potrebné
          odkomunikovať osobne alebo zaslaním žiadosti so všetkými potrebnými
          informáciami mailom na mail : info@timbermax.sk
        </p>
      </div>
      <Image
        src={"/cennik2.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover"
        placeholder="blur"
        blurDataURL={myBlurDataUrl}
      />
      <div className="main_section">
        <h2>Dielo na kľúč</h2>
        <p className="text-primary">
          Benefitom našej spoločnosti je možnosť objednať si dielo na kľúč s
          najdlhšiu záruku v odvetví. Dielom na kľúč sa myslí bezstarostná
          kompletná realizácia diela od nacenenia projektu, dovozu materiálu,
          montáže diela až po odvezenie odpadu stavby. Realizácia prebieha na
          základe vopred schválenej a zazmluvnenej sumy na meter štvorcový. Pri
          objednávke takejto realizácie obdržíte 5-ročnú záruku na montáž a
          25-ročnú záruku na farebnú stálosť, odolnosť voči škvrnám a fľakom.
          Záruka až 5 rokov na montáž spolu s kvalitnými recenziami odzrkadľujú
          spolahlivosť materiálu a kvalitu montáže. Pre objednanie diela na kľúč
          sme pre Vás vypracovali automatizovaný naceňovací systém.
        </p>{" "}
        <h2 className="mt-8">Cenové relácie diel na kľúč</h2>
        <p className="text-primary">
          Nižšie uvedené ceny obsahujú kompletný materiál, montáž, dopravu a
          vedľajšie rozpočtové náklady. Ceny neobsahujú prekrytie hrán / bokov
          lištami. Podľa druhu použitej lišty sú ceny za bežný meter vrátane
          skrutiek s farebnou hlavičkou a montáže nasledovné:{" "}
        </p>{" "}
        <p className="text-primary">Lišta šírky 138 mm - 21,60 Eur/bm s DPH</p>
        <p className="text-primary">Lišta šírky 80 mm - 15,84 Eur/bm s DPH</p>
      </div>
      <PricesElements />
    </>
  );
};

export default PricesDescription;
