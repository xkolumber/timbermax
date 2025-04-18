"use client";

import imageCompression from "browser-image-compression";
import { OpeningHours, Prevadzka } from "./interface";

export function getSecondPathValue(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[1] || null;
}

export const empty_three_values = ["", "", ""];
export const empty_four_values = ["", "", "", ""];
export const empty_five_values = ["", "", "", "", ""];

export const EmptyNacenovac = [
  {
    nadpis: "",
    popis: "",
    button: "",
    link: "",
  },
  {
    nadpis: "",
    popis: "",
    button: "",
    link: "",
  },
  {
    nadpis: "",
    popis: "",
    button: "",
    link: "",
  },
];

export const EmptyTimbermaxLike = [
  {
    nadpis: "",
    popis: "",
    link: "",
  },
  {
    nadpis: "",
    popis: "",
    link: "",
  },
  {
    nadpis: "",
    popis: "",
    link: "",
  },
  {
    nadpis: "",
    popis: "",
    link: "",
  },
];

export const EmptyServices = [
  {
    nadpis: "",
    popis: "",
  },
  {
    nadpis: "",
    popis: "",
  },
  {
    nadpis: "",
    popis: "",
  },
  {
    nadpis: "",
    popis: "",
  },
];

export const colors = [
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%207.png",
    text: "ipe",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%206.png",
    text: "redwood",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2024.png",
    text: "bangkirai",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%208.png",
    text: "mahagony",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%209.png",
    text: "meranti",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2010.png",
    text: "okume",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2011.png",
    text: "garapa",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2012.png",
    text: "teak",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2013.png",
    text: "maple",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2014.png",
    text: "accoya",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2015.png",
    text: "vory",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2016.png",
    text: "sky",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2017.png",
    text: "vintage",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2018.png",
    text: "stone",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2019.png",
    text: "graphite",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2020.png",
    text: "ebony",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2021.png",
    text: "green",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%2022.png",
    text: "red",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%203.png",
    text: "orange",
  },
  {
    farba:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/colors/Asset%204.png",
    text: "blue",
  },
];

export async function CompressImages(files: FileList) {
  try {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFiles = await Promise.all(
      Array.from(files).map((file) => imageCompression(file, options))
    );

    return compressedFiles;
  } catch (error) {
    console.error("Error compressing images:", error);
    return null;
  }
}

export async function CompressImage(file: File) {
  try {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    return null;
  }
}

export const categories = [
  "terasy",
  "fasady",
  "bazeny",
  "slnolamy",
  "ploty",
  "ostatne",
];

export function createSlug(title: string): string {
  const slug = title
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  return slug;
}

