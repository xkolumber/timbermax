import { FooterItem, Footers } from "../lib/interface";

export const footer_sk: FooterItem[] = [
  {
    sidlo: "Sídlo spoločnosti",
    sklad: "Sklad a showroom",
    vzorkova_predajna: "Vzorková predajňa",
    kontakt: "Kontakt",
    social: "Sociálne siete",
    ochrana: "Ochrana osobných údajov",
  },
];

export const footer_cz: FooterItem[] = [
  {
    sidlo: "Sídlo společnosti",
    sklad: "Sklad a showroom",
    vzorkova_predajna: "Vzorková prodejna",
    kontakt: "Kontakt",
    social: "Sociální sítě",
    ochrana: "Ochrana osobních údajů",
  },
];

export const footer_en: FooterItem[] = [
  {
    sidlo: "Company Headquarters",
    sklad: "Warehouse and Showroom",
    vzorkova_predajna: "Sample Store",
    kontakt: "Contact",
    social: "Socials",
    ochrana: "Privacy Policy",
  },
];

export const footers: Footers = {
  sk: footer_sk,
  en: footer_en,
  cz: footer_cz,
};
