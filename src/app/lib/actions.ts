"use server";

import { getFirestore } from "firebase-admin/firestore";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { firestore } from "./firebaseServer";
import { Jazyk, Sluzby, Team, TimbermaxLike } from "./interface";
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
  history_nadpis: string,
  history_popis: string,
  filozofia_nadpis: string,
  filozofia_popis1: string,
  filozofia_popis2: string,
  filozofia_popis3: string,
  jazyk: string,
  spoznajte_tim: string,
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
      history_nadpis: history_nadpis,
      history_popis: history_popis,
      filozofia_nadpis: filozofia_nadpis,
      filozofia_popis1: filozofia_popis1,
      filozofia_popis2: filozofia_popis2,
      filozofia_popis3: filozofia_popis3,
      jazyk: jazyk,
      spoznajte_tim: spoznajte_tim,
      tim: tim,
    });
    return "success";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await podstrankaCollectionRef.doc(docId).update({
    history_nadpis,
    history_popis,
    filozofia_nadpis,
    filozofia_popis1,
    filozofia_popis2,
    filozofia_popis3,
    jazyk,
    spoznajte_tim,
    tim,
  });
  revalidatePath(`/admin/o-nas/[${jazyk}]/page`, "page");
  return "success";
}
