"use client";
import { Team } from "@/app/lib/interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconArrowLoopLeft from "../Icons/IconArrowLoopLeft";
import IconArrowLoopRight from "../Icons/IconArrowLoopRight";

interface TeamMember {
  job: string;
  meno: string;
  main_image: string;
  image: string;
  text: string;
}

const localPeople = [
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

interface Props {
  tim: Team[];
  spoznajte_tim: string;
}

const AboutUsTeam = ({ tim, spoznajte_tim }: Props) => {
  const [selectedHuman, setSelectedHuman] = useState<TeamMember | null>(null);
  const [isHovered, setIsHovered] = useState<TeamMember | null>(null);

  const people = localPeople.map((localPerson, index) => ({
    ...localPerson,
    text: tim[index]?.popis || "",
    job: tim[index]?.funkcia || localPerson.job,
    meno: tim[index]?.meno || localPerson.meno,
    main_image: localPerson.main_image,
    image: localPerson.image,
  }));

  useEffect(() => {
    if (people.length > 0) {
      setSelectedHuman(people[0]);
    }
  }, [tim]);
  if (!selectedHuman) return null;

  return (
    <div className="bg-secondary">
      <h3 className="pt-16 xl:pt-48 text-center  custom-underline font-normal">
        {spoznajte_tim}
      </h3>

      <div className="relative h-[700px]   2xl:h-[850px] 3xl:x-[893px] hidden xl:grid">
        <Image
          src={`/team${selectedHuman.main_image}`}
          alt="hlavna_fotka"
          height={1080}
          width={1900}
          quality={100}
          priority={true}
          className="w-full h-full   object-cover absolute"
        />
        <div className="flex flex-row h-full">
          <div className="w-1/2"></div>
          <div className="w-1/2 z-10 relative flex flex-col justify-center">
            <div className="flex flex-row gap-4  items-center">
              {" "}
              <h5 className="text-[#1D281F]">{selectedHuman.meno} </h5>
              <p className="text-primary">
                | {""} {selectedHuman.job}
              </p>
            </div>
            <div className="h-[2px] w-full bg-primary mt-4 mb-16"></div>

            <p className="text-[#1D281F] md:max-w-[80%]">
              {selectedHuman.text}
            </p>
          </div>
        </div>
      </div>
      <div className="grid-cols-4 overflow-hidden  hidden xl:grid">
        {people.map(
          (object, index) =>
            object.meno !== selectedHuman.meno && (
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(object)}
                onMouseLeave={() => setIsHovered(null)}
                key={index}
              >
                <Image
                  src={`/team${object.image} `}
                  alt="hlavna_fotka"
                  height={400}
                  width={200}
                  quality={100}
                  priority={true}
                  className="w-full h-[600px] object-cover cursor-pointer hover:scale-[1.10] duration-300 z-10"
                  onClick={() => setSelectedHuman(object)}
                />
                {isHovered?.meno === object.meno && (
                  <div className="absolute bottom-0 left-0 pb-16 pl-8 z-50">
                    <p>{object.meno}</p>
                    <p>| {object.job}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
      <div className="xl:hidden navbar_section">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          freeMode={true}
          modules={[Navigation]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          speed={1000}
        >
          {tim.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full rounded-[12px]">
                <div className="relative">
                  <Image
                    src={`/team${localPeople[index].image}`}
                    alt="hlavna_fotka"
                    height={342}
                    width={342}
                    quality={100}
                    priority={true}
                    className="w-full  h-[342px] rounded-t-[12px] object-cover"
                  />
                  <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2  text-white pb-4 w-full z-10">
                    <div className="flex flex-col items-center">
                      <p className="font-medium">{item.meno}</p>{" "}
                      <p className="text-center">{item.funkcia}</p>
                    </div>
                  </div>
                  <div className="arrow-right absolute bottom-0 left-0 scale-75 pb-8 pl-2 z-20 cursor-pointer">
                    <IconArrowLoopLeft />
                  </div>
                  <div className="arrow-left absolute bottom-0 right-0 scale-75 pb-8 pr-2  z-20 cursor-pointer">
                    <IconArrowLoopRight />
                  </div>
                </div>

                <div className="bg-[#C6BFB6] p-8 rounded-b-[12px]">
                  {item.popis}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUsTeam;
