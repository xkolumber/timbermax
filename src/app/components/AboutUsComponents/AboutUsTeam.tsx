"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TeamMember {
  job: string;
  meno: string;
  main_image: string;
  image: string;
  text: string;
}

const people = [
  {
    job: "CEO",
    meno: "Peter Barták",
    main_image: "/peter_main.jpg",
    image: "/peter.jpg",
    text: "Stavebníctvu a WPC materiálom sa venujem už 20 rokov. Zodpovedám za finálne prevedenie zákazky, návrh dizajnu profilov a technického riešenia montáže. Spolu s Daliborom som postavil túto firmu na prepojení kvalitného materiálu so správnym technickým prevedením montáže. Pokiaľ udržíme nadstavenú latku týchto dvoch pilierov nemá potenciál firmy hraníc. Nadšenie klienta z každého detailu podľa jeho predstavy je pre mňa prioritou. Cieľom každej realizácie je, aby som si po dokončení zákazky mohol povedať, že takúto terasu či fasádu chcem mať aj u seba doma. Snažím sa kontolovať kvalitatívne prevedenie každej stavby po jej dokončení a byť pri jej finálnom odovzdaní. Aktuálne sa venujem primárne rozvoju firmy a zahraničnej expanzii.",
  },
  {
    job: "COO",
    meno: "Dalibor Lenárt",
    main_image: "/dalibor_main.jpg",
    image: "/dalibor.jpg",
    text: "WPC materiálmi a možnostiam ich použitia sa venujem už viac ako 25 rokov. Zodpovedám za zabezpečenie plynulého chodu firmy, zefektívnenie a optimalizáciu procesov, komunikáciu s výrobným procesom, zazmluvňovanie zákaziek a koordináciu montážnych skupín. S klientom komunikujem po oficiálnom schválení cenovej ponuky, upravujem zmluvy aby sedeli presne podľa parametrov stavby a zohľadňujem v nej aj špecifické požiadavky zákazníka. Dbám na spokojnosti klientov a dodržanie stanovených časových rámcov. Dlhodobo sa venujem rozširovaniu sortimentu pre dosiahnutie najširšej škály farebných odtieňov na Európskom trhu. Spracovávam ponuky novovznikajúcich pokrokových výrobných technológii. Komunikujem s firmami o prípadnej spolupráci. ",
  },
  {
    job: "Vedúca prevádzky",
    meno: "Daliborova žena",
    main_image: "/zena_main.jpg",
    image: "/zena.jpg",
    text: "Patrím k služobne najskúsenejším členom postupne rozrastajúceho sa tímu. Verím v efektivitu a kvalitne odvedenú prácu. Zabezpečujem klientelistický servis, doskladňovanie materiálov, správu rozvozov objednávok a vypomáham so zazmluvňovaním zákaziek. Pri finálnom spracovaní zákazky dokážem klietom kvalitne poradiť či už pri výbere farebnosti variantov, základných technických otázkach alebo správnom umiestnení požadovaného obkladu. ",
  },
  {
    job: "Architekt",
    meno: "Pavol Remenár",
    main_image: "/pavol_main.jpg",
    image: "/pavol.jpg",
    text: "Materiál Timbermax spolu s nevídanými možnosťami kvality spracovania montážnych detailov a ľudský prístup vedenia firmy ma zaujaľ natoľko, že som sa s chalanmi rozhodol dlhodobo bližšie spolupracovať. Ako externá firma im spracovávam upresnenie cenových ponúk, návrhy dizajnov, návrhy možných aplikácii obkladov na nové či jestvujúce budovy, realizujem zamerania a obhliadky stavieb. Spolu s Peťom som navrhol automatický naceňovač, ktorý má za úlohu odľahčiť veľký počet žiadostí o cenové ponuky. Klienti sa týmto spôsobom vedia pred kontaktovaním firmy samostatne oboznámiť s technickými požiadavkami produktu a hlavne s cenou realizácie či samotného materiálu. Aktuálne sa zaoberám rozšírením počtu showroomových pobočiek do zvyšnej časti Slovenska a okolitých krajín EU.",
  },
];

const AboutUsTeam = () => {
  const [selectedHuman, setSelectedHuman] = useState<TeamMember>(people[0]);
  const [isHovered, setIsHovered] = useState<TeamMember>();
  return (
    <div className="bg-secondary">
      <h2 className="pt-16 pb-16 text-center">Zoznámte sa s naším tímom</h2>

      <div className="relative h-[600px]">
        <Image
          src={`/team${selectedHuman.main_image}`}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-full max-h-[1200px] object-cover absolute"
        />
        <div className="">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h6>Peter Barták | CEO</h6>
            <p></p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 overflow-hidden">
        {people.map(
          (object, index) =>
            object != selectedHuman && (
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(object)}
                onMouseLeave={() => setIsHovered(undefined)}
                key={index}
              >
                <Image
                  src={`/team${object.image}`}
                  alt="hlavna_fotka"
                  height={1000}
                  width={1000}
                  quality={100}
                  priority={true}
                  className="w-full h-[600px] object-cover cursor-pointer hover:scale-[1.10] duration-300 z-10"
                  onClick={() => setSelectedHuman(object)}
                />
                {isHovered === object && (
                  <div className="absolute bottom-0 left-0 pb-16 pl-8">
                    <p>{object.meno}</p>
                    <p>| {object.job}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AboutUsTeam;

/*
Dalibor Lenárt | 
          
            
            
          
            */
