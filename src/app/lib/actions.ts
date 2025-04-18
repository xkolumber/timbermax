"use server";

import { QueryCommand } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { docClient } from "./awsConfig";
import { createSlug } from "./functions";
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

const FormSchema = z.object({
  jazyk: z.string(),
});

export async function getCertainLanguage(
  jazyk: string
): Promise<LanguagesAdming> {
  try {
    const getCommand = new QueryCommand({
      TableName: "jazyky",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(getCommand);

    if (!data.Items || data.Items.length === 0) {
      console.warn(`Language '${jazyk}' not found in database.`);
      throw new Error("Failed to fetch language data");
    }

    return data.Items[0] as any;
  } catch (error) {
    console.error("DynamoDB Query Error:", error);
    throw new Error("Failed to fetch language data");
  }
}

export async function AdminAddLanguage(jazyk: string) {
  try {
    const getCommand = new QueryCommand({
      TableName: "jazyky",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(getCommand);

    if (data.Items && data.Items.length > 0) {
      console.warn(`Language '${jazyk}' already exists.`);
      return "exists";
    }

    const uuid = randomUUID();
    const putParams = {
      TableName: "jazyky",
      Item: {
        id: uuid,
        jazyk: jazyk,
      },
    };

    const response = await docClient.send(new PutCommand(putParams));
    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Add Language Error:", error);
    return "false";
  }
}

export async function doRevalidate(pathname: string) {
  revalidatePath(pathname);
}

export async function AdminactualizeHomePage(
  actualizeData: HomePageElements,
  jazyk: string
) {
  try {
    const query = new QueryCommand({
      TableName: "homepage",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(query);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const command = new UpdateCommand({
        TableName: "homepage",
        Key: { id: docId },
        ExpressionAttributeNames: {
          "#references": "references",
        },
        UpdateExpression: `
          SET 
            button_citat_viac = :button_citat_viac,
            button_vypocet = :button_vypocet,
            cenova_p_nadpis = :cenova_p_nadpis,
            cenova_p_popis1 = :cenova_p_popis1,
            cenova_p_popis2 = :cenova_p_popis2,
            mapa_showroomov = :mapa_showroomov,
            nase_sluzby_nadpis = :nase_sluzby_nadpis,
            nase_sluzby_veta = :nase_sluzby_veta,
            nase_sluzby_popis = :nase_sluzby_popis,
            o_nas_nadpis = :o_nas_nadpis,
            o_nas_popis = :o_nas_popis,
            o_nas_elements = :o_nas_elements,
            ref_elements = :ref_elements,
            rokov_skusenosti = :rokov_skusenosti,
            sluzby = :sluzby,
            svg_titles = :svg_titles,
            timbermax_ako = :timbermax_ako,
            timbermax_ako_mobile_nadpis = :timbermax_ako_mobile_nadpis,
            timbermax_ako_mobile_popisy = :timbermax_ako_mobile_popisy,
            text_photo1 = :text_photo1,
            text_photo2 = :text_photo2,
            text_photo3 = :text_photo3,
            text_photo4 = :text_photo4,
            text_photo5 = :text_photo5,
            text_photo6 = :text_photo6,
            text_photo7 = :text_photo7,
            text_photo8 = :text_photo8,
            references_title = :references_title,
            #references = :references
        `,

        ExpressionAttributeValues: {
          ":button_citat_viac": actualizeData.button_citat_viac,
          ":button_vypocet": actualizeData.button_vypocet,
          ":cenova_p_nadpis": actualizeData.cenova_p_nadpis,
          ":cenova_p_popis1": actualizeData.cenova_p_popis1,
          ":cenova_p_popis2": actualizeData.cenova_p_popis2,
          ":mapa_showroomov": actualizeData.mapa_showroomov,
          ":nase_sluzby_nadpis": actualizeData.nase_sluzby_nadpis,
          ":nase_sluzby_veta": actualizeData.nase_sluzby_veta,
          ":nase_sluzby_popis": actualizeData.nase_sluzby_popis,
          ":o_nas_nadpis": actualizeData.o_nas_nadpis,
          ":o_nas_popis": actualizeData.o_nas_popis,
          ":o_nas_elements": actualizeData.o_nas_elements,
          ":ref_elements": actualizeData.ref_elements,
          ":rokov_skusenosti": actualizeData.rokov_skusenosti,
          ":sluzby": actualizeData.sluzby,
          ":svg_titles": actualizeData.svg_titles,
          ":timbermax_ako": actualizeData.timbermax_ako,
          ":timbermax_ako_mobile_nadpis":
            actualizeData.timbermax_ako_mobile_nadpis,
          ":timbermax_ako_mobile_popisy":
            actualizeData.timbermax_ako_mobile_popisy,
          ":text_photo1": actualizeData.text_photo1,
          ":text_photo2": actualizeData.text_photo2,
          ":text_photo3": actualizeData.text_photo3,
          ":text_photo4": actualizeData.text_photo4,
          ":text_photo5": actualizeData.text_photo5,
          ":text_photo6": actualizeData.text_photo6,
          ":text_photo7": actualizeData.text_photo7,
          ":text_photo8": actualizeData.text_photo8,
          ":references_title": actualizeData.references_title,
          ":references": actualizeData.references,
        },
      });

      try {
        const response = await docClient.send(command);
        return response.$metadata.httpStatusCode;
      } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
      }
    } else {
      const uuid = crypto.randomUUID();

      const putParams = {
        TableName: "homepage",
        Item: {
          id: uuid,
          ...actualizeData,
          jazyk: jazyk,
        },
      };

      const response = await docClient.send(new PutCommand(putParams));
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("DynamoDB Update Error:", error);
    return "false";
  }
}

export async function AdminActualizeAboutUsPage(
  actualizeData: AboutUsElements,
  jazyk: string
) {
  try {
    const command = new QueryCommand({
      TableName: "about-us",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(command);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const command = new UpdateCommand({
        TableName: "about-us",
        Key: {
          id: docId,
        },
        ExpressionAttributeNames: {
          "#o_nas": "o_nas",
          "#citat": "citat",
          "#history_nadpis": "history_nadpis",
          "#history_popis": "history_popis",
          "#filozofia_nadpis": "filozofia_nadpis",
          "#filozofia_popis1": "filozofia_popis1",
          "#filozofia_popis2": "filozofia_popis2",
          "#filozofia_popis3": "filozofia_popis3",
          "#staviame_znacka": "staviame_znacka",
          "#tim": "tim",
          "#spoznajte_tim": "spoznajte_tim",
        },
        UpdateExpression:
          "set #o_nas = :o_nas, #citat = :citat, #history_nadpis = :history_nadpis, #history_popis = :history_popis, #filozofia_nadpis = :filozofia_nadpis, #filozofia_popis1 = :filozofia_popis1, #filozofia_popis2 = :filozofia_popis2, #filozofia_popis3 = :filozofia_popis3, #spoznajte_tim = :spoznajte_tim, #staviame_znacka = :staviame_znacka, #tim = :tim",
        ExpressionAttributeValues: {
          ":o_nas": actualizeData.o_nas,
          ":citat": actualizeData.citat,
          ":history_nadpis": actualizeData.history_nadpis,
          ":history_popis": actualizeData.history_popis,
          ":filozofia_nadpis": actualizeData.filozofia_nadpis,
          ":filozofia_popis1": actualizeData.filozofia_popis1,
          ":filozofia_popis2": actualizeData.filozofia_popis2,
          ":filozofia_popis3": actualizeData.filozofia_popis3,
          ":spoznajte_tim": actualizeData.spoznajte_tim,
          ":staviame_znacka": actualizeData.staviame_znacka,
          ":tim": actualizeData.tim,
        },
        ReturnValues: "ALL_NEW",
      });

      try {
        const response = await docClient.send(command);
        return response.$metadata.httpStatusCode;
      } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
      }
    } else {
      const uuid = crypto.randomUUID();
      const putParams = {
        TableName: "about-us",
        Item: {
          id: uuid,
          ...actualizeData,
          jazyk: jazyk,
        },
      };

      const response = await docClient.send(new PutCommand(putParams));
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("Error updating/adding item in DynamoDB", error);
    throw new Error("Error updating/adding item in DynamoDB");
  }
}

export async function AdminActualizeMoreAboutPage(
  jazyk: string,
  actualizeData: MoreAboutTimElements
) {
  try {
    const command = new QueryCommand({
      TableName: "more-about",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(command);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const command = new UpdateCommand({
        TableName: "more-about",
        Key: {
          id: docId,
        },
        ExpressionAttributeNames: {
          "#nadpis": "nadpis",
          "#popis1": "popis1",
          "#popis2": "popis2",
          "#popis_porovnanie": "popis_porovnanie",
          "#tim_vs_konk": "tim_vs_konk",
          "#next_popis1": "next_popis1",
          "#next_popis2": "next_popis2",
          "#next_popis3": "next_popis3",
          "#next_popis4": "next_popis4",
          "#btn_exotic": "btn_exotic",
          "#btn_rustic": "btn_rustic",
          "#pod_btn": "pod_btn",
          "#jazyk": "jazyk",
          "#another_popis1": "another_popis1",
          "#another_popis2": "another_popis2",
          "#lahko_nadpis": "lahko_nadpis",
          "#lahko_popis": "lahko_popis",
          "#fareb_nadpis": "fareb_nadpis",
          "#fareb_popis": "fareb_popis",
          "#tepel_nadpis": "tepel_nadpis",
          "#tepel_popis": "tepel_popis",
          "#prehrev_nadpis": "prehrev_nadpis",
          "#prehrev_popis1": "prehrev_popis1",
          "#prehrev_popis2": "prehrev_popis2",
          "#prehrev_popis3": "prehrev_popis3",
          "#prehrev_popis4": "prehrev_popis4",
          "#prehrev_popis5": "prehrev_popis5",
          "#prehrev_popis6": "prehrev_popis6",
          "#mech_nadpis": "mech_nadpis",
          "#mech_popis": "mech_popis",
          "#tvar_nadpis": "tvar_nadpis",
          "#tvar_popis1": "tvar_popis1",
          "#tvar_popis2": "tvar_popis2",
          "#tvar_popis3": "tvar_popis3",
          "#tvar_popis4": "tvar_popis4",
          "#tvar_popis5": "tvar_popis5",
          "#tvar_popis6": "tvar_popis6",
          "#tvar_popis7": "tvar_popis7",
          "#profil_nadpis": "profil_nadpis",
          "#profil_popis1": "profil_popis1",
          "#profil_popis2": "profil_popis2",
          "#profil_popis3": "profil_popis3",
          "#profil_popis4": "profil_popis4",
          "#nadpis_vizualizacia": "nadpis_vizualizacia",
          "#popis_viz_1": "popis_viz_1",
          "#farba": "farba",
          "#btn_ceny": "btn_ceny",
          "#btn_kalkulator": "btn_kalkulator",
        },
        UpdateExpression: `
        SET 
          #nadpis = :nadpis,
          #popis1 = :popis1,
          #popis2 = :popis2,
          #popis_porovnanie = :popis_porovnanie,
          #tim_vs_konk = :tim_vs_konk,
          #next_popis1 = :next_popis1,
          #next_popis2 = :next_popis2,
          #next_popis3 = :next_popis3,
          #next_popis4 = :next_popis4,
          #btn_exotic = :btn_exotic,
          #btn_rustic = :btn_rustic,
          #pod_btn = :pod_btn,
          #another_popis1 = :another_popis1,
          #another_popis2 = :another_popis2,
          #lahko_nadpis = :lahko_nadpis,
          #lahko_popis = :lahko_popis,
          #fareb_nadpis = :fareb_nadpis,
          #fareb_popis = :fareb_popis,
          #tepel_nadpis = :tepel_nadpis,
          #tepel_popis = :tepel_popis,
          #prehrev_nadpis = :prehrev_nadpis,
          #prehrev_popis1 = :prehrev_popis1,
          #prehrev_popis2 = :prehrev_popis2,
          #prehrev_popis3 = :prehrev_popis3,
          #prehrev_popis4 = :prehrev_popis4,
          #prehrev_popis5 = :prehrev_popis5,
          #prehrev_popis6 = :prehrev_popis6,
          #mech_nadpis = :mech_nadpis,
          #mech_popis = :mech_popis,
          #tvar_nadpis = :tvar_nadpis,
          #tvar_popis1 = :tvar_popis1,
          #tvar_popis2 = :tvar_popis2,
          #tvar_popis3 = :tvar_popis3,
          #tvar_popis4 = :tvar_popis4,
          #tvar_popis5 = :tvar_popis5,
          #tvar_popis6 = :tvar_popis6,
          #tvar_popis7 = :tvar_popis7,
          #profil_nadpis = :profil_nadpis,
          #profil_popis1 = :profil_popis1,
          #profil_popis2 = :profil_popis2,
          #profil_popis3 = :profil_popis3,
          #profil_popis4 = :profil_popis4,
          #nadpis_vizualizacia = :nadpis_vizualizacia,
          #popis_viz_1 = :popis_viz_1,
          #farba = :farba,
          #btn_ceny = :btn_ceny,
          #btn_kalkulator = :btn_kalkulator,
          #jazyk = :jazyk
      `,

        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":popis_porovnanie": actualizeData.popis_porovnanie,
          ":tim_vs_konk": actualizeData.tim_vs_konk,
          ":next_popis1": actualizeData.next_popis1,
          ":next_popis2": actualizeData.next_popis2,
          ":next_popis3": actualizeData.next_popis3,
          ":next_popis4": actualizeData.next_popis4,
          ":btn_exotic": actualizeData.btn_exotic,
          ":btn_rustic": actualizeData.btn_rustic,
          ":pod_btn": actualizeData.pod_btn,
          ":another_popis1": actualizeData.another_popis1,
          ":another_popis2": actualizeData.another_popis2,
          ":lahko_nadpis": actualizeData.lahko_nadpis,
          ":lahko_popis": actualizeData.lahko_popis,
          ":fareb_nadpis": actualizeData.fareb_nadpis,
          ":fareb_popis": actualizeData.fareb_popis,
          ":tepel_nadpis": actualizeData.tepel_nadpis,
          ":tepel_popis": actualizeData.tepel_popis,
          ":prehrev_nadpis": actualizeData.prehrev_nadpis,
          ":prehrev_popis1": actualizeData.prehrev_popis1,
          ":prehrev_popis2": actualizeData.prehrev_popis2,
          ":prehrev_popis3": actualizeData.prehrev_popis3,
          ":prehrev_popis4": actualizeData.prehrev_popis4,
          ":prehrev_popis5": actualizeData.prehrev_popis5,
          ":prehrev_popis6": actualizeData.prehrev_popis6,
          ":mech_nadpis": actualizeData.mech_nadpis,
          ":mech_popis": actualizeData.mech_popis,
          ":tvar_nadpis": actualizeData.tvar_nadpis,
          ":tvar_popis1": actualizeData.tvar_popis1,
          ":tvar_popis2": actualizeData.tvar_popis2,
          ":tvar_popis3": actualizeData.tvar_popis3,
          ":tvar_popis4": actualizeData.tvar_popis4,
          ":tvar_popis5": actualizeData.tvar_popis5,
          ":tvar_popis6": actualizeData.tvar_popis6,
          ":tvar_popis7": actualizeData.tvar_popis7,
          ":profil_nadpis": actualizeData.profil_nadpis,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
          ":jazyk": jazyk,
        },
        ReturnValues: "ALL_NEW",
      });

      try {
        const response = await docClient.send(command);
        return response.$metadata.httpStatusCode;
      } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
      }
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "more-about",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("Error updating/adding item in DynamoDB", error);
    throw new Error("Error updating/adding item in DynamoDB");
  }
}

export async function AdminActualizePriceOffer(
  jazyk: string,
  actualizeData: PriceOffer
) {
  try {
    const queryCommand = new QueryCommand({
      TableName: "price-offer",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(queryCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "price-offer",
        Key: {
          id: docId,
        },
        UpdateExpression: `
          SET 
            #cennik_stiahnutie = :cennik_stiahnutie,
            #ceny_sposob_nadpis = :ceny_sposob_nadpis,
            #ceny_sposob_popis = :ceny_sposob_popis,
            #popis_nad_fotkou = :popis_nad_fotkou,
            #profil_nadpis = :profil_nadpis,
            #profil_popis1 = :profil_popis1,
            #profil_popis2 = :profil_popis2,
            #profil_popis3 = :profil_popis3,
            #profil_popis4 = :profil_popis4,
            #profil_popis5 = :profil_popis5,
            #profil_popis6 = :profil_popis6,
            #dielo_nadpis = :dielo_nadpis,
            #dielo_popis = :dielo_popis,
            #relacia_nadpis = :relacia_nadpis,
            #relacia_popis1 = :relacia_popis1,
            #relacia_popis2 = :relacia_popis2,
            #relacia_lista1 = :relacia_lista1,
            #relacia_lista2 = :relacia_lista2,
            #relacie = :relacie,
            #cenova_ponuka_nadpis = :cenova_ponuka_nadpis,
            #cenova_ponuka_popis = :cenova_ponuka_popis,
            #nacenovac = :nacenovac,
            #nacenovac_sekcie = :nacenovac_sekcie,
            #posl_popis1 = :posl_popis1,
            #posl_popis2 = :posl_popis2,
            #posl_popis3 = :posl_popis3,
            #posl_popis4 = :posl_popis4,
            #jazyk = :jazyk
        `,
        ExpressionAttributeNames: {
          "#cennik_stiahnutie": "cennik_stiahnutie",
          "#ceny_sposob_nadpis": "ceny_sposob_nadpis",
          "#ceny_sposob_popis": "ceny_sposob_popis",
          "#popis_nad_fotkou": "popis_nad_fotkou",
          "#profil_nadpis": "profil_nadpis",
          "#profil_popis1": "profil_popis1",
          "#profil_popis2": "profil_popis2",
          "#profil_popis3": "profil_popis3",
          "#profil_popis4": "profil_popis4",
          "#profil_popis5": "profil_popis5",
          "#profil_popis6": "profil_popis6",
          "#dielo_nadpis": "dielo_nadpis",
          "#dielo_popis": "dielo_popis",
          "#relacia_nadpis": "relacia_nadpis",
          "#relacia_popis1": "relacia_popis1",
          "#relacia_popis2": "relacia_popis2",
          "#relacia_lista1": "relacia_lista1",
          "#relacia_lista2": "relacia_lista2",
          "#relacie": "relacie",
          "#cenova_ponuka_nadpis": "cenova_ponuka_nadpis",
          "#cenova_ponuka_popis": "cenova_ponuka_popis",
          "#nacenovac": "nacenovac",
          "#nacenovac_sekcie": "nacenovac_sekcie",
          "#posl_popis1": "posl_popis1",
          "#posl_popis2": "posl_popis2",
          "#posl_popis3": "posl_popis3",
          "#posl_popis4": "posl_popis4",
          "#jazyk": "jazyk",
        },
        ExpressionAttributeValues: {
          ":cennik_stiahnutie": actualizeData.cennik_stiahnutie,
          ":ceny_sposob_nadpis": actualizeData.ceny_sposob_nadpis,
          ":ceny_sposob_popis": actualizeData.ceny_sposob_popis,
          ":popis_nad_fotkou": actualizeData.popis_nad_fotkou,
          ":profil_nadpis": actualizeData.profil_nadpis,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":profil_popis5": actualizeData.profil_popis5,
          ":profil_popis6": actualizeData.profil_popis6,
          ":dielo_nadpis": actualizeData.dielo_nadpis,
          ":dielo_popis": actualizeData.dielo_popis,
          ":relacia_nadpis": actualizeData.relacia_nadpis,
          ":relacia_popis1": actualizeData.relacia_popis1,
          ":relacia_popis2": actualizeData.relacia_popis2,
          ":relacia_lista1": actualizeData.relacia_lista1,
          ":relacia_lista2": actualizeData.relacia_lista2,
          ":relacie": actualizeData.relacie,
          ":cenova_ponuka_nadpis": actualizeData.cenova_ponuka_nadpis,
          ":cenova_ponuka_popis": actualizeData.cenova_ponuka_popis,
          ":nacenovac": actualizeData.nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":posl_popis1": actualizeData.posl_popis1,
          ":posl_popis2": actualizeData.posl_popis2,
          ":posl_popis3": actualizeData.posl_popis3,
          ":posl_popis4": actualizeData.posl_popis4,
          ":jazyk": jazyk,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "price-offer",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (err) {
    console.error("Error updating price offer:", err);
    throw err;
  }
}

export async function AdminActualizeSlnolamyPage(
  actualizeData: Slnolamy,
  jazyk: string
) {
  try {
    const queryCommand = new QueryCommand({
      TableName: "slnolamy",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(queryCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "slnolamy",
        Key: {
          id: docId,
        },
        UpdateExpression: `SET 
        nadpis = :nadpis,
        popis1 = :popis1,
        popis2 = :popis2,
        vlastnosti = :vlastnosti,
        nadpis_galeria = :nadpis_galeria,
        nadpis_informacie = :nadpis_informacie,
        popis_informacie_1 = :popis_informacie_1,
        info_variants = :info_variants,
        fareb_var_popis1 = :fareb_var_popis1,
        fareb_var_popis2 = :fareb_var_popis2,
        vlastnosti_popis1 = :vlastnosti_popis1,
        vlastnosti_popis2 = :vlastnosti_popis2,
        vlastnosti_popis3 = :vlastnosti_popis3,
        vlastnosti_popis4 = :vlastnosti_popis4,
        vlastnosti_nadpis_ = :vlastnosti_nadpis_,
        vlastnosti_popis5 = :vlastnosti_popis5,
        vlastnosti_popis6 = :vlastnosti_popis6,
        vlastnosti_popis7 = :vlastnosti_popis7,
        vlastnosti_popis8 = :vlastnosti_popis8,
        vlastnosti_btn_viac = :vlastnosti_btn_viac,
        vlastnosti_btn_konkurencia = :vlastnosti_btn_konkurencia,
        montaz_nadpis = :montaz_nadpis,
        montaz_popis1 = :montaz_popis1,
        montaz_popis2 = :montaz_popis2,
        montaz_popis3 = :montaz_popis3,
        montaz_popis4 = :montaz_popis4,
        montaz_nadpis_2 = :montaz_nadpis_2,
        montaz_nadpis_2_category = :montaz_nadpis_2_category,
        montaz_nadpis_2_category_popis1 = :montaz_nadpis_2_category_popis1,
        montaz_nadpis_2_category_popis2 = :montaz_nadpis_2_category_popis2,
        montaz_nadpis_2_category_popis3 = :montaz_nadpis_2_category_popis3,
        montaz_nadpis_2_category2 = :montaz_nadpis_2_category2,
        montaz_nadpis_2_category2_popis1 = :montaz_nadpis_2_category2_popis1,
        montaz_nadpis_2_category2_popis2 = :montaz_nadpis_2_category2_popis2,
        montaz_nadpis_2_category2_popis3 = :montaz_nadpis_2_category2_popis3,
        montaz_nadpis_2_category2_popis4 = :montaz_nadpis_2_category2_popis4,
        montaz_nadpis_2_category3 = :montaz_nadpis_2_category3,
        montaz_nadpis_2_category3_popis1 = :montaz_nadpis_2_category3_popis1,
        montaz_nadpis_2_category3_popis2 = :montaz_nadpis_2_category3_popis2,
        montaz_nadpis_2_category3_popis3 = :montaz_nadpis_2_category3_popis3,
        montaz_nadpis_2_category3_popis4 = :montaz_nadpis_2_category3_popis4,
        montaz_nadpis_2_category4 = :montaz_nadpis_2_category4,
        montaz_nadpis_2_category4_popis1 = :montaz_nadpis_2_category4_popis1,
        montaz_nadpis_2_category4_popis2 = :montaz_nadpis_2_category4_popis2,
        montaz_nadpis_2_category4_popis3 = :montaz_nadpis_2_category4_popis3,
        profil_orientacia = :profil_orientacia,
        profil_popis1 = :profil_popis1,
        profil_popis2 = :profil_popis2,
        profil_popis3 = :profil_popis3,
        profil_popis4 = :profil_popis4,
        postup_popis = :postup_popis,
        postup_nacenovac = :postup_nacenovac,
        nacenovac_sekcie = :nacenovac_sekcie,
        nadpis_vizualizacia = :nadpis_vizualizacia,
        popis_viz_1 = :popis_viz_1,
        farba = :farba,
        btn_ceny = :btn_ceny,
        btn_kalkulator = :btn_kalkulator`,
        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":vlastnosti": actualizeData.vlastnosti,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "slnolamy",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (err) {
    console.error("Error updating price offer:", err);
    throw err;
  }
}

export async function AdminActualizePlotyPage(
  actualizeData: Ploty,
  jazyk: string
) {
  try {
    const queryCommand = new QueryCommand({
      TableName: "ploty",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(queryCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "ploty",
        Key: {
          id: docId,
        },
        UpdateExpression: `SET 
          nadpis = :nadpis,
          popis1 = :popis1,
          popis2 = :popis2,
          vlastnosti = :vlastnosti,
          nadpis_galeria = :nadpis_galeria,
          nadpis_informacie = :nadpis_informacie,
          popis_informacie_1 = :popis_informacie_1,
          info_variants = :info_variants,
          fareb_var_popis1 = :fareb_var_popis1,
          fareb_var_popis2 = :fareb_var_popis2,
          vlastnosti_popis1 = :vlastnosti_popis1,
          vlastnosti_popis2 = :vlastnosti_popis2,
          vlastnosti_popis3 = :vlastnosti_popis3,
          vlastnosti_popis4 = :vlastnosti_popis4,
          vlastnosti_nadpis_ = :vlastnosti_nadpis_,
          vlastnosti_popis5 = :vlastnosti_popis5,
          vlastnosti_popis6 = :vlastnosti_popis6,
          vlastnosti_popis7 = :vlastnosti_popis7,
          vlastnosti_popis8 = :vlastnosti_popis8,
          vlastnosti_btn_viac = :vlastnosti_btn_viac,
          vlastnosti_btn_konkurencia = :vlastnosti_btn_konkurencia,
          montaz_nadpis = :montaz_nadpis,
          montaz_popis1 = :montaz_popis1,
          montaz_popis2 = :montaz_popis2,
          montaz_popis3 = :montaz_popis3,
          montaz_popis4 = :montaz_popis4,
          montaz_nadpis_2 = :montaz_nadpis_2,
          montaz_nadpis_2_category = :montaz_nadpis_2_category,
          montaz_nadpis_2_category_popis1 = :montaz_nadpis_2_category_popis1,
          montaz_nadpis_2_category_popis2 = :montaz_nadpis_2_category_popis2,
          montaz_nadpis_2_category_popis3 = :montaz_nadpis_2_category_popis3,
          montaz_nadpis_2_category2 = :montaz_nadpis_2_category2,
          montaz_nadpis_2_category2_popis1 = :montaz_nadpis_2_category2_popis1,
          montaz_nadpis_2_category2_popis2 = :montaz_nadpis_2_category2_popis2,
          montaz_nadpis_2_category2_popis3 = :montaz_nadpis_2_category2_popis3,
          montaz_nadpis_2_category2_popis4 = :montaz_nadpis_2_category2_popis4,
          montaz_nadpis_2_category3 = :montaz_nadpis_2_category3,
          montaz_nadpis_2_category3_popis1 = :montaz_nadpis_2_category3_popis1,
          montaz_nadpis_2_category3_popis2 = :montaz_nadpis_2_category3_popis2,
          montaz_nadpis_2_category3_popis3 = :montaz_nadpis_2_category3_popis3,
          montaz_nadpis_2_category3_popis4 = :montaz_nadpis_2_category3_popis4,
          montaz_nadpis_2_category4 = :montaz_nadpis_2_category4,
          montaz_nadpis_2_category4_popis1 = :montaz_nadpis_2_category4_popis1,
          montaz_nadpis_2_category4_popis2 = :montaz_nadpis_2_category4_popis2,
          montaz_nadpis_2_category4_popis3 = :montaz_nadpis_2_category4_popis3,
          profil_orientacia = :profil_orientacia,
          profil_popis1 = :profil_popis1,
          profil_popis2 = :profil_popis2,
          profil_popis3 = :profil_popis3,
          profil_popis4 = :profil_popis4,
          postup_popis = :postup_popis,
          postup_nacenovac = :postup_nacenovac,
          nacenovac_sekcie = :nacenovac_sekcie,
          nadpis_vizualizacia = :nadpis_vizualizacia,
          popis_viz_1 = :popis_viz_1,
          farba = :farba,
          btn_ceny = :btn_ceny,
          btn_kalkulator = :btn_kalkulator`,

        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":vlastnosti": actualizeData.vlastnosti,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "ploty",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (err) {
    console.error("Error updating price offer:", err);
    throw err;
  }
}

export async function AdminActualizeOstatnePage(
  actualizeData: Ostatne,
  jazyk: string
) {
  try {
    const queryCommand = new QueryCommand({
      TableName: "ostatne",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(queryCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "ostatne",
        Key: {
          id: docId,
        },
        UpdateExpression: `SET 
        #nadpis = :nadpis,
        #popis1 = :popis1,
        #popis2 = :popis2,
        #vlastnosti = :vlastnosti,
        #nadpis_galeria = :nadpis_galeria,
        #nadpis_informacie = :nadpis_informacie,
        #popis_informacie_1 = :popis_informacie_1,
        #info_variants = :info_variants,
        #fareb_var_popis1 = :fareb_var_popis1,
        #fareb_var_popis2 = :fareb_var_popis2,
        #vlastnosti_popis1 = :vlastnosti_popis1,
        #vlastnosti_popis2 = :vlastnosti_popis2,
        #vlastnosti_popis3 = :vlastnosti_popis3,
        #vlastnosti_popis4 = :vlastnosti_popis4,
        #vlastnosti_nadpis_ = :vlastnosti_nadpis_,
        #vlastnosti_popis5 = :vlastnosti_popis5,
        #vlastnosti_popis6 = :vlastnosti_popis6,
        #vlastnosti_popis7 = :vlastnosti_popis7,
        #vlastnosti_popis8 = :vlastnosti_popis8,
        #vlastnosti_btn_viac = :vlastnosti_btn_viac,
        #vlastnosti_btn_konkurencia = :vlastnosti_btn_konkurencia,
        #montaz_nadpis = :montaz_nadpis,
        #montaz_popis1 = :montaz_popis1,
        #montaz_popis2 = :montaz_popis2,
        #montaz_popis3 = :montaz_popis3,
        #montaz_popis4 = :montaz_popis4,
        #montaz_nadpis_2 = :montaz_nadpis_2,
        #montaz_nadpis_2_category = :montaz_nadpis_2_category,
        #montaz_nadpis_2_category_popis1 = :montaz_nadpis_2_category_popis1,
        #montaz_nadpis_2_category_popis2 = :montaz_nadpis_2_category_popis2,
        #montaz_nadpis_2_category_popis3 = :montaz_nadpis_2_category_popis3,
        #montaz_nadpis_2_category2 = :montaz_nadpis_2_category2,
        #montaz_nadpis_2_category2_popis1 = :montaz_nadpis_2_category2_popis1,
        #montaz_nadpis_2_category2_popis2 = :montaz_nadpis_2_category2_popis2,
        #montaz_nadpis_2_category2_popis3 = :montaz_nadpis_2_category2_popis3,
        #montaz_nadpis_2_category2_popis4 = :montaz_nadpis_2_category2_popis4,
        #montaz_nadpis_2_category3 = :montaz_nadpis_2_category3,
        #montaz_nadpis_2_category3_popis1 = :montaz_nadpis_2_category3_popis1,
        #montaz_nadpis_2_category3_popis2 = :montaz_nadpis_2_category3_popis2,
        #montaz_nadpis_2_category3_popis3 = :montaz_nadpis_2_category3_popis3,
        #montaz_nadpis_2_category3_popis4 = :montaz_nadpis_2_category3_popis4,
        #montaz_nadpis_2_category4 = :montaz_nadpis_2_category4,
        #montaz_nadpis_2_category4_popis1 = :montaz_nadpis_2_category4_popis1,
        #montaz_nadpis_2_category4_popis2 = :montaz_nadpis_2_category4_popis2,
        #montaz_nadpis_2_category4_popis3 = :montaz_nadpis_2_category4_popis3,
        #profil_orientacia = :profil_orientacia,
        #profil_popis1 = :profil_popis1,
        #profil_popis2 = :profil_popis2,
        #profil_popis3 = :profil_popis3,
        #profil_popis4 = :profil_popis4,
        #postup_popis = :postup_popis,
        #postup_nacenovac = :postup_nacenovac,
        #nacenovac_sekcie = :nacenovac_sekcie,
        #nadpis_vizualizacia = :nadpis_vizualizacia,
        #popis_viz_1 = :popis_viz_1,
        #farba = :farba,
        #btn_ceny = :btn_ceny,
        #btn_kalkulator = :btn_kalkulator`,

        ExpressionAttributeNames: {
          "#nadpis": "nadpis",
          "#popis1": "popis1",
          "#popis2": "popis2",
          "#vlastnosti": "vlastnosti",
          "#nadpis_galeria": "nadpis_galeria",
          "#nadpis_informacie": "nadpis_informacie",
          "#popis_informacie_1": "popis_informacie_1",
          "#info_variants": "info_variants",
          "#fareb_var_popis1": "fareb_var_popis1",
          "#fareb_var_popis2": "fareb_var_popis2",
          "#vlastnosti_popis1": "vlastnosti_popis1",
          "#vlastnosti_popis2": "vlastnosti_popis2",
          "#vlastnosti_popis3": "vlastnosti_popis3",
          "#vlastnosti_popis4": "vlastnosti_popis4",
          "#vlastnosti_nadpis_": "vlastnosti_nadpis_",
          "#vlastnosti_popis5": "vlastnosti_popis5",
          "#vlastnosti_popis6": "vlastnosti_popis6",
          "#vlastnosti_popis7": "vlastnosti_popis7",
          "#vlastnosti_popis8": "vlastnosti_popis8",
          "#vlastnosti_btn_viac": "vlastnosti_btn_viac",
          "#vlastnosti_btn_konkurencia": "vlastnosti_btn_konkurencia",
          "#montaz_nadpis": "montaz_nadpis",
          "#montaz_popis1": "montaz_popis1",
          "#montaz_popis2": "montaz_popis2",
          "#montaz_popis3": "montaz_popis3",
          "#montaz_popis4": "montaz_popis4",
          "#montaz_nadpis_2": "montaz_nadpis_2",
          "#montaz_nadpis_2_category": "montaz_nadpis_2_category",
          "#montaz_nadpis_2_category_popis1": "montaz_nadpis_2_category_popis1",
          "#montaz_nadpis_2_category_popis2": "montaz_nadpis_2_category_popis2",
          "#montaz_nadpis_2_category_popis3": "montaz_nadpis_2_category_popis3",
          "#montaz_nadpis_2_category2": "montaz_nadpis_2_category2",
          "#montaz_nadpis_2_category2_popis1":
            "montaz_nadpis_2_category2_popis1",
          "#montaz_nadpis_2_category2_popis2":
            "montaz_nadpis_2_category2_popis2",
          "#montaz_nadpis_2_category2_popis3":
            "montaz_nadpis_2_category2_popis3",
          "#montaz_nadpis_2_category2_popis4":
            "montaz_nadpis_2_category2_popis4",
          "#montaz_nadpis_2_category3": "montaz_nadpis_2_category3",
          "#montaz_nadpis_2_category3_popis1":
            "montaz_nadpis_2_category3_popis1",
          "#montaz_nadpis_2_category3_popis2":
            "montaz_nadpis_2_category3_popis2",
          "#montaz_nadpis_2_category3_popis3":
            "montaz_nadpis_2_category3_popis3",
          "#montaz_nadpis_2_category3_popis4":
            "montaz_nadpis_2_category3_popis4",
          "#montaz_nadpis_2_category4": "montaz_nadpis_2_category4",
          "#montaz_nadpis_2_category4_popis1":
            "montaz_nadpis_2_category4_popis1",
          "#montaz_nadpis_2_category4_popis2":
            "montaz_nadpis_2_category4_popis2",
          "#montaz_nadpis_2_category4_popis3":
            "montaz_nadpis_2_category4_popis3",
          "#profil_orientacia": "profil_orientacia",
          "#profil_popis1": "profil_popis1",
          "#profil_popis2": "profil_popis2",
          "#profil_popis3": "profil_popis3",
          "#profil_popis4": "profil_popis4",
          "#postup_popis": "postup_popis",
          "#postup_nacenovac": "postup_nacenovac",
          "#nacenovac_sekcie": "nacenovac_sekcie",
          "#nadpis_vizualizacia": "nadpis_vizualizacia",
          "#popis_viz_1": "popis_viz_1",
          "#farba": "farba",
          "#btn_ceny": "btn_ceny",
          "#btn_kalkulator": "btn_kalkulator",
        },

        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":vlastnosti": actualizeData.vlastnosti,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "ostatne",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (err) {
    console.error("Error updating price offer:", err);
    throw err;
  }
}

export async function AdminActualizeBazenyPage(
  actualizeData: Bazeny,
  jazyk: string
) {
  try {
    const getCommand = new QueryCommand({
      TableName: "bazeny",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(getCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "bazeny",
        Key: {
          id: docId,
        },
        UpdateExpression: `set 
          #nadpis = :nadpis,
          #popis1 = :popis1,
          #popis2 = :popis2,
          #nadpis_galeria = :nadpis_galeria,
          #nadpis_informacie = :nadpis_informacie,
          #popis_informacie_1 = :popis_informacie_1,
          #info_variants = :info_variants,
          #fareb_var_popis1 = :fareb_var_popis1,
          #fareb_var_popis2 = :fareb_var_popis2,
          #vlastnosti_popis1 = :vlastnosti_popis1,
          #vlastnosti_popis2 = :vlastnosti_popis2,
          #vlastnosti_popis3 = :vlastnosti_popis3,
          #vlastnosti_popis4 = :vlastnosti_popis4,
          #vlastnosti_nadpis_ = :vlastnosti_nadpis_,
          #vlastnosti_popis5 = :vlastnosti_popis5,
          #vlastnosti_popis6 = :vlastnosti_popis6,
          #vlastnosti_popis7 = :vlastnosti_popis7,
          #vlastnosti_popis8 = :vlastnosti_popis8,
          #vlastnosti_btn_viac = :vlastnosti_btn_viac,
          #vlastnosti_btn_konkurencia = :vlastnosti_btn_konkurencia,
          #montaz_nadpis = :montaz_nadpis,
          #montaz_popis1 = :montaz_popis1,
          #montaz_popis2 = :montaz_popis2,
          #montaz_popis3 = :montaz_popis3,
          #montaz_popis4 = :montaz_popis4,
          #montaz_nadpis_2 = :montaz_nadpis_2,
          #montaz_nadpis_2_category = :montaz_nadpis_2_category,
          #montaz_nadpis_2_category_popis1 = :montaz_nadpis_2_category_popis1,
          #montaz_nadpis_2_category_popis2 = :montaz_nadpis_2_category_popis2,
          #montaz_nadpis_2_category_popis3 = :montaz_nadpis_2_category_popis3,
          #montaz_nadpis_2_category2 = :montaz_nadpis_2_category2,
          #montaz_nadpis_2_category2_popis1 = :montaz_nadpis_2_category2_popis1,
          #montaz_nadpis_2_category2_popis2 = :montaz_nadpis_2_category2_popis2,
          #montaz_nadpis_2_category2_popis3 = :montaz_nadpis_2_category2_popis3,
          #montaz_nadpis_2_category2_popis4 = :montaz_nadpis_2_category2_popis4,
          #montaz_nadpis_2_category3 = :montaz_nadpis_2_category3,
          #montaz_nadpis_2_category3_popis1 = :montaz_nadpis_2_category3_popis1,
          #montaz_nadpis_2_category3_popis2 = :montaz_nadpis_2_category3_popis2,
          #montaz_nadpis_2_category3_popis3 = :montaz_nadpis_2_category3_popis3,
          #montaz_nadpis_2_category3_popis4 = :montaz_nadpis_2_category3_popis4,
          #montaz_nadpis_2_category4 = :montaz_nadpis_2_category4,
          #montaz_nadpis_2_category4_popis1 = :montaz_nadpis_2_category4_popis1,
          #montaz_nadpis_2_category4_popis2 = :montaz_nadpis_2_category4_popis2,
          #montaz_nadpis_2_category4_popis3 = :montaz_nadpis_2_category4_popis3,
          #profil_orientacia = :profil_orientacia,
          #profil_popis1 = :profil_popis1,
          #profil_popis2 = :profil_popis2,
          #profil_popis3 = :profil_popis3,
          #profil_popis4 = :profil_popis4,
          #postup_popis = :postup_popis,
          #postup_nacenovac = :postup_nacenovac,
          #nacenovac_sekcie = :nacenovac_sekcie,
          #nadpis_vizualizacia = :nadpis_vizualizacia,
          #popis_viz_1 = :popis_viz_1,
          #farba = :farba,
          #btn_ceny = :btn_ceny,
          #btn_kalkulator = :btn_kalkulator,
          #jazyk = :jazyk`,
        ExpressionAttributeNames: Object.fromEntries(
          Object.keys(actualizeData).map((key) => [`#${key}`, key])
        ),
        ExpressionAttributeValues: {
          ":jazyk": jazyk,
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "bazeny",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("Error updating bazeny page:", error);
  }
}

export async function AdminActualizeTerasyPage(
  jazyk: string,
  actualizeData: Terasy
) {
  try {
    const command = new QueryCommand({
      TableName: "terasy",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(command);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "terasy",
        Key: { id: docId },
        UpdateExpression: `SET 
          #nadpis = :nadpis,
          #popis1 = :popis1,
          #popis2 = :popis2,
          #vlastnosti = :vlastnosti,
          #nadpis_galeria = :nadpis_galeria,
          #nadpis_informacie = :nadpis_informacie,
          #popis_informacie_1 = :popis_informacie_1,
          #info_variants = :info_variants,
          #jazyk = :jazyk,
          #fareb_var_popis1 = :fareb_var_popis1,
          #fareb_var_popis2 = :fareb_var_popis2,
          #vlastnosti_popis1 = :vlastnosti_popis1,
          #vlastnosti_popis2 = :vlastnosti_popis2,
          #vlastnosti_popis3 = :vlastnosti_popis3,
          #vlastnosti_popis4 = :vlastnosti_popis4,
          #vlastnosti_nadpis_ = :vlastnosti_nadpis_,
          #vlastnosti_popis5 = :vlastnosti_popis5,
          #vlastnosti_popis6 = :vlastnosti_popis6,
          #vlastnosti_popis7 = :vlastnosti_popis7,
          #vlastnosti_popis8 = :vlastnosti_popis8,
          #vlastnosti_btn_viac = :vlastnosti_btn_viac,
          #vlastnosti_btn_konkurencia = :vlastnosti_btn_konkurencia,
          #montaz_nadpis = :montaz_nadpis,
          #montaz_popis1 = :montaz_popis1,
          #montaz_popis2 = :montaz_popis2,
          #montaz_popis3 = :montaz_popis3,
          #montaz_popis4 = :montaz_popis4,
          #montaz_nadpis_2 = :montaz_nadpis_2,
          #montaz_nadpis_2_category = :montaz_nadpis_2_category,
          #montaz_nadpis_2_category_popis1 = :montaz_nadpis_2_category_popis1,
          #montaz_nadpis_2_category_popis2 = :montaz_nadpis_2_category_popis2,
          #montaz_nadpis_2_category_popis3 = :montaz_nadpis_2_category_popis3,
          #montaz_nadpis_2_category2 = :montaz_nadpis_2_category2,
          #montaz_nadpis_2_category2_popis1 = :montaz_nadpis_2_category2_popis1,
          #montaz_nadpis_2_category2_popis2 = :montaz_nadpis_2_category2_popis2,
          #montaz_nadpis_2_category2_popis3 = :montaz_nadpis_2_category2_popis3,
          #montaz_nadpis_2_category2_popis4 = :montaz_nadpis_2_category2_popis4,
          #montaz_nadpis_2_category3 = :montaz_nadpis_2_category3,
          #montaz_nadpis_2_category3_popis1 = :montaz_nadpis_2_category3_popis1,
          #montaz_nadpis_2_category3_popis2 = :montaz_nadpis_2_category3_popis2,
          #montaz_nadpis_2_category3_popis3 = :montaz_nadpis_2_category3_popis3,
          #montaz_nadpis_2_category3_popis4 = :montaz_nadpis_2_category3_popis4,
          #montaz_nadpis_2_category4 = :montaz_nadpis_2_category4,
          #montaz_nadpis_2_category4_popis1 = :montaz_nadpis_2_category4_popis1,
          #montaz_nadpis_2_category4_popis2 = :montaz_nadpis_2_category4_popis2,
          #montaz_nadpis_2_category4_popis3 = :montaz_nadpis_2_category4_popis3,
          #profil_orientacia = :profil_orientacia,
          #profil_popis1 = :profil_popis1,
          #profil_popis2 = :profil_popis2,
          #profil_popis3 = :profil_popis3,
          #profil_popis4 = :profil_popis4,
          #postup_popis = :postup_popis,
          #postup_nacenovac = :postup_nacenovac,
          #nacenovac_sekcie = :nacenovac_sekcie,
          #nadpis_vizualizacia = :nadpis_vizualizacia,
          #popis_viz_1 = :popis_viz_1,
          #farba = :farba,
          #btn_ceny = :btn_ceny,
          #btn_kalkulator = :btn_kalkulator`,
        ExpressionAttributeNames: {
          ...Object.fromEntries(
            Object.keys(actualizeData).map((key) => ["#" + key, key])
          ),
        },
        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":vlastnosti": actualizeData.vlastnosti,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":jazyk": actualizeData.jazyk,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "terasy",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (err) {
    console.error("Error updating terasy:", err);
    throw err;
  }
}

export async function AdminActualizeFasadyPresadenaPage(
  actualizeData: Fasady,
  jazyk: string
) {
  try {
    const getCommand = new QueryCommand({
      TableName: "fasady-predsadena",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(getCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "fasady-predsadena",
        Key: {
          id: docId,
        },
        UpdateExpression: `set ${Object.keys(actualizeData)
          .map((key) => `#${key} = :${key}`)
          .join(", ")}`,
        ExpressionAttributeNames: {
          ...Object.fromEntries(
            Object.keys(actualizeData).map((key) => ["#" + key, key])
          ),
        },
        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":btn_odvetrana": actualizeData.btn_odvetrana,
          ":btn_predsadena": actualizeData.btn_predsadena,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":jazyk": actualizeData.jazyk,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "fasady-predsadena",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("Error updating fasady page:", error);
  }
}

export async function AdminActualizeFasadyOdvetranaPage(
  actualizeData: Fasady,
  jazyk: string
) {
  try {
    const getCommand = new QueryCommand({
      TableName: "fasady-odvetrana",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(getCommand);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;

      const updateCommand = new UpdateCommand({
        TableName: "fasady-odvetrana",
        Key: {
          id: docId,
        },
        UpdateExpression: `set ${Object.keys(actualizeData)
          .map((key) => `#${key} = :${key}`)
          .join(", ")}`,
        ExpressionAttributeNames: {
          ...Object.fromEntries(
            Object.keys(actualizeData).map((key) => ["#" + key, key])
          ),
        },
        ExpressionAttributeValues: {
          ":nadpis": actualizeData.nadpis,
          ":popis1": actualizeData.popis1,
          ":popis2": actualizeData.popis2,
          ":btn_odvetrana": actualizeData.btn_odvetrana,
          ":btn_predsadena": actualizeData.btn_predsadena,
          ":nadpis_galeria": actualizeData.nadpis_galeria,
          ":nadpis_informacie": actualizeData.nadpis_informacie,
          ":popis_informacie_1": actualizeData.popis_informacie_1,
          ":info_variants": actualizeData.info_variants,
          ":jazyk": actualizeData.jazyk,
          ":fareb_var_popis1": actualizeData.fareb_var_popis1,
          ":fareb_var_popis2": actualizeData.fareb_var_popis2,
          ":vlastnosti_popis1": actualizeData.vlastnosti_popis1,
          ":vlastnosti_popis2": actualizeData.vlastnosti_popis2,
          ":vlastnosti_popis3": actualizeData.vlastnosti_popis3,
          ":vlastnosti_popis4": actualizeData.vlastnosti_popis4,
          ":vlastnosti_nadpis_": actualizeData.vlastnosti_nadpis_,
          ":vlastnosti_popis5": actualizeData.vlastnosti_popis5,
          ":vlastnosti_popis6": actualizeData.vlastnosti_popis6,
          ":vlastnosti_popis7": actualizeData.vlastnosti_popis7,
          ":vlastnosti_popis8": actualizeData.vlastnosti_popis8,
          ":vlastnosti_btn_viac": actualizeData.vlastnosti_btn_viac,
          ":vlastnosti_btn_konkurencia":
            actualizeData.vlastnosti_btn_konkurencia,
          ":montaz_nadpis": actualizeData.montaz_nadpis,
          ":montaz_popis1": actualizeData.montaz_popis1,
          ":montaz_popis2": actualizeData.montaz_popis2,
          ":montaz_popis3": actualizeData.montaz_popis3,
          ":montaz_popis4": actualizeData.montaz_popis4,
          ":montaz_nadpis_2": actualizeData.montaz_nadpis_2,
          ":montaz_nadpis_2_category": actualizeData.montaz_nadpis_2_category,
          ":montaz_nadpis_2_category_popis1":
            actualizeData.montaz_nadpis_2_category_popis1,
          ":montaz_nadpis_2_category_popis2":
            actualizeData.montaz_nadpis_2_category_popis2,
          ":montaz_nadpis_2_category_popis3":
            actualizeData.montaz_nadpis_2_category_popis3,
          ":montaz_nadpis_2_category2": actualizeData.montaz_nadpis_2_category2,
          ":montaz_nadpis_2_category2_popis1":
            actualizeData.montaz_nadpis_2_category2_popis1,
          ":montaz_nadpis_2_category2_popis2":
            actualizeData.montaz_nadpis_2_category2_popis2,
          ":montaz_nadpis_2_category2_popis3":
            actualizeData.montaz_nadpis_2_category2_popis3,
          ":montaz_nadpis_2_category2_popis4":
            actualizeData.montaz_nadpis_2_category2_popis4,
          ":montaz_nadpis_2_category3": actualizeData.montaz_nadpis_2_category3,
          ":montaz_nadpis_2_category3_popis1":
            actualizeData.montaz_nadpis_2_category3_popis1,
          ":montaz_nadpis_2_category3_popis2":
            actualizeData.montaz_nadpis_2_category3_popis2,
          ":montaz_nadpis_2_category3_popis3":
            actualizeData.montaz_nadpis_2_category3_popis3,
          ":montaz_nadpis_2_category3_popis4":
            actualizeData.montaz_nadpis_2_category3_popis4,
          ":montaz_nadpis_2_category4": actualizeData.montaz_nadpis_2_category4,
          ":montaz_nadpis_2_category4_popis1":
            actualizeData.montaz_nadpis_2_category4_popis1,
          ":montaz_nadpis_2_category4_popis2":
            actualizeData.montaz_nadpis_2_category4_popis2,
          ":montaz_nadpis_2_category4_popis3":
            actualizeData.montaz_nadpis_2_category4_popis3,
          ":profil_orientacia": actualizeData.profil_orientacia,
          ":profil_popis1": actualizeData.profil_popis1,
          ":profil_popis2": actualizeData.profil_popis2,
          ":profil_popis3": actualizeData.profil_popis3,
          ":profil_popis4": actualizeData.profil_popis4,
          ":postup_popis": actualizeData.postup_popis,
          ":postup_nacenovac": actualizeData.postup_nacenovac,
          ":nacenovac_sekcie": actualizeData.nacenovac_sekcie,
          ":nadpis_vizualizacia": actualizeData.nadpis_vizualizacia,
          ":popis_viz_1": actualizeData.popis_viz_1,
          ":farba": actualizeData.farba,
          ":btn_ceny": actualizeData.btn_ceny,
          ":btn_kalkulator": actualizeData.btn_kalkulator,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "fasady-odvetrana",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("Error updating fasady page:", error);
  }
}

export async function AdminAddPhotoGallery(actualizeGallery: Gallery) {
  const uuid = crypto.randomUUID();

  try {
    const response = await docClient.send(
      new PutCommand({
        TableName: "galeria",
        Item: {
          id: uuid,
          farba: actualizeGallery.farba,
          fotky: actualizeGallery.fotky,
          nazov: actualizeGallery.nazov,
          kategorie: actualizeGallery.kategorie,
          profil: actualizeGallery.profil,
          datum_pridania: new Date().toISOString(),
          partition_key: "all",
        },
      })
    );

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Add Error:", error);
    return "false";
  }
}

export async function AdminDeleteAlbum(id: string) {
  try {
    const command = new DeleteCommand({
      TableName: "galeria",
      Key: {
        id,
      },
    });

    const response = await docClient.send(command);

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("Database Error: Failed", error);
    return "false";
  }
}

export async function AdminDeleteImageFromAlbum(
  id: string,
  indexPhoto: number
) {
  try {
    const getCommand = new GetCommand({
      TableName: "galeria",
      Key: { id },
    });

    const result = await docClient.send(getCommand);

    if (!result.Item) {
      console.error("Document not found.");
      return "false";
    }

    const fotky = result.Item.fotky as string[];

    if (indexPhoto < 0 || indexPhoto >= fotky.length) {
      console.error("Invalid photo index.");
      return "false";
    }

    const new_fotky = fotky.filter((_, index) => index !== indexPhoto);

    const updateCommand = new UpdateCommand({
      TableName: "galeria",
      Key: { id },
      UpdateExpression: "SET fotky = :new_fotky",
      ExpressionAttributeValues: {
        ":new_fotky": new_fotky,
      },
    });

    const response = await docClient.send(updateCommand);

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Error:", error);
    return "false";
  }
}

export async function AdminActualizeAlbumGallery(
  id: string,
  actualizeGallery: Gallery
) {
  try {
    const response = await docClient.send(
      new UpdateCommand({
        TableName: "galeria",
        Key: { id },
        UpdateExpression: `
          SET fotky = :fotky,
              kategorie = :kategorie,
              nazov = :nazov,
              profil = :profil,
              farba = :farba,
              jazyky_kontent = :jazyky_kontent
              partition_key: partition_key
        `,
        ExpressionAttributeValues: {
          ":fotky": actualizeGallery.fotky,
          ":kategorie": actualizeGallery.kategorie,
          ":nazov": actualizeGallery.nazov,
          ":profil": actualizeGallery.profil,
          ":farba": actualizeGallery.farba,
          ":jazyky_kontent": actualizeGallery.jazyky_kontent,
          ":partition_key": actualizeGallery.partition_key,
        },
      })
    );

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Error:", error);
    return "false";
  }
}

export async function AdminActualizeContactPage(
  actualizeData: ContactPage,
  jazyk: string
) {
  try {
    const command = new QueryCommand({
      TableName: "contact",
      IndexName: "jazyk-index",
      KeyConditionExpression: "#jazyk = :jazyk",
      ExpressionAttributeNames: {
        "#jazyk": "jazyk",
      },
      ExpressionAttributeValues: {
        ":jazyk": { S: jazyk },
      },
    });

    const data = await docClient.send(command);

    if (data.Items && data.Items.length > 0) {
      const docId = data.Items[0].id.S;
      const updateCommand = new UpdateCommand({
        TableName: "contact",
        Key: {
          id: docId,
        },
        UpdateExpression: `
          SET
            #kontakt_nadpis = :kontakt_nadpis,
            #tel_number = :tel_number,
            #email = :email,
            #vzorkovne_nadpis = :vzorkovne_nadpis,
            #vzorkovne_popis1 = :vzorkovne_popis1,
            #vzorkovne_popis2 = :vzorkovne_popis2,
            #vzorkovne_popis3 = :vzorkovne_popis3,
            #vzorkovne_popis4 = :vzorkovne_popis4,
            #prevadzky_nadpis = :prevadzky_nadpis,
            #otvaracie_hodiny = :otvaracie_hodiny,
            #hodiny = :hodiny,
            #sidlo_nadpis = :sidlo_nadpis,
            #sidlo = :sidlo,
            #sidlo_popis1 = :sidlo_popis1,
            #sidlo_popis2 = :sidlo_popis2,
            #sidlo_popis3 = :sidlo_popis3
        `,
        ExpressionAttributeNames: {
          "#kontakt_nadpis": "kontakt_nadpis",
          "#tel_number": "tel_number",
          "#email": "email",
          "#vzorkovne_nadpis": "vzorkovne_nadpis",
          "#vzorkovne_popis1": "vzorkovne_popis1",
          "#vzorkovne_popis2": "vzorkovne_popis2",
          "#vzorkovne_popis3": "vzorkovne_popis3",
          "#vzorkovne_popis4": "vzorkovne_popis4",
          "#prevadzky_nadpis": "prevadzky_nadpis",
          "#otvaracie_hodiny": "otvaracie_hodiny",
          "#hodiny": "hodiny",
          "#sidlo_nadpis": "sidlo_nadpis",
          "#sidlo": "sidlo",
          "#sidlo_popis1": "sidlo_popis1",
          "#sidlo_popis2": "sidlo_popis2",
          "#sidlo_popis3": "sidlo_popis3",
        },

        ExpressionAttributeValues: {
          ":kontakt_nadpis": actualizeData.kontakt_nadpis,
          ":tel_number": actualizeData.tel_number,
          ":email": actualizeData.email,
          ":vzorkovne_nadpis": actualizeData.vzorkovne_nadpis,
          ":vzorkovne_popis1": actualizeData.vzorkovne_popis1,
          ":vzorkovne_popis2": actualizeData.vzorkovne_popis2,
          ":vzorkovne_popis3": actualizeData.vzorkovne_popis3,
          ":vzorkovne_popis4": actualizeData.vzorkovne_popis4,
          ":prevadzky_nadpis": actualizeData.prevadzky_nadpis,
          ":otvaracie_hodiny": actualizeData.otvaracie_hodiny,
          ":hodiny": actualizeData.hodiny,
          ":sidlo_nadpis": actualizeData.sidlo_nadpis,
          ":sidlo": actualizeData.sidlo,
          ":sidlo_popis1": actualizeData.sidlo_popis1,
          ":sidlo_popis2": actualizeData.sidlo_popis2,
          ":sidlo_popis3": actualizeData.sidlo_popis3,
        },
      });

      const response = await docClient.send(updateCommand);
      return response.$metadata.httpStatusCode;
    } else {
      const newId = crypto.randomUUID();

      const putCommand = new PutCommand({
        TableName: "contact",
        Item: {
          id: newId,
          ...actualizeData,
          jazyk: jazyk,
        },
      });

      const response = await docClient.send(putCommand);
      return response.$metadata.httpStatusCode;
    }
  } catch (error) {
    console.error("DynamoDB Update Error:", error);
    return "false";
  }
}

export async function AdminAddBlog(actualizeData: BlogInterface) {
  const uuid = crypto.randomUUID();

  try {
    const response = await docClient.send(
      new PutCommand({
        TableName: "blog",
        Item: {
          id: uuid,
          date: new Date().toISOString(),
          title: actualizeData.title,
          slug: createSlug(actualizeData.title),
          title_photo: actualizeData.title_photo,
          partition_key: "all",
          language_content: [],
        },
      })
    );

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Add Error:", error);
    return "false";
  }
}

export const AdminDeleteBlog = async (id: string) => {
  const command = new DeleteCommand({
    TableName: "blog",
    Key: {
      id,
    },
  });

  const response = await docClient.send(command);

  return response.$metadata.httpStatusCode;
};

export async function AdminActualizeBlog(
  id: string,
  actualizeData: BlogInterface
) {
  try {
    const response = await docClient.send(
      new UpdateCommand({
        TableName: "blog",
        Key: { id },
        UpdateExpression: `
          SET title = :title,
              #dt = :date,
              slug = :slug,
              title_photo = :title_photo,
              partition_key = :partition_key,
              language_content = :language_content
        `,
        ExpressionAttributeNames: {
          "#dt": "date",
        },
        ExpressionAttributeValues: {
          ":title": actualizeData.title,
          ":date": actualizeData.date,
          ":slug": createSlug(actualizeData.title),
          ":title_photo": actualizeData.title_photo,
          ":partition_key": actualizeData.partition_key,
          ":language_content": actualizeData.language_content,
        },
      })
    );

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Error:", error);
    return "false";
  }
}
