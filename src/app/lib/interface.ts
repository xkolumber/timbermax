export interface Jazyk {
  jazyk: string;
}

export interface HomePageElements {
  button_citat_viac: string;
  button_vypocet: string;
  cenova_p_nadpis: string;
  cenova_p_popis1: string;
  cenova_p_popis2: string;
  jazyk: string;
  mapa_showroomov: string;
  nase_sluzby_nadpis: string;
  nase_sluzby_veta: string;
  nase_sluzby_popis: string;
  o_nas_nadpis: string;
  o_nas_popis: string;
  o_nas_elements: string[];

  ref_elements: string[];
  rokov_skusenosti: string;
  sluzby: Sluzby[];
  svg_titles: string[];
  timbermax_ako: TimbermaxLike[];
  timbermax_ako_mobile_nadpis: string;
  timbermax_ako_mobile_popisy: TimbermaxLike[];
  text_photo1: string;
  text_photo2: string;
  text_photo3: string;
  text_photo4: string;
  text_photo5: string;
  text_photo6: string;
  text_photo7: string;
  text_photo8: string;
  references_title: string;
  references: string[];
}

export interface AboutUsElements {
  o_nas: string;
  citat: string;
  history_nadpis: string;
  history_popis: string;
  filozofia_nadpis: string;
  filozofia_popis1: string;
  filozofia_popis2: string;
  filozofia_popis3: string;
  jazyk: string;
  spoznajte_tim: string;
  staviame_znacka: string;
  tim: Team[];
}

