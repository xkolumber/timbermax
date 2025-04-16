"use client";
import { AdminactualizeHomePage } from "@/app/lib/actions";
import {
  empty_five_values,
  empty_three_values,
  EmptyServices,
  EmptyTimbermaxLike,
} from "@/app/lib/functionsClient";
import { fetchHomepage } from "@/app/lib/functionsServer";
import { HomePageElements } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
}

const AdminHomePage = ({ language }: Props) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<HomePageElements | null>({
    queryKey: ["admin_home_page", language],
    queryFn: () => fetchHomepage(language),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [isLoading2, setIsLoading2] = useState(false);

  const [actualizeData, setActualizeData] = useState<HomePageElements>({
    button_citat_viac: "",
    button_vypocet: "",
    cenova_p_nadpis: "",
    cenova_p_popis1: "",
    cenova_p_popis2: "",
    jazyk: "",
    mapa_showroomov: "",
    nase_sluzby_nadpis: "",
    nase_sluzby_veta: "",
    nase_sluzby_popis: "",
    o_nas_nadpis: "",
    o_nas_popis: "",
    o_nas_elements: [],
    ref_elements: [],
    rokov_skusenosti: "",
    sluzby: [],
    svg_titles: [],
    timbermax_ako: [],
    timbermax_ako_mobile_nadpis: "",
    timbermax_ako_mobile_popisy: [],
    text_photo1: "",
    text_photo2: "",
    text_photo3: "",
    text_photo4: "",
    text_photo5: "",
    text_photo6: "",
    text_photo7: "",
    text_photo8: "",
    references_title: "",
    references: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  useEffect(() => {
    if (data) {
      setActualizeData((prevData) => ({
        ...prevData,
        button_citat_viac: data.button_citat_viac ? data.button_citat_viac : "",
        button_vypocet: data.button_vypocet ? data.button_vypocet : "",
        cenova_p_nadpis: data.cenova_p_nadpis ? data.cenova_p_nadpis : "",
        cenova_p_popis1: data.cenova_p_popis1 ? data.cenova_p_popis1 : "",
        cenova_p_popis2: data.cenova_p_popis2 ? data.cenova_p_popis2 : "",
        jazyk: data.jazyk,
        mapa_showroomov: data.mapa_showroomov ? data.mapa_showroomov : "",
        nase_sluzby_nadpis: data.nase_sluzby_nadpis
          ? data.nase_sluzby_nadpis
          : "",
        nase_sluzby_veta: data.nase_sluzby_veta ? data.nase_sluzby_veta : "",
        nase_sluzby_popis: data.nase_sluzby_popis ? data.nase_sluzby_popis : "",
        o_nas_nadpis: data.o_nas_nadpis ? data.o_nas_nadpis : "",
        o_nas_popis: data.o_nas_popis ? data.o_nas_popis : "",
        o_nas_elements: data.o_nas_elements,
        ref_elements: data.ref_elements,
        rokov_skusenosti: data.rokov_skusenosti ? data.rokov_skusenosti : "",
        sluzby: data.sluzby ? data.sluzby : EmptyServices,
        svg_titles: data.svg_titles ? data.svg_titles : empty_three_values,
        timbermax_ako: data.timbermax_ako
          ? data.timbermax_ako
          : EmptyTimbermaxLike,
        timbermax_ako_mobile_nadpis: data.timbermax_ako_mobile_nadpis
          ? data.timbermax_ako_mobile_nadpis
          : "",
        timbermax_ako_mobile_popisy: data.timbermax_ako_mobile_popisy
          ? data.timbermax_ako_mobile_popisy
          : EmptyTimbermaxLike,
        text_photo1: data.text_photo1 ? data.text_photo1 : "",
        text_photo2: data.text_photo2 ? data.text_photo2 : "",
        text_photo3: data.text_photo3 ? data.text_photo3 : "",
        text_photo4: data.text_photo4 ? data.text_photo4 : "",
        text_photo5: data.text_photo5 ? data.text_photo5 : "",
        text_photo6: data.text_photo6 ? data.text_photo6 : "",
        text_photo7: data.text_photo7 ? data.text_photo7 : "",
        text_photo8: data.text_photo8 ? data.text_photo8 : "",
        references_title: data.references_title ? data.references_title : "",
        references: data.references ? data.references : empty_five_values,
      }));
    }
  }, [data]);

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminactualizeHomePage(actualizeData, language);
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["admin_about_us", language],
      });
      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  const handleChangeItemArray = (
    title: string,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => {
      const updatedArray = [
        ...(prevData[title as keyof HomePageElements] as string[]),
      ];
      updatedArray[index] = event.target.value;
      return {
        ...prevData,
        [title]: updatedArray,
      };
    });
  };

  const handleChangeItemTwoArray = (
    title: string,
    index: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => {
      const updatedArray = [
        ...(prevData[title as keyof HomePageElements] as any[]),
      ];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: event.target.value,
      };
      return {
        ...prevData,
        [title]: updatedArray,
      };
    });
  };

  return (
    <div className="">
      <Toaster />
      {isLoading && <CircularProgress size={24} color="inherit" />}
      {error && <p>Chyba pri načítaní dát.</p>}

      {data && (
        <form className="products_admin" onSubmit={handleSaveProduct}>
          <h4>Sekcia Domov</h4>

          <div className="product_admin_row">
            <p>text_photo1:</p>
            <input
              type="text"
              name="text_photo1"
              value={actualizeData.text_photo1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo2:</p>
            <input
              type="text"
              name="text_photo2"
              value={actualizeData.text_photo2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo3:</p>
            <input
              type="text"
              name="text_photo3"
              value={actualizeData.text_photo3}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo4:</p>
            <input
              type="text"
              name="text_photo4"
              value={actualizeData.text_photo4}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo5:</p>
            <input
              type="text"
              name="text_photo5"
              value={actualizeData.text_photo5}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo6:</p>
            <input
              type="text"
              name="text_photo6"
              value={actualizeData.text_photo6}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo7:</p>
            <input
              type="text"
              name="text_photo7"
              value={actualizeData.text_photo7}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>text_photo8:</p>
            <input
              type="text"
              name="text_photo8"
              value={actualizeData.text_photo8}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>button_citat_viac:</p>
            <input
              type="text"
              name="button_citat_viac"
              value={actualizeData.button_citat_viac}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>button_vypocet:</p>
            <input
              type="text"
              name="button_vypocet"
              value={actualizeData.button_vypocet}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>cenova_p_nadpis:</p>
            <input
              type="text"
              name="cenova_p_nadpis"
              value={actualizeData.cenova_p_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>cenova_p_popis1:</p>
            <textarea
              name="cenova_p_popis1"
              value={actualizeData.cenova_p_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>cenova_p_popis2:</p>
            <textarea
              name="cenova_p_popis2"
              value={actualizeData.cenova_p_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>nase_sluzby_nadpis:</p>
            <input
              type="text"
              name="nase_sluzby_nadpis"
              value={actualizeData.nase_sluzby_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>nase_sluzby_veta:</p>
            <input
              type="text"
              name="nase_sluzby_veta"
              value={actualizeData.nase_sluzby_veta}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>nase_sluzby_popis:</p>
            <textarea
              name="nase_sluzby_popis"
              value={actualizeData.nase_sluzby_popis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>o_nas_nadpis:</p>
            <input
              type="text"
              name="o_nas_nadpis"
              value={actualizeData.o_nas_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>o_nas_popis:</p>
            <textarea
              name="o_nas_popis"
              value={actualizeData.o_nas_popis}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="product_admin_row">
            <p>rokov_skusenosti:</p>
            <input
              type="text"
              name="rokov_skusenosti"
              value={actualizeData.rokov_skusenosti}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="product_admin_row">
            <p>o_nas_elements:</p>
            <div className="flex flex-col">
              {actualizeData.o_nas_elements.map((size, index) => (
                <input
                  key={index}
                  type="text"
                  name={`o_nas_elements${index}`}
                  value={size}
                  onChange={(e) =>
                    handleChangeItemArray("o_nas_elements", index, e)
                  }
                  className="md:!w-[450px] mt-2"
                />
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>ref_elements:</p>
            <div className="flex flex-col">
              {actualizeData.ref_elements.map((size, index) => (
                <input
                  key={index}
                  type="text"
                  name={`ref_elements${index}`}
                  value={size}
                  onChange={(e) =>
                    handleChangeItemArray("ref_elements", index, e)
                  }
                  className="md:!w-[450px] mt-2"
                />
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>sluzby:</p>
            <div className="flex flex-col">
              {actualizeData.sluzby.map((element, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <input
                    type="text"
                    name={`sluzby-nadpis-${index}`}
                    value={element.nadpis}
                    onChange={(e) =>
                      handleChangeItemTwoArray("sluzby", index, "nadpis", e)
                    }
                    className="md:!w-[450px] mt-2"
                  />
                  <input
                    type="text"
                    name={`sluzby-popis-${index}`}
                    value={element.popis}
                    onChange={(e) =>
                      handleChangeItemTwoArray("sluzby", index, "popis", e)
                    }
                    className="md:!w-[450px] mt-2"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>timbermax_ako:</p>
            <div className="flex flex-col">
              {actualizeData.timbermax_ako.map((element, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <input
                    type="text"
                    name={`timbermax_ako-nadpis-${index}`}
                    value={element.nadpis}
                    onChange={(e) =>
                      handleChangeItemTwoArray(
                        "timbermax_ako",
                        index,
                        "nadpis",
                        e
                      )
                    }
                    className="md:!w-[450px] mt-2"
                  />
                  <input
                    type="text"
                    name={`timbermax_ako-popis-${index}`}
                    value={element.popis}
                    onChange={(e) =>
                      handleChangeItemTwoArray(
                        "timbermax_ako",
                        index,
                        "popis",
                        e
                      )
                    }
                    className="md:!w-[450px] mt-2"
                  />
                  <input
                    type="text"
                    name={`timbermax_ako-link-${index}`}
                    value={element.link}
                    onChange={(e) =>
                      handleChangeItemTwoArray(
                        "timbermax_ako",
                        index,
                        "link",
                        e
                      )
                    }
                    className="md:!w-[450px] mt-2"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>timbermax_ako_mobile_nadpis:</p>
            <input
              type="text"
              name="timbermax_ako_mobile_nadpis"
              value={actualizeData.timbermax_ako_mobile_nadpis}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="product_admin_row">
            <p>timbermax_ako_mobile_popisy:</p>
            <div className="flex flex-col">
              {actualizeData.timbermax_ako_mobile_popisy.map(
                (element, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <input
                      type="text"
                      name={`timbermax_ako_mobile_popisy-nadpis-${index}`}
                      value={element.nadpis}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "timbermax_ako_mobile_popisy",
                          index,
                          "nadpis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="nadpis"
                    />
                    <input
                      type="text"
                      name={`timbermax_ako_mobile_popisy-popis-${index}`}
                      value={element.popis}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "timbermax_ako_mobile_popisy",
                          index,
                          "popis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="popis"
                    />
                    <input
                      type="text"
                      name={`timbermax_ako_mobile_popisy-link-${index}`}
                      value={element.link}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "timbermax_ako_mobile_popisy",
                          index,
                          "link",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="link"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="product_admin_row">
            <p>svg_titles:</p>
            <div className="flex flex-col">
              {actualizeData.svg_titles.map((size, index) => (
                <input
                  key={index}
                  type="text"
                  name={`sluzby${index}`}
                  value={size}
                  onChange={(e) =>
                    handleChangeItemArray("ref_elements", index, e)
                  }
                  className="md:!w-[450px] mt-2"
                />
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>references_title:</p>
            <input
              type="text"
              name="references_title"
              value={actualizeData.references_title}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="product_admin_row">
            <p>references:</p>
            <div className="flex flex-col">
              {actualizeData.references.map((size, index) => (
                <input
                  key={index}
                  type="text"
                  name={`references${index}`}
                  value={size}
                  onChange={(e) =>
                    handleChangeItemArray("references", index, e)
                  }
                  className="md:!w-[450px] mt-2"
                />
              ))}
            </div>
          </div>
          <div className="product_admin_row">
            <p>mapa_showroomov:</p>
            <input
              type="text"
              name="mapa_showroomov"
              value={actualizeData.mapa_showroomov}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <button
            className={`btn btn--primary !bg-red-700 !min-w-[250px] ${
              isLoading2 && "disabledBtn"
            }`}
            type="submit"
            disabled={isLoading2}
          >
            {isLoading2 ? (
              <ClipLoader
                size={20}
                color={"#00000"}
                loading={true}
                className="ml-24 mr-24"
              />
            ) : (
              "Aktualizovať sekciu"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminHomePage;
