"use server";

import { getFirestore } from "firebase-admin/firestore";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { firestore } from "./firebaseServer";
import { Jazyk, Nacenovac, Sluzby, Team, TimbermaxLike } from "./interface";
import { cookies } from "next/headers";

const FormSchema = z.object({
  jazyk: z.string(),
});

export async function addLanguage(formData: FormData) {
  const parsedData = FormSchema.parse({
    jazyk: formData.get("jazyk"),
  });

  const db = getFirestore();
  const produktyCollectionRef = db.collection("jazyky");

  try {
    await produktyCollectionRef.add({ jazyk: parsedData.jazyk });
    revalidatePath("/languages");
    redirect("/languages");
  } catch (error) {
    console.error("Database Error: Failed to add language.", error);
    return {
      message: "Database Error: Failed to add language.",
    };
  }
}

export async function GetLanguages(): Promise<Jazyk[]> {
  unstable_noStore();
  const produktyCollectionRef = firestore.collection("jazyky");

  try {
    const snapshot = await produktyCollectionRef.get();
    const languages: Jazyk[] = snapshot.docs.map((doc) => {
      return {
        ...(doc.data() as Jazyk),
      };
    });

    return languages;
  } catch (error) {
    console.error("Database Error: Failed to fetch languages.", error);
    throw new Error("Database Error: Failed to fetch languages.");
  }
}

export async function doRevalidate(pathname: string) {
  revalidatePath(pathname);
}

export const getToken = async () => {
  const cookieStore = cookies();
  const authTokenCookie = cookieStore.get("FirebaseIdTokenTim");
  return authTokenCookie?.value;
};

