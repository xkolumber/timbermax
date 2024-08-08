"use client";

import imageCompression from "browser-image-compression";
import { Prevadzka } from "./interface";

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
    kraj: "Trnavský Kraj",
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
