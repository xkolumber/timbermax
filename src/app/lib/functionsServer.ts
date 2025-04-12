"use server";

import { getFirestore } from "firebase-admin/firestore";
import { unstable_noStore } from "next/cache";
import { firestore } from "./firebaseServer";
import {
  AboutUsElements,
  Bazeny,
  ContactPage,
  Fasady,
  Gallery,
  HomePageElements,
  LanguagesAdming,
  MoreAboutTimElements,
  Ostatne,
  Ploty,
  PriceOffer,
  Slnolamy,
  Terasy,
} from "./interface";
import { GetCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./awsConfig";
import { allowedLanguages } from "./functions";
// import { allowedLanguages } from "./functionsClient";

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

export async function GetGalleriesForServicePage(category: string) {
  unstable_noStore();

  try {
    const db = getFirestore();
    const podstrankaCollectionRef = db.collection("galeria");
    const querySnapshot = await podstrankaCollectionRef
      .where("kategorie", "array-contains", category)
      .get();

    if (querySnapshot.empty) {
      console.error("No documents found for category:", category);
      return [];
    }
    const galleries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      datum_pridania: doc.data().datum_pridania,
      fotky: doc.data().fotky,
      kategorie: doc.data().kategorie,
      nazov: doc.data().nazov,
      profil: doc.data().profil,
      farba: doc.data().farba,
      jazyky_kontent: doc.data().jazyky_kontent,
    }));

    return galleries;
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return [];
  }
}

export async function fetchHomepage(
  jazyk: string | undefined
): Promise<HomePageElements | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "homepage",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as HomePageElements;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function fetchAboutUs(
  jazyk: string | undefined
): Promise<AboutUsElements | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "about-us",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as AboutUsElements;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function fetchMoreAbout(
  jazyk: string | undefined
): Promise<MoreAboutTimElements | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "more-about",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as MoreAboutTimElements;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function fetchTerasy(
  jazyk: string | undefined
): Promise<Terasy | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "terasy",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Terasy;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function fetchFasady(
  type: string,
  jazyk: string | undefined
): Promise<Fasady | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: type,
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Fasady;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchBazeny(
  jazyk: string | undefined
): Promise<Bazeny | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "bazeny",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Bazeny;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchSlnolamy(
  jazyk: string | undefined
): Promise<Slnolamy | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "slnolamy",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Slnolamy;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchPloty(
  jazyk: string | undefined
): Promise<Ploty | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "ploty",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Ploty;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchOstatne(
  jazyk: string | undefined
): Promise<Ostatne | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "ostatne",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as Ostatne;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchContact(
  jazyk: string | undefined
): Promise<ContactPage | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "contact",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as ContactPage;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchPriceOffer(
  jazyk: string | undefined
): Promise<PriceOffer | null> {
  const languageToFetch = allowedLanguages.includes(jazyk || "") ? jazyk : "sk";

  try {
    const command = new QueryCommand({
      TableName: "price-offer",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": languageToFetch,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as PriceOffer;
    }

    throw new Error(`Item with slug ${languageToFetch} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${languageToFetch} not found.`);
  }
}

export async function fetchGalleryType(type: string): Promise<Gallery[]> {
  try {
    const command = new ScanCommand({
      TableName: "galeria",
      FilterExpression: "contains(kategorie, :type)",
      ExpressionAttributeValues: {
        ":type": type,
      },
    });

    const response = await docClient.send(command);
    if (response.Items) {
      return response.Items as Gallery[];
    }

    throw new Error(`Item with  not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function fetchGalleries(): Promise<Gallery[]> {
  try {
    const command = new ScanCommand({
      TableName: "galeria",
    });

    const response = await docClient.send(command);
    if (response.Items) {
      return response.Items as Gallery[];
    }

    throw new Error(`Item with  not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function fetchGalleryId(id: string): Promise<Gallery> {
  try {
    const command = new GetCommand({
      TableName: "galeria",
      Key: {
        id: id,
      },
    });

    const response = await docClient.send(command);
    if (!response.Item) {
      throw new Error(`Item with id not found.`);
    }

    return response.Item as Gallery;
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function fetchAllLanguages(): Promise<LanguagesAdming[]> {
  try {
    const command = new ScanCommand({
      TableName: "jazyky",
    });

    const response = await docClient.send(command);
    if (response.Items) {
      return response.Items as LanguagesAdming[];
    }

    throw new Error(`Item with  not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}