export const prevadzky: Prevadzka[] = [
  {
    id: "1",
    kraj: "Bratislavský kraj",
    adresa: "Senecká cesta 2, Šamorín",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "7:00-20:00",
      ut: "7:00-20:00",
      st: "7:00-20:00",
      stv: "7:00-20:00",
      pi: "7:00-20:00",
      sob: "8:00-20:00",
      ne: "8:00-20:00",
    },
  },
  {
    id: "2",
    kraj: "Trnavský kraj",
    adresa: "Dedinská 102, Trnava-Modranka | Záhradníctvo Dechtický",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "8:00-16:30",
      ut: "8:00-16:30",
      st: "8:00-16:30",
      stv: "8:00-16:30",
      pi: "8:00-16:30",
      sob: "8:00-12:00",
      ne: "-",
    },
  },
  {
    id: "3",
    kraj: "Trenčiansky kraj",
    adresa: "Pripravujeme",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "-",
      ut: "-",
      st: "-",
      stv: "-",
      pi: "-",
      sob: "-",
      ne: "-",
    },
  },
  {
    id: "4",
    kraj: "Nitriansky kraj",
    adresa: "Bratislavská 19A, 949 01 Nitra-Mlynárce | Záhradníctvo ProRain",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "7:00-17:30",
      ut: "7:00-17:30",
      st: "7:00-17:30",
      stv: "7:00-17:30",
      pi: "7:00-17:30",
      sob: "8:00-12:00",
      ne: "-",
    },
  },
  {
    id: "5",
    kraj: "Žilinský kraj",
    adresa: "Ovčiarsko 185, 010 04 Ovčiarsko - Žilina | Lány záhradné centrum",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "9:00-17:00",
      ut: "9:00-17:00",
      st: "9:00-17:00",
      stv: "9:00-17:00",
      pi: "9:00-17:00",
      sob: "8:00-12:00",
      ne: "-",
    },
  },
  {
    id: "6",
    kraj: "Banskobystrický kraj",
    adresa: "Klinovisko, 962 33 Budča | Ovocná škôlka BOBA",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "9:00-17:00",
      ut: "9:00-17:00",
      st: "9:00-15:30",
      stv: "9:00-17:00",
      pi: "9:00-15:30",
      sob: "8:00-13:00",
      ne: "-",
    },
  },
  {
    id: "7",
    kraj: "Prešovský kraj",
    adresa: "Hlavná 6/21, 059 21 Svit | Kvety Tatry",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "8:00-16:00",
      ut: "8:00-16:00",
      st: "8:00-16:00",
      stv: "8:00-16:00",
      pi: "8:00-16:00",
      sob: "8:00-13:00",
      ne: "-",
    },
  },
  {
    id: "8",
    kraj: "Košický kraj",
    adresa: "Školská 2, 044 42 Rozhanovce | Zahradníctvo KaK",
    photo: "/o_nas.jpg",
    hodiny: {
      pon: "8:00-17:00",
      ut: "8:00-17:00",
      st: "8:00-17:00",
      stv: "8:00-17:00",
      pi: "8:00-17:00",
      sob: "8:00-16:00",
      ne: "-",
    },
  },
];

export const OpeningHoursEmpty = {
  pon: "",
  ut: "",
  st: "",
  stv: "",
  pi: "",
  sob: "",
  ne: "",
};

export const daysOrder: (keyof OpeningHours)[] = [
  "pon",
  "ut",
  "st",
  "stv",
  "pi",
  "sob",
  "ne",
];