export async function AdminactualizeHomePage(
  button_citat_viac: string,
  button_vypocet: string,
  cenova_p_nadpis: string,
  cenova_p_popis1: string,
  cenova_p_popis2: string,
  jazyk: string,
  nase_sluzby_nadpis: string,
  nase_sluzby_veta: string,
  nase_sluzby_popis: string,
  o_nas_nadpis: string,
  o_nas_popis: string,
  o_nas_elements: string[],
  ref_elements: string[],
  sluzby: Sluzby[],
  svg_titles: string[],
  timbermax_ako: TimbermaxLike[]
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("homepage");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");
    return "false";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    button_citat_viac,
    button_vypocet,
    cenova_p_nadpis,
    cenova_p_popis1,
    cenova_p_popis2,
    jazyk,
    nase_sluzby_nadpis,
    nase_sluzby_veta,
    nase_sluzby_popis,
    o_nas_nadpis,
    o_nas_popis,
    o_nas_elements,
    ref_elements,
    sluzby,
    svg_titles,
    timbermax_ako,
  });
  revalidatePath(`/admin/domov/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeAboutUsPage(
  citat: string,
  history_nadpis: string,
  history_popis: string,
  filozofia_nadpis: string,
  filozofia_popis1: string,
  filozofia_popis2: string,
  filozofia_popis3: string,
  jazyk: string,
  spoznajte_tim: string,
  staviame_znacka: string,
  tim: Team[]
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("about-us");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      citat: citat,
      history_nadpis: history_nadpis,
      history_popis: history_popis,
      filozofia_nadpis: filozofia_nadpis,
      filozofia_popis1: filozofia_popis1,
      filozofia_popis2: filozofia_popis2,
      filozofia_popis3: filozofia_popis3,
      jazyk: jazyk,
      spoznajte_tim: spoznajte_tim,
      staviame_znacka: staviame_znacka,
      tim: tim,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    citat: citat,
    history_nadpis: history_nadpis,
    history_popis: history_popis,
    filozofia_nadpis: filozofia_nadpis,
    filozofia_popis1: filozofia_popis1,
    filozofia_popis2: filozofia_popis2,
    filozofia_popis3: filozofia_popis3,
    jazyk: jazyk,
    spoznajte_tim: spoznajte_tim,
    staviame_znacka: staviame_znacka,
    tim: tim,
  });
  revalidatePath(`/admin/o-nas/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeMoreAboutPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  popis_porovnanie: string,
  tim_vs_konk: string,
  next_popis1: string,
  next_popis2: string,
  next_popis3: string,
  next_popis4: string,
  btn_exotic: string,
  btn_rustic: string,
  pod_btn: string,
  jazyk: string,
  another_popis1: string,
  another_popis2: string,
  lahko_nadpis: string,
  lahko_popis: string
) {
  console.log(jazyk);
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("more-about");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      popis_porovnanie: popis_porovnanie,
      tim_vs_konk: tim_vs_konk,
      next_popis1: next_popis1,
      next_popis2: next_popis2,
      next_popis3: next_popis3,
      next_popis4: next_popis4,
      btn_exotic: btn_exotic,
      btn_rustic: btn_rustic,
      pod_btn: pod_btn,
      jazyk: jazyk,
      another_popis1: another_popis1,
      another_popis2: another_popis2,
      lahko_nadpis: lahko_nadpis,
      lahko_popis: lahko_popis,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    popis_porovnanie: popis_porovnanie,
    tim_vs_konk: tim_vs_konk,
    next_popis1: next_popis1,
    next_popis2: next_popis2,
    next_popis3: next_popis3,
    next_popis4: next_popis4,
    btn_exotic: btn_exotic,
    btn_rustic: btn_rustic,
    pod_btn: pod_btn,
    jazyk: jazyk,
    another_popis1: another_popis1,
    another_popis2: another_popis2,
    lahko_nadpis: lahko_nadpis,
    lahko_popis: lahko_popis,
  });
  revalidatePath(`/admin/viac-o-timbermaxe/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizePriceOffer(
  cennik_stiahnutie: string,
  ceny_sposob_nadpis: string,
  ceny_sposob_popis: string,
  popis_nad_fotkou: string,
  profil_nadpis: string,
  profil_popis1: string,
  profil_popis2: string,
  profil_popis3: string,
  profil_popis4: string,
  profil_popis5: string,
  profil_popis6: string,
  dielo_nadpis: string,
  dielo_popis: string,
  relacia_nadpis: string,
  relacia_popis1: string,
  relacia_popis2: string,
  relacia_lista1: string,
  relacia_lista2: string,
  relacie: Sluzby[],
  jazyk: string,
  cenova_ponuka_nadpis: string,
  cenova_ponuka_popis: string,
  nacenovac: string,
  nacenovac_sekcie: Nacenovac[],
  posl_popis1: string,
  posl_popis2: string,
  posl_popis3: string,
  posl_popis4: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("price-offer");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      cennik_stiahnutie: cennik_stiahnutie,
      ceny_sposob_nadpis: ceny_sposob_nadpis,
      ceny_sposob_popis: ceny_sposob_popis,
      popis_nad_fotkou: popis_nad_fotkou,
      profil_nadpis: profil_nadpis,
      profil_popis1: profil_popis1,
      profil_popis2: profil_popis2,
      profil_popis3: profil_popis3,
      profil_popis4: profil_popis4,
      profil_popis5: profil_popis5,
      profil_popis6: profil_popis6,
      dielo_nadpis: dielo_nadpis,
      dielo_popis: dielo_popis,
      relacia_nadpis: relacia_nadpis,
      relacia_popis1: relacia_popis1,
      relacia_popis2: relacia_popis2,
      relacia_lista1: relacia_lista1,
      relacia_lista2: relacia_lista2,
      relacie: relacie,
      jazyk: jazyk,
      cenova_ponuka_nadpis: cenova_ponuka_nadpis,
      cenova_ponuka_popis: cenova_ponuka_popis,
      nacenovac: nacenovac,
      nacenovac_sekcie: nacenovac_sekcie,
      posl_popis1: posl_popis1,
      posl_popis2: posl_popis2,
      posl_popis3: posl_popis3,
      posl_popis4: posl_popis4,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    cennik_stiahnutie: cennik_stiahnutie,
    ceny_sposob_nadpis: ceny_sposob_nadpis,
    ceny_sposob_popis: ceny_sposob_popis,
    popis_nad_fotkou: popis_nad_fotkou,
    profil_nadpis: profil_nadpis,
    profil_popis1: profil_popis1,
    profil_popis2: profil_popis2,
    profil_popis3: profil_popis3,
    profil_popis4: profil_popis4,
    profil_popis5: profil_popis5,
    profil_popis6: profil_popis6,
    dielo_nadpis: dielo_nadpis,
    dielo_popis: dielo_popis,
    relacia_nadpis: relacia_nadpis,
    relacia_popis1: relacia_popis1,
    relacia_popis2: relacia_popis2,
    relacia_lista1: relacia_lista1,
    relacia_lista2: relacia_lista2,
    relacie: relacie,
    jazyk: jazyk,
    cenova_ponuka_nadpis: cenova_ponuka_nadpis,
    cenova_ponuka_popis: cenova_ponuka_popis,
    nacenovac: nacenovac,
    nacenovac_sekcie: nacenovac_sekcie,
    posl_popis1: posl_popis1,
    posl_popis2: posl_popis2,
    posl_popis3: posl_popis3,
    posl_popis4: posl_popis4,
  });
  revalidatePath(`/admin/cennik/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeSlnolamyPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("slnolamy");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/slnolamy/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizePlotyPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("ploty");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/ploty/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeOstatnePage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("ostatne");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/ostatne/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeBazenyPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("bazeny");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/bazeny/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeTerasyPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("terasy");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/terasy/[${jazyk}]/page`, "page");
  return "success";
}

export async function AdminActualizeFasadyPage(
  nadpis: string,
  popis1: string,
  popis2: string,
  vlastnosti: string[],
  nadpis_galeria: string,
  nadpis_informacie: string,
  popis_informacie_1: string,
  info_variants: string[],
  jazyk: string,
  popis_informacie_2: string,
  popis_informacie_3: string,
  nadpis_vizualizacia: string,
  popis_viz_1: string,
  farba: string,
  btn_ceny: string,
  btn_kalukator: string
) {
  console.log(jazyk);
  const db = getFirestore();
  const podstrankaCollectionRef = db.collection("fasady");
  const querySnapshot = await podstrankaCollectionRef
    .where("jazyk", "==", jazyk)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");

    await podstrankaCollectionRef.add({
      nadpis: nadpis,
      popis1: popis1,
      popis2: popis2,
      vlastnosti: vlastnosti,
      nadpis_galeria: nadpis_galeria,
      nadpis_informacie: nadpis_informacie,
      popis_informacie_1: popis_informacie_1,
      info_variants: info_variants,
      jazyk: jazyk,
      popis_informacie_2: popis_informacie_2,
      popis_informacie_3: popis_informacie_3,
      nadpis_vizualizacia: nadpis_vizualizacia,
      popis_viz_1: popis_viz_1,
      farba: farba,
      btn_ceny: btn_ceny,
      btn_kalukator: btn_kalukator,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    nadpis: nadpis,
    popis1: popis1,
    popis2: popis2,
    vlastnosti: vlastnosti,
    nadpis_galeria: nadpis_galeria,
    nadpis_informacie: nadpis_informacie,
    popis_informacie_1: popis_informacie_1,
    info_variants: info_variants,
    jazyk: jazyk,
    popis_informacie_2: popis_informacie_2,
    popis_informacie_3: popis_informacie_3,
    nadpis_vizualizacia: nadpis_vizualizacia,
    popis_viz_1: popis_viz_1,
    farba: farba,
    btn_ceny: btn_ceny,
    btn_kalukator: btn_kalukator,
  });
  revalidatePath(`/admin/fasady/[${jazyk}]/page`, "page");
  return "success";
}
