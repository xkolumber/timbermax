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
  nase_sluzby_nadpis: string;
  nase_sluzby_veta: string;
  nase_sluzby_popis: string;
  o_nas_nadpis: string;
  o_nas_popis: string;
  o_nas_elements: string[];
  ref_elements: string[];
  sluzby: Sluzby[];
  svg_titles: string[];
  timbermax_ako: TimbermaxLike[];
}

export interface AboutUsElements {
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

export interface Team {
  meno: string;
  funkcia: string;
  popis: string;
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
