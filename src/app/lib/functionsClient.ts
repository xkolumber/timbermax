"use client";

import imageCompression from "browser-image-compression";
import { OpeningHours, Prevadzka } from "./interface";

export function getSecondPathValue(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[1] || null;
}

export const empty_three_values = ["", "", ""];
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
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%207.png?alt=media&token=86fa35b8-c8d6-4211-9bf2-194fb3ddf8d4",
    text: "ipe",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%206.png?alt=media&token=8f4a928d-9153-4ffa-bff2-93f5aca8948b",
    text: "redwood",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2024.png?alt=media&token=2986ad17-d47a-49c9-8ac5-3b2f0989d0d6",
    text: "bangkirai",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%208.png?alt=media&token=a3fafba3-d9fd-4211-91a9-ef690e7d0548",
    text: "mahagony",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%209.png?alt=media&token=ab24958e-0cb8-46c3-99ed-7d34098279f8",
    text: "meranti",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2010.png?alt=media&token=73887293-ff56-4199-9ab9-479da5004791",
    text: "okume",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2011.png?alt=media&token=85b5ba3f-6ae7-4aa6-b232-e5ca7cb7630a",
    text: "garapa",
  },

  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2012.png?alt=media&token=d8befabe-1ea0-429e-8564-10027d7d5a0b",
    text: "teak",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2013.png?alt=media&token=dbb9a37f-8c58-4022-bcf8-7aeed89ec003",
    text: "maple",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2014.png?alt=media&token=6adca59a-c98e-4139-8ec1-a2b0b7b0b7f7",
    text: "accoya",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2015.png?alt=media&token=b7d76f61-d1b8-4a24-bbec-f9fe5837e209",
    text: "vory",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2016.png?alt=media&token=51610635-7765-4c7e-9c61-96fea97fce2b",
    text: "sky",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2017.png?alt=media&token=293055ad-8015-4513-b6c1-60126bcc96f8",
    text: "vintage",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2018.png?alt=media&token=550cab5c-f04b-4c89-85bb-91dda62f1612",
    text: "stone",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2019.png?alt=media&token=8a3a6eda-14f7-4ef2-b18f-a362a5a1c06a",
    text: "graphite",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2020.png?alt=media&token=f53b1e31-0f48-4b55-83cd-c29d38e70902",
    text: "ebony",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2021.png?alt=media&token=82cd671c-c2cb-4c33-9eb8-6348030d4cda",
    text: "green",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%2022.png?alt=media&token=093c216d-bbd9-44dc-9105-804788033657",
    text: "red",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%203.png?alt=media&token=f43771de-eacf-4ccf-b948-33503cb83f91",
    text: "orange",
  },
  {
    farba:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/farby%2FAsset%204.png?alt=media&token=87013b8b-3385-462e-a70d-b9332730f681",
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
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fpeter_pc.png?alt=media&token=f42bd2f6-46e5-49b6-88bc-5b1499024adf",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fpeter_mobile.png?alt=media&token=c7b520a4-a155-4d18-b436-9fc639b96248",
    text: "Stavebníctvu a WPC materiálom sa venujem už 20 rokov. Zodpovedám za finálne prevedenie zákazky, návrh dizajnu profilov a technického riešenia montáže. Spolu s Daliborom som postavil túto firmu na prepojení kvalitného materiálu so správnym technickým prevedením montáže. Pokiaľ udržíme nadstavenú latku týchto dvoch pilierov nemá potenciál firmy hraníc. Nadšenie klienta z každého detailu podľa jeho predstavy je pre mňa prioritou. Cieľom každej realizácie je, aby som si po dokončení zákazky mohol povedať, že takúto terasu či fasádu chcem mať aj u seba doma. Snažím sa kontolovať kvalitatívne prevedenie každej stavby po jej dokončení a byť pri jej finálnom odovzdaní. Aktuálne sa venujem primárne rozvoju firmy a zahraničnej expanzii.",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "COO",
    meno: "Dalibor Lenárt",
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fdalibor_pc.png?alt=media&token=fa7c1359-45ac-464a-a76a-0e1179fc59bf",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fdalibor_mobile.png?alt=media&token=558ba676-cd46-40b5-a12b-57b02a4b6979",
    text: "WPC materiálmi a možnostiam ich použitia sa venujem už viac ako 25 rokov. Zodpovedám za zabezpečenie plynulého chodu firmy, zefektívnenie a optimalizáciu procesov, komunikáciu s výrobným procesom, zazmluvňovanie zákaziek a koordináciu montážnych skupín. S klientom komunikujem po oficiálnom schválení cenovej ponuky, upravujem zmluvy aby sedeli presne podľa parametrov stavby a zohľadňujem v nej aj špecifické požiadavky zákazníka. Dbám na spokojnosti klientov a dodržanie stanovených časových rámcov. Dlhodobo sa venujem rozširovaniu sortimentu pre dosiahnutie najširšej škály farebných odtieňov na Európskom trhu. Spracovávam ponuky novovznikajúcich pokrokových výrobných technológii. Komunikujem s firmami o prípadnej spolupráci. ",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "Vedúca klientely",
    meno: "Ivana Lénartová",
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fzena_pc.png?alt=media&token=d0b484ac-7366-4318-a63b-7f3b8b210c3d",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fzena_mobile.png?alt=media&token=b3d28e76-1bc4-45df-8976-2ef0479e300d",
    text: "Patrím k služobne najskúsenejším členom postupne rozrastajúceho sa tímu. Verím v efektivitu a kvalitne odvedenú prácu. Zabezpečujem klientelistický servis, doskladňovanie materiálov, správu rozvozov objednávok a vypomáham so zazmluvňovaním zákaziek. Pri finálnom spracovaní zákazky dokážem klietom kvalitne poradiť či už pri výbere farebnosti variantov, základných technických otázkach alebo správnom umiestnení požadovaného obkladu. ",
    tel: "+421XXXXXXXXX",
  },
  {
    job: "Architekt",
    meno: "Pavol Remenár",
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fpalo_pc.png?alt=media&token=279432e1-8188-4449-ab81-fc42e95e4a0d",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fteam%2Fpalo_mobile.png?alt=media&token=138677cb-78f0-4575-9dcd-25a018f2874e",
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
