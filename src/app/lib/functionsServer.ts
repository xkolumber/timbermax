"use server";

import { unstable_noStore } from "next/cache";
import { firestore } from "./firebaseServer";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import {
  AboutUsElements,
  Bazeny,
  ContactPage,
  Fasady,
  Gallery,
  HomePageElements,
  MoreAboutTimElements,
  Ostatne,
  Ploty,
  PriceOffer,
  Slnolamy,
  Terasy,
} from "./interface";
import getBase64 from "./functions";

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
    const orderData = doc.data() as Ploty;

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
    const orderData = doc.data() as Ostatne;

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
    const orderData = doc.data() as Bazeny;

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
    const orderData = doc.data() as Terasy;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminFasady(language: string, name_database: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection(`fasady-${name_database}`);
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Fasady;

    return orderData;
  } catch (error) {
    return null;
  }
}

export async function GetAdminFasadyOdvetrana(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("fasady-odvetrana");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Fasady;

    return orderData;
  } catch (error) {
    return null;
  }
}
export async function GetAdminFasadyPredsadena(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("fasady-predsadena");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as Fasady;

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

export async function GetAdminGallery() {
  unstable_noStore();
  const galleryCollectionRef = firestore.collection("galeria");

  try {
    const querySnapshot = await galleryCollectionRef.get();

    if (querySnapshot.empty) {
      return [];
    }
    const dataGallery: Gallery[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        datum_pridania: data.datum_pridania,
        fotky: data.fotky,
        kategorie: data.kategorie,
        nazov: data.nazov,
        id: doc.id,
      } as Gallery;
    });

    dataGallery.sort((a, b) => {
      const dateA = new Date(a.datum_pridania);
      const dateB = new Date(b.datum_pridania);
      return dateB.getTime() - dateA.getTime();
    });

    return dataGallery;
  } catch (error) {
    console.error("Database Error: Failed to fetch orders.", error);
    throw new Error("Database Error: Failed to fetch orders.");
  }
}

export async function GetAdminGalleryId(id: string) {
  unstable_noStore();

  try {
    const docRef = firestore.collection("galeria").doc(id);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      console.error("Document not found.");
      return null;
    }
    const data = docSnapshot.data();

    if (!data) {
      console.error("Document data is undefined.");
      return null;
    }

    const dataGallery: Gallery = {
      ...data,
      id: docSnapshot.id,
    } as Gallery;

    return dataGallery;
  } catch (error) {
    console.error("Database Error: Failed to fetch orders.", error);
    throw new Error("Database Error: Failed to fetch orders.");
  }
}

export async function GetAdminContactPage(language: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("contact");
    const querySnapshot = await podstrankaCollectionRef
      .where("jazyk", "==", language)
      .get();

    if (querySnapshot.empty) {
      console.error("Document does not exist for uid:", language);
      return null;
    }
    const doc = querySnapshot.docs[0];
    const orderData = doc.data() as ContactPage;

    return orderData;
  } catch (error) {
    return null;
  }
}
