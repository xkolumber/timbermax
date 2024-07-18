"use server";

import { unstable_noStore } from "next/cache";
import { firestore } from "./firebaseServer";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { AboutUsElements, HomePageElements } from "./interface";

export async function GetAdminHomePage(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("homepage");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as HomePageElements;
    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminAboutUsPage(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("about-us");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as AboutUsElements;
    return orderData;
  } catch (error) {
    return null;
  }
}
