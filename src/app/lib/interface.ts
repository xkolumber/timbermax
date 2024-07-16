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

export interface Sluzby {
  nadpis: string;
  popis: string;
}

export interface TimbermaxLike {
  nadpis: string;
  popis: string;
  link: string;
}
