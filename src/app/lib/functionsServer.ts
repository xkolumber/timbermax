"use server";

import { unstable_noStore } from "next/cache";
import { firestore } from "./firebaseServer";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import {
  AboutUsElements,
  HomePageElements,
  MoreAboutTimElements,
  PriceOffer,
  Slnolamy,
} from "./interface";

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

export async function GetAdminMoreAbout(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("more-about");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as MoreAboutTimElements;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminSlnolamy(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("slnolamy");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Slnolamy;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminPloty(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("ploty");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Slnolamy;

    return orderData;
  } catch (error) {
    return null;
  }
}
export async function GetAdminOstatne(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("ostatne");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Slnolamy;

    return orderData;
  } catch (error) {
    return null;
  }
}
export async function GetAdminBazeny(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("bazeny");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Slnolamy;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminTerasy(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("terasy");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Slnolamy;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminPriceOffer(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("price-offer");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as PriceOffer;

    return orderData;
  } catch (error) {
    return null;
  }
}