export interface MoreAboutTimElements {
  nadpis: string;
  popis1: string;
  popis2: string;
  popis_porovnanie: string;
  tim_vs_konk: string;
  next_popis1: string;
  next_popis2: string;
  next_popis3: string;
  next_popis4: string;
  btn_exotic: string;
  btn_rustic: string;
  jazyk: string;
  pod_btn: string;
  another_popis1: string;
  another_popis2: string;
  lahko_nadpis: string;
  lahko_popis: string;
  fareb_nadpis: string;
  fareb_popis: string;
  tepel_nadpis: string;
  tepel_popis: string;
  prehrev_nadpis: string;
  prehrev_popis1: string;
  prehrev_popis2: string;
  prehrev_popis3: string;
  prehrev_popis4: string;
  prehrev_popis5: string;
  prehrev_popis6: string;
  mech_nadpis: string;
  mech_popis: string;
  tvar_nadpis: string;
  tvar_popis1: string;
  tvar_popis2: string;
  tvar_popis3: string;
  tvar_popis4: string;
  tvar_popis5: string;
  tvar_popis6: string;
  tvar_popis7: string;
  profil_nadpis: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface PriceOffer {
  cennik_stiahnutie: string;
  ceny_sposob_nadpis: string;
  ceny_sposob_popis: string;
  popis_nad_fotkou: string;
  profil_nadpis: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  profil_popis5: string;
  profil_popis6: string;
  dielo_nadpis: string;
  dielo_popis: string;
  relacia_nadpis: string;
  relacia_popis1: string;
  relacia_popis2: string;
  relacia_lista1: string;
  relacia_lista2: string;
  relacie: Sluzby[];
  jazyk: string;
  cenova_ponuka_nadpis: string;
  cenova_ponuka_popis: string;
  nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  posl_popis1: string;
  posl_popis2: string;
  posl_popis3: string;
  posl_popis4: string;
}

export interface Nacenovac {
  nadpis: string;
  popis: string;
  button: string;
  link: string;
}

export interface Team {
  meno: string;
  funkcia: string;
  popis: string;
  tel: string;
}

export interface Sluzby {
  nadpis: string;
  popis: string;
}

export interface TimbermaxLike {
  nadpis: string;
  popis: string;
  link: string;
}

export interface NavbarSection {
  nazov: string;
  link: string;
  icon?: any;
}

export interface NavbarItem {
  id: string;
  nazov: string;
  sekcie: NavbarSection[];
  link?: string;
}

export interface Navbars {
  [key: string]: NavbarItem[];
}

export interface FooterItem {
  sidlo: string;
  sklad: string;
  vzorkova_predajna: string;
  kontakt: string;
  social: string;
  ochrana: string;
}

export interface GalleryObject {
  title: string;
}

export interface Footers {
  [key: string]: FooterItem[];
}
export interface GalleryObjects {
  [key: string]: GalleryObject[];
}

export interface Slnolamy {
  nadpis: string;
  popis1: string;
  popis2: string;
  vlastnosti: string[];
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Ostatne {
  nadpis: string;
  popis1: string;
  popis2: string;
  vlastnosti: string[];
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Bazeny {
  nadpis: string;
  popis1: string;
  popis2: string;
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Ploty {
  nadpis: string;
  popis1: string;
  popis2: string;
  vlastnosti: string[];
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Terasy {
  nadpis: string;
  popis1: string;
  popis2: string;
  vlastnosti: string[];
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Fasady {
  nadpis: string;
  popis1: string;
  popis2: string;
  btn_odvetrana: string;
  btn_predsadena: string;
  nadpis_galeria: string;
  nadpis_informacie: string;
  popis_informacie_1: string;
  info_variants: string[];
  jazyk: string;
  fareb_var_popis1: string;
  fareb_var_popis2: string;
  vlastnosti_popis1: string;
  vlastnosti_popis2: string;
  vlastnosti_popis3: string;
  vlastnosti_popis4: string;
  vlastnosti_nadpis_: string;
  vlastnosti_popis5: string;
  vlastnosti_popis6: string;
  vlastnosti_popis7: string;
  vlastnosti_popis8: string;
  vlastnosti_btn_viac: string;
  vlastnosti_btn_konkurencia: string;
  montaz_nadpis: string;
  montaz_popis1: string;
  montaz_popis2: string;
  montaz_popis3: string;
  montaz_popis4: string;
  montaz_nadpis_2: string;
  montaz_nadpis_2_category: string;
  montaz_nadpis_2_category_popis1: string;
  montaz_nadpis_2_category_popis2: string;
  montaz_nadpis_2_category_popis3: string;
  montaz_nadpis_2_category2: string;
  montaz_nadpis_2_category2_popis1: string;
  montaz_nadpis_2_category2_popis2: string;
  montaz_nadpis_2_category2_popis3: string;
  montaz_nadpis_2_category2_popis4: string;
  montaz_nadpis_2_category3: string;
  montaz_nadpis_2_category3_popis1: string;
  montaz_nadpis_2_category3_popis2: string;
  montaz_nadpis_2_category3_popis3: string;
  montaz_nadpis_2_category3_popis4: string;
  montaz_nadpis_2_category4: string;
  montaz_nadpis_2_category4_popis1: string;
  montaz_nadpis_2_category4_popis2: string;
  montaz_nadpis_2_category4_popis3: string;
  profil_orientacia: string;
  profil_popis1: string;
  profil_popis2: string;
  profil_popis3: string;
  profil_popis4: string;
  postup_popis: string;
  postup_nacenovac: string;
  nacenovac_sekcie: Nacenovac[];
  nadpis_vizualizacia: string;
  popis_viz_1: string;
  farba: string;
  btn_ceny: string;
  btn_kalkulator: string;
}

export interface Gallery {
  datum_pridania: string;
  fotky: string[];
  kategorie: string[];
  nazov: string;
  profil: string;
  farba: string;
  id: string;
  jazyky_kontent: GalleryTranslate[];
  partition_key: string;
}

export interface BlogInterface {
  id: string;
  title: string;
  date: string;
  slug: string;
  title_photo: string;
  partition_key: string;
  language_content: BlogContent[];
}

export interface BlogContent {
  language: string;
  text1: string;
  text2: string;
  text3: string;
}

export interface GalleryTranslate {
  jazyk: string;
  nazov_farba: string;
  nazov_profil: string;
  nazov_projekt: string;
  popis1: string;
  popis2: string;
  popis3: string;
}

export interface IsLoadingMap {
  [key: string]: boolean;
}

export interface Prevadzka {
  id: string;
  kraj: string;
  adresa: string;
  photo: string;
  hodiny: OpeningHours;
}

export interface OpeningHours {
  pon: string;
  ut: string;
  st: string;
  stv: string;
  pi: string;
  sob: string;
  ne: string;
}

export interface ContactPage {
  kontakt_nadpis: string;
  tel_number: string;
  email: string;
  vzorkovne_nadpis: string;
  vzorkovne_popis1: string;
  vzorkovne_popis2: string;
  vzorkovne_popis3: string;
  vzorkovne_popis4: string;
  prevadzky_nadpis: string;
  otvaracie_hodiny: string;
  hodiny: OpeningHours;
  sidlo_nadpis: string;
  sidlo: string;
  sidlo_popis1: string;
  sidlo_popis2: string;
  sidlo_popis3: string;
}

export interface TeamMember {
  job: string;
  meno: string;
  main_image: string;
  image: string;
  text: string;
  tel: string;
}

export interface PalleteObject {
  farba: string;
  type: string;
}

export interface ObjectInteface {
  id: number;
  type: string;
  vertical: string;
  horizontal: string;
}

export interface LanguagesAdming {
  id: string;
  jazyk: string;
}