export const localPeople = [
  {
    job: "CEO",
    meno: "Peter Barták",
    main_image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/peter_pc.png",
    image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/peter_mobile.png",
    text: "Stavebníctvu a WPC materiálom sa venujem už 20 rokov. Zodpovedám za finálne prevedenie zákazky, návrh dizajnu profilov a technického riešenia montáže. Spolu s Daliborom som postavil túto firmu na prepojení kvalitného materiálu so správnym technickým prevedením montáže. Pokiaľ udržíme nadstavenú latku týchto dvoch pilierov nemá potenciál firmy hraníc. Nadšenie klienta z každého detailu podľa jeho predstavy je pre mňa prioritou. Cieľom každej realizácie je, aby som si po dokončení zákazky mohol povedať, že takúto terasu či fasádu chcem mať aj u seba doma. Snažím sa kontolovať kvalitatívne prevedenie každej stavby po jej dokončení a byť pri jej finálnom odovzdaní. Aktuálne sa venujem primárne rozvoju firmy a zahraničnej expanzii.",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "COO",
    meno: "Dalibor Lenárt",
    main_image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/dalibor_pc.png",
    image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/dalibor_mobile.png",
    text: "WPC materiálmi a možnostiam ich použitia sa venujem už viac ako 25 rokov. Zodpovedám za zabezpečenie plynulého chodu firmy, zefektívnenie a optimalizáciu procesov, komunikáciu s výrobným procesom, zazmluvňovanie zákaziek a koordináciu montážnych skupín. S klientom komunikujem po oficiálnom schválení cenovej ponuky, upravujem zmluvy aby sedeli presne podľa parametrov stavby a zohľadňujem v nej aj špecifické požiadavky zákazníka. Dbám na spokojnosti klientov a dodržanie stanovených časových rámcov. Dlhodobo sa venujem rozširovaniu sortimentu pre dosiahnutie najširšej škály farebných odtieňov na Európskom trhu. Spracovávam ponuky novovznikajúcich pokrokových výrobných technológii. Komunikujem s firmami o prípadnej spolupráci. ",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "Vedúca klientely",
    meno: "Ivana Lénartová",
    main_image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/zena_pc.png",
    image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/zena_mobile.png",
    text: "Patrím k služobne najskúsenejším členom postupne rozrastajúceho sa tímu. Verím v efektivitu a kvalitne odvedenú prácu. Zabezpečujem klientelistický servis, doskladňovanie materiálov, správu rozvozov objednávok a vypomáham so zazmluvňovaním zákaziek. Pri finálnom spracovaní zákazky dokážem klietom kvalitne poradiť či už pri výbere farebnosti variantov, základných technických otázkach alebo správnom umiestnení požadovaného obkladu. ",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "Architekt",
    meno: "Pavol Remenár",
    main_image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/palo_pc.png",
    image:
      "https://timbermaxopen.s3.eu-north-1.amazonaws.com/local_people/palo_mobile.png",
    text: "Materiál Timbermax spolu s nevídanými možnosťami kvality spracovania montážnych detailov a ľudský prístup vedenia firmy ma zaujaľ natoľko, že som sa s chalanmi rozhodol dlhodobo bližšie spolupracovať. Ako externá firma im spracovávam upresnenie cenových ponúk, návrhy dizajnov, návrhy možných aplikácii obkladov na nové či jestvujúce budovy, realizujem zamerania a obhliadky stavieb. Spolu s Peťom som navrhol automatický naceňovač, ktorý má za úlohu odľahčiť veľký počet žiadostí o cenové ponuky. Klienti sa týmto spôsobom vedia pred kontaktovaním firmy samostatne oboznámiť s technickými požiadavkami produktu a hlavne s cenou realizácie či samotného materiálu. Aktuálne sa zaoberám rozšírením počtu showroomových pobočiek do zvyšnej časti Slovenska a okolitých krajín EU.",
    tel: "+421XXXXXXXXX",
  },
];

export const TeamValuesEmpty = [
  {
    meno: "",
    funkcia: "",
    popis: "",
    tel: "",
  },
  {
    meno: "",
    funkcia: "",
    popis: "",
    tel: "",
  },
  {
    meno: "",
    funkcia: "",
    popis: "",
    tel: "",
  },
  {
    meno: "",
    funkcia: "",
    popis: "",
    tel: "",
  },
];

export const getFirstWord = (str: string) => {
  const words = str.split(" ");
  return words[0] || "";
};

// export const BLUR_DATA_URL_GRAY =
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC";

export const BLUR_DATA_URL_GRAY =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGN48uTJf2TMQFAAAGDvLAXo+D4xAAAAAElFTkSuQmCC";

export const colors_circles = [
  {
    farba: "#2E231A",
    type: "ipe",
  },
  {
    farba: "#4C3E3D",
    type: "redwood",
  },
  {
    farba: "#4E3829",
    type: "bangkirai",
  },
  {
    farba: "#5D331F",
    type: "mahagony",
  },
  {
    farba: "#7C4D1E",
    type: "meranti",
  },
  {
    farba: "#705436",
    type: "okume",
  },
  {
    farba: "#856C3F",
    type: "garapa",
  },

  {
    farba: "#A97E55",
    type: "teak",
  },
  {
    farba: "#A47E6A",
    type: "maple",
  },
  {
    farba: "#BFA083",
    type: "accoya",
  },
  {
    farba: "#98806E",
    type: "ivory",
  },
  {
    farba: "#808080",
    type: "sky",
  },
  {
    farba: "#7F6D5C",
    type: "vintage",
  },
  {
    farba: "#5E544A",
    type: "stone",
  },
  {
    farba: "#363837",
    type: "graphite",
  },
  {
    farba: "#42474B",
    type: "ebony",
  },
  {
    farba: "#607A4F",
    type: "green",
  },
  {
    farba: "#893D39",
    type: "red",
  },
  {
    farba: "#0087C5",
    type: "blue",
  },
  {
    farba: "#F68000",
    type: "orange",
  },
];

