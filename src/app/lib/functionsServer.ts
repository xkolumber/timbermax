"use server";

import { GetCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { getFirestore } from "firebase-admin/firestore";
import { unstable_noStore } from "next/cache";
import { clientS3, docClient } from "./awsConfig";
import { allowedLanguages, aws_bucket_name, createSlug } from "./functions";
import {
  AboutUsElements,
  Bazeny,
  BlogInterface,
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

import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
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

export async function fetchHomepageAdmin(
  jazyk: string | undefined
): Promise<HomePageElements | null> {
  try {
    const command = new QueryCommand({
      TableName: "homepage",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": jazyk,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as HomePageElements;
    }

    throw new Error(`Item with slug ${jazyk} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${jazyk} not found.`);
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

export async function fetchAboutUsAdmin(
  jazyk: string | undefined
): Promise<AboutUsElements | null> {
  try {
    const command = new QueryCommand({
      TableName: "about-us",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": jazyk,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as AboutUsElements;
    }

    throw new Error(`Item with slug ${jazyk} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${jazyk} not found.`);
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
export async function fetchMoreAboutAdmin(
  jazyk: string | undefined
): Promise<MoreAboutTimElements | null> {
  try {
    const command = new QueryCommand({
      TableName: "more-about",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": jazyk,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as MoreAboutTimElements;
    }

    throw new Error(`Item with slug ${jazyk} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${jazyk} not found.`);
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

export async function fetchPriceOfferAdmin(
  jazyk: string | undefined
): Promise<PriceOffer | null> {
  try {
    const command = new QueryCommand({
      TableName: "price-offer",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": jazyk,
      },
    });

    const response = await docClient.send(command);
    if (response.Items && response.Items.length > 0) {
      return response.Items[0] as PriceOffer;
    }

    throw new Error(`Item with slug ${jazyk} not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with slug ${jazyk} not found.`);
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

export async function fetchBlogs(): Promise<BlogInterface[]> {
  try {
    const command = new ScanCommand({
      TableName: "blog",
    });

    const response = await docClient.send(command);
    if (response.Items) {
      return response.Items as BlogInterface[];
    }

    throw new Error(`Item with  not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function fetchBlogId(id: string): Promise<BlogInterface> {
  try {
    const command = new GetCommand({
      TableName: "blog",
      Key: {
        id: id,
      },
    });

    const response = await docClient.send(command);
    if (!response.Item) {
      throw new Error(`Item with id not found.`);
    }

    return response.Item as BlogInterface;
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

export async function uploadFileToS3(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");

    const folderName = new Date().toISOString();

    const originalFileName = file.name.split(".")[0];
    const fileExtension = file.name.split(".").pop();

    const safeFileName = `${createSlug(originalFileName)}.${fileExtension}`;

    const { url, fields } = await createPresignedPost(clientS3, {
      Bucket: aws_bucket_name,
      Key: `${folderName}/${safeFileName}`,
      Expires: 3600,
    });

    const formDataS3 = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formDataS3.append(key, value);
    });
    formDataS3.append("file", file);

    const uploadResponse = await fetch(url, {
      method: "POST",
      body: formDataS3,
    });

    if (uploadResponse.status !== 204) {
      throw new Error("Failed to upload file");
    }

    const fileKey = `${folderName}/${safeFileName}`;
    const s3Url = `https://${aws_bucket_name}.s3.eu-north-1.amazonaws.com/${fileKey}`;

    return s3Url;
  } catch (err) {
    console.error("S3 Upload Error:", err);
    throw new Error("S3 upload failed");
  }
}