export const cloudfront_url = "https://d29wtx2fjqcm1t.cloudfront.net";

export const terasy_url = [
  {
    id: 1,
    type: "ipe",
    vertical: "/T_Z_Ipe.jpg",
    horizontal: "/T_Ipe.jpg",
  },
  {
    id: 2,
    type: "redwood",
    vertical: "/T_Z_Redwood.jpg",
    horizontal: "/T_Z_Redwood.jpg",
  },
  {
    id: 3,
    type: "bangkirai",
    vertical: "/T_Z_Bangkirai.jpg",
    horizontal: "/T_Bangkirai.jpg",
  },
  {
    id: 4,
    type: "mahagony",
    vertical: "/T_Z_Mahogany.jpg",
    horizontal: "/T_Mahogany.jpg",
  },
  {
    id: 5,
    type: "meranti",
    vertical: "/T_Z_Meranti.jpg",
    horizontal: "/T_Meranti.jpg",
  },
  {
    id: 6,
    type: "okume",
    vertical: "/T_Z_Okume.jpg",
    horizontal: "/T_Okume.jpg",
  },
  {
    id: 7,
    type: "garapa",
    vertical: "/T_Z_Garapa.jpg",
    horizontal: "/T_Garapa.jpg",
  },
  {
    id: 8,
    type: "teak",
    vertical: "/T_Z_Teak.jpg",
    horizontal: "/T_Z_Teak.jpg" /*Missing*/,
  },
  {
    id: 9,
    type: "maple",
    vertical: "/T_Z_Maple.jpg",
    horizontal: "/T_Z_Maple.jpg" /*Missing*/,
  },
  {
    id: 10,
    type: "accoya",
    vertical: "/T_Z_Accoya.jpg",
    horizontal: "/T_Z_Accoya.jpg" /*Missing*/,
  },
  {
    id: 11,
    type: "ivory",
    vertical: "/T_Z_Ivory.jpg",
    horizontal: "/T_Ivory.jpg",
  },
  {
    id: 12,
    type: "sky",
    vertical: "/T_Z_Sky.jpg",
    horizontal: "/T_Z_Sky.jpg" /*Missing*/,
  },
  {
    id: 13,
    type: "vintage",
    vertical: "/T_Z_Vintage.jpg",
    horizontal: "/T_Z_Vintage.jpg" /*Missing*/,
  },
  {
    id: 14,
    type: "stone",
    vertical: "/T_Z_Stone.jpg",
    horizontal: "/T_Z_Stone.jpg" /*Missing*/,
  },
  {
    id: 15,
    type: "graphite",
    vertical: "/T_Z_Graphite.jpg",
    horizontal: "/T_Graphite.jpg",
  },
  {
    id: 16,
    type: "ebony",
    vertical: "/T_Z_Ebony.jpg",
    horizontal: "/T_Z_Ebony.jpg",
  },
  {
    id: 17,
    type: "green",
    vertical: "/T_Z_Ebony.jpg" /*missing */,
    horizontal: "/T_Z_Ebony.jpg" /*Missing */,
  },
  {
    id: 18,
    type: "red",
    vertical: "/T_Z_Ebony.jpg" /*Missing*/,
    horizontal: "/T_Z_Ebony.jpg" /*Missing */,
  },
  {
    id: 19,
    type: "blue",
    vertical: "/T_Z_Ebony.jpg" /*Missing*/,
    horizontal: "/T_Z_Ebony.jpg" /*Missing*/,
  },
  {
    id: 20,
    type: "orange",
    vertical: "/T_Z_Ebony.jpg" /*Missing*/,
    horizontal: "/T_Z_Ebony.jpg" /*Missing*/,
  },
];

export const fasady_url = [
  {
    id: 1,
    type: "ipe",
    vertical: "/F_Z_Ipe.jpg",
    horizontal: "/F_H_Ipe.jpg",
  },
  {
    id: 2,
    type: "redwood",
    vertical: "/F_Z_Redwood.jpg",
    horizontal: "/F_H_Redwood.jpg",
  },
  {
    id: 3,
    type: "bangkirai",
    vertical: "/F_Z_Bangkirai.jpg",
    horizontal: "/F_H_Bangkirai.jpg",
  },
  {
    id: 4,
    type: "mahagony",
    vertical: "/F_Z_Mahogany.jpg",
    horizontal: "/F_H_Mahogany.jpg",
  },
  {
    id: 5,
    type: "meranti",
    vertical: "/F_Z_Meranti.jpg",
    horizontal: "/F_H_Meranti.jpg",
  },
  {
    id: 6,
    type: "okume",
    vertical: "/F_Z_Okume.jpg",
    horizontal: "/F_H_Okume.jpg",
  },
  {
    id: 7,
    type: "garapa",
    vertical: "/F_Z_Garapa.jpg",
    horizontal: "/F_H_Garapa.jpg",
  },

  {
    id: 8,
    type: "teak",
    vertical: "/F_Z_Teak.jpg",
    horizontal: "/F_H_Teak.jpg",
  },
  {
    id: 9,
    type: "maple",
    vertical: "/F_Z_Maple.jpg",
    horizontal: "/F_H_Maple.jpg",
  },
  {
    id: 10,
    type: "accoya",
    vertical: "/F_Z_Accoya.jpg",
    horizontal: "/F_H_Accoya.jpg",
  },
  {
    id: 11,
    type: "ivory",
    vertical: "/F_Z_Ivory.jpg",
    horizontal: "/F_H_Ivory.jpg",
  },
  {
    id: 12,
    type: "sky",
    vertical: "/F_Z_Sky.jpg",
    horizontal: "/F_H_Sky.jpg",
  },
  {
    id: 13,
    type: "vintage",
    vertical: "/F_Z_Vintage.jpg",
    horizontal: "/F_H_Vintage.jpg",
  },
  {
    id: 14,
    type: "stone",
    vertical: "/F_H_Graphite.jpg" /*Missing*/,
    horizontal: "/F_H_Graphite.jpg" /*Missing*/,
  },
  {
    id: 15,
    type: "graphite",
    vertical: "/F_Z_Graphite.jpg",
    horizontal: "/F_H_Graphite.jpg",
  },
  {
    id: 16,
    type: "ebony",
    vertical: "/F_Z_Ebony.jpg",
    horizontal: "/F_H_Ebony.jpg",
  },
  {
    id: 17,
    type: "green",
    vertical: "/F_Z_Green.jpg",
    horizontal: "/F_H_Green.jpg",
  },
  {
    id: 18,
    type: "red",
    vertical: "/F_Z_Red.jpg",
    horizontal: "/F_H_Red.jpg",
  },
  {
    id: 19,
    type: "blue",
    vertical: "/F_Z_Blue.jpg",
    horizontal: "/F_H_Blue.jpg",
  },
  {
    id: 20,
    type: "orange",
    vertical: "/F_Z_Orange.jpg",
    horizontal: "/F_H_Orange.jpg",
  },
];

export const ploty_url = [
  {
    id: 1,
    type: "ipe",
    vertical: "/Plot_Ipe.jpg",
    horizontal: "/Plot_Ipe.jpg",
  },
  {
    id: 2,
    type: "redwood",
    vertical: "/Plot_Redwood.jpg",
    horizontal: "/Plot_Redwood.jpg",
  },
  {
    id: 3,
    type: "bangkirai",
    vertical: "/Plot_Bangkirai.jpg",
    horizontal: "/Plot_Bangkirai.jpg",
  },
  {
    id: 4,
    type: "mahagony",
    vertical: "/Plot_Mahogany.jpg",
    horizontal: "/Plot_Mahogany.jpg",
  },
  {
    id: 5,
    type: "meranti",
    vertical: "/Plot_Meranti.jpg",
    horizontal: "/Plot_Meranti.jpg",
  },
  {
    id: 6,
    type: "okume",
    vertical: "/Plot_Okume.jpg",
    horizontal: "/Plot_Okume.jpg",
  },
  {
    id: 7,
    type: "garapa",
    vertical: "/Plot_Garapa.jpg",
    horizontal: "/Plot_Garapa.jpg",
  },

  {
    id: 8,
    type: "teak",
    vertical: "/Plot_Teak.jpg",
    horizontal: "/Plot_Teak.jpg",
  },
  {
    id: 9,
    type: "maple",
    vertical: "/Plot_Maple.jpg",
    horizontal: "/Plot_Maple.jpg",
  },
  {
    id: 10,
    type: "accoya",
    vertical: "/Plot_Accoya.jpg",
    horizontal: "/Plot_Accoya.jpg",
  },
  {
    id: 11,
    type: "ivory",
    vertical: "/Plot_Ivory.jpg",
    horizontal: "/Plot_Ivory.jpg",
  },
  {
    id: 12,
    type: "sky",
    vertical: "/Plot_Sky.jpg",
    horizontal: "/Plot_Sky.jpg",
  },
  {
    id: 13,
    type: "vintage",
    vertical: "/Plot_Vintage.jpg",
    horizontal: "/Plot_Vintage.jpg",
  },
  {
    id: 14,
    type: "stone",
    vertical: "/Plot_Stone.jpg",
    horizontal: "/Plot_Stone.jpg",
  },
  {
    id: 15,
    type: "graphite",
    vertical: "/Plot_Graphite.jpg",
    horizontal: "/Plot_Graphite.jpg",
  },
  {
    id: 16,
    type: "ebony",
    vertical: "/Plot_Ebony.jpg",
    horizontal: "/Plot_Ebony.jpg",
  },
  {
    id: 17,
    type: "green",
    vertical: "/Plot_Ebony.jpg" /*Missing */,
    horizontal: "/Plot_Ebony.jpg" /*Missing */,
  },
  {
    id: 18,
    type: "red",
    vertical: "/Plot_Ebony.jpg" /*Missing*/,
    horizontal: "/Plot_Ebony.jpg" /*Missing*/,
  },
  {
    id: 19,
    type: "blue",
    vertical: "/Plot_Ebony.jpg" /*Missing*/,
    horizontal: "/Plot_Ebony.jpg" /*Missing*/,
  },
  {
    id: 20,
    type: "orange",
    vertical: "/Plot_Ebony.jpg" /*Missing*/,
    horizontal: "/Plot_Ebony.jpg" /*Missing*/,
  },
];

export const slnolamy_url = [
  {
    id: 1,
    type: "ipe",
    vertical: "/SP_Ipe.jpg",
    horizontal: "/SP_Ipe.jpg",
  },
  {
    id: 2,
    type: "redwood",
    vertical: "/SP_Redwood.jpg",
    horizontal: "/SP_Redwood.jpg",
  },
  {
    id: 3,
    type: "bangkirai",
    vertical: "/SP_Bangkirai.jpg",
    horizontal: "/SP_Bangkirai.jpg",
  },
  {
    id: 4,
    type: "mahagony",
    vertical: "/SP_Mahogany.jpg",
    horizontal: "/SP_Mahogany.jpg",
  },
  {
    id: 5,
    type: "meranti",
    vertical: "/SP_Meranti.jpg",
    horizontal: "/SP_Meranti.jpg",
  },
  {
    id: 6,
    type: "okume",
    vertical: "/SP_Okume.jpg",
    horizontal: "/SP_Okume.jpg",
  },
  {
    id: 7,
    type: "garapa",
    vertical: "/SP_Garapa.jpg",
    horizontal: "/SP_Garapa.jpg",
  },

  {
    id: 8,
    type: "teak",
    vertical: "/SP_Teak.jpg",
    horizontal: "/SP_Teak.jpg",
  },
  {
    id: 9,
    type: "maple",
    vertical: "/SP_Maple.jpg",
    horizontal: "/SP_Maple.jpg",
  },
  {
    id: 10,
    type: "accoya",
    vertical: "/Slnolam- Pergola-Accoya.jpg",
    horizontal: "/Slnolam- Pergola-Accoya.jpg",
  },
  {
    id: 11,
    type: "ivory",
    vertical: "/SP_Ivory.jpg",
    horizontal: "/SP_Ivory.jpg",
  },
  {
    id: 12,
    type: "sky",
    vertical: "/SP_Sky.jpg",
    horizontal: "/SP_Sky.jpg",
  },
  {
    id: 13,
    type: "vintage",
    vertical: "/SP_Vintage.jpg",
    horizontal: "/SP_Vintage.jpg",
  },
  {
    id: 14,
    type: "stone",
    vertical: "/SP_Stone.jpg",
    horizontal: "/SP_Stone.jpg",
  },
  {
    id: 15,
    type: "graphite",
    vertical: "/SP_Graphite.jpg",
    horizontal: "/SP_Graphite.jpg",
  },
  {
    id: 16,
    type: "ebony",
    vertical: "/SP_Ebony.jpg",
    horizontal: "/SP_Ebony.jpg",
  },
  {
    id: 17,
    type: "green",
    vertical: "/SP_Ebony.jpg" /*Missing */,
    horizontal: "/SP_Ebony.jpg" /*Missing */,
  },
  {
    id: 18,
    type: "red",
    vertical: "/SP_Ebony.jpg" /*Missing*/,
    horizontal: "/SP_Ebony.jpg" /*Missing*/,
  },
  {
    id: 19,
    type: "blue",
    vertical: "/SP_Ebony.jpg" /*Missing*/,
    horizontal: "/SP_Ebony.jpg" /*Missing*/,
  },
  {
    id: 20,
    type: "orange",
    vertical: "/SP_Ebony.jpg" /*Missing*/,
    horizontal: "/SP_Ebony.jpg" /*Missing*/,
  },
];

export const services_elements = [
  {
    nazov: "Terasy",
    slug: "terasy",
  },
  {
    nazov: "Fasády",
    slug: "fasady",
  },
  {
    nazov: "Bazény",
    slug: "bazeny",
  },
  {
    nazov: "Slnolamy",
    slug: "slnolamy",
  },
  {
    nazov: "Ploty",
    slug: "ploty",
  },
  {
    nazov: "Ostatné",
    slug: "ostatne",
  },
];

export const aws_bucket_name = "timbermaxopen";

export const aws_bucket_url =
  "https://timbermaxopen.s3.eu-north-1.amazonaws.com";

export const price_material_tim = 143.52;
export const dph = 0.23;

export const price_work_tim = 38;
export const price_vrn_tim = 13;

export const terracePriceTimbermax = (size: number) => {
  const final_price = (price_material_tim + price_material_tim * dph) * size;

  return final_price.toFixed();
};

export const terracePriceTimbermaxOther = (size: number) => {
  const final_price =
    (price_work_tim + price_work_tim * dph) * size +
    (price_vrn_tim + price_vrn_tim * dph) * size;

  return final_price.toFixed();
};

export const terracePriceTimbermaxPerYear = (size: number, years: number) => {
  const price1 = parseInt(terracePriceTimbermax(size));
  const price2 = parseInt(terracePriceTimbermaxOther(size));

  const final_price = (price1 + price2) / years;

  return final_price.toFixed();
};
