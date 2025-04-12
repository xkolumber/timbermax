"use client";
import { AdminActualizePriceOffer } from "@/app/lib/actions";
import { fetchPriceOffer } from "@/app/lib/functionsServer";
import { PriceOffer } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
}

const AdminPriceOffer = ({ language }: Props) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<PriceOffer | null>({
    queryKey: ["admin_price_offer", language],
    queryFn: () => fetchPriceOffer(language),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [isLoading2, setIsLoading2] = useState(false);
  const pathname = usePathname();

  const [actualizeData, setActualizeData] = useState<PriceOffer>({
    cennik_stiahnutie: "",
    ceny_sposob_nadpis: "",
    ceny_sposob_popis: "",
    popis_nad_fotkou: "",
    profil_nadpis: "",
    profil_popis1: "",
    profil_popis2: "",
    profil_popis3: "",
    profil_popis4: "",
    profil_popis5: "",
    profil_popis6: "",
    dielo_nadpis: "",
    dielo_popis: "",
    jazyk: "",
    relacia_nadpis: "",
    relacia_popis1: "",
    relacia_popis2: "",
    relacia_lista1: "",
    relacia_lista2: "",
    relacie: [],
    cenova_ponuka_nadpis: "",
    cenova_ponuka_popis: "",
    nacenovac: "",
    nacenovac_sekcie: [],
    posl_popis1: "",
    posl_popis2: "",
    posl_popis3: "",
    posl_popis4: "",
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
        cennik_stiahnutie: data.cennik_stiahnutie ? data.cennik_stiahnutie : "",
        ceny_sposob_nadpis: data.ceny_sposob_nadpis
          ? data.ceny_sposob_nadpis
          : "",
        ceny_sposob_popis: data.ceny_sposob_popis ? data.ceny_sposob_popis : "",
        popis_nad_fotkou: data.popis_nad_fotkou ? data.popis_nad_fotkou : "",
        profil_nadpis: data.profil_nadpis ? data.profil_nadpis : "",
        profil_popis1: data.profil_popis1 ? data.profil_popis1 : "",
        profil_popis2: data.profil_popis2 ? data.profil_popis2 : "",
        profil_popis3: data.profil_popis3 ? data.profil_popis3 : "",
        profil_popis4: data.profil_popis4 ? data.profil_popis4 : "",
        profil_popis5: data.profil_popis5 ? data.profil_popis5 : "",
        profil_popis6: data.profil_popis6 ? data.profil_popis6 : "",
        dielo_nadpis: data.dielo_nadpis ? data.dielo_nadpis : "",
        dielo_popis: data.dielo_popis ? data.dielo_popis : "",
        relacia_nadpis: data.relacia_nadpis ? data.relacia_nadpis : "",
        relacia_popis1: data.relacia_popis1 ? data.relacia_popis1 : "",
        relacia_popis2: data.relacia_popis2 ? data.relacia_popis2 : "",
        relacia_lista1: data.relacia_lista1 ? data.relacia_lista1 : "",
        relacia_lista2: data.relacia_lista2 ? data.relacia_lista2 : "",
        relacie: data.relacie.length > 0 ? data.relacie : RelacieValues,
        cenova_ponuka_nadpis: data.cenova_ponuka_nadpis
          ? data.cenova_ponuka_nadpis
          : "",
        cenova_ponuka_popis: data.cenova_ponuka_popis
          ? data.cenova_ponuka_popis
          : "",
        nacenovac: data.nacenovac ? data.nacenovac : "",
        nacenovac_sekcie:
          data.nacenovac_sekcie.length > 0
            ? data.nacenovac_sekcie
            : NacenovacValues,
        posl_popis1: data.posl_popis1 ? data.posl_popis1 : "",
        posl_popis2: data.posl_popis2 ? data.posl_popis2 : "",
        posl_popis3: data.posl_popis3 ? data.posl_popis3 : "",
        posl_popis4: data.posl_popis4 ? data.posl_popis4 : "",
      }));
    }
  }, [data]);

  const RelacieValues = [
    {
      nadpis: "",
      popis: "",
    },
    {
      nadpis: "",
      popis: "",
    },
    {
      nadpis: "",
      popis: "",
    },
  ];

  const NacenovacValues = [
    {
      nadpis: "",
      popis: "",
      button: "",
      link: "",
    },
    {
      nadpis: "",
      popis: "",
      button: "",
      link: "",
    },
    {
      nadpis: "",
      popis: "",
      button: "",
      link: "",
    },
  ];

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminActualizePriceOffer(language, actualizeData);
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["admin_price_offer", language],
      });
      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  const handleChangeItemTwoArray = (
    title: string,
    index: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => {
      const updatedArray = [...(prevData[title as keyof PriceOffer] as any[])];
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
        <>
          <form className="products_admin" onSubmit={handleSaveProduct}>
            <h4>Sekcia Cenník</h4>

            <div className="product_admin_row">
              <p>cennik_stiahnutie:</p>
              <input
                type="text"
                name="cennik_stiahnutie"
                value={actualizeData.cennik_stiahnutie}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>ceny_sposob_nadpis:</p>
              <input
                type="text"
                name="ceny_sposob_nadpis"
                value={actualizeData.ceny_sposob_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>ceny_sposob_popis:</p>
              <textarea
                name="ceny_sposob_popis"
                value={actualizeData.ceny_sposob_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>popis_nad_fotkou:</p>
              <input
                type="text"
                name="popis_nad_fotkou"
                value={actualizeData.popis_nad_fotkou}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_nadpis:</p>
              <input
                type="text"
                name="profil_nadpis"
                value={actualizeData.profil_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis1:</p>
              <textarea
                name="profil_popis1"
                value={actualizeData.profil_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis2:</p>
              <textarea
                name="profil_popis2"
                value={actualizeData.profil_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis3:</p>
              <textarea
                name="profil_popis3"
                value={actualizeData.profil_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis4:</p>
              <textarea
                name="profil_popis4"
                value={actualizeData.profil_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis5:</p>
              <textarea
                name="profil_popis5"
                value={actualizeData.profil_popis5}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis6:</p>
              <textarea
                name="profil_popis6"
                value={actualizeData.profil_popis6}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>dielo_nadpis:</p>
              <input
                type="text"
                name="dielo_nadpis"
                value={actualizeData.dielo_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>dielo_popis:</p>
              <textarea
                name="dielo_popis"
                value={actualizeData.dielo_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>relacia_nadpis:</p>
              <input
                type="text"
                name="relacia_nadpis"
                value={actualizeData.relacia_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>relacia_popis1:</p>
              <textarea
                name="relacia_popis1"
                value={actualizeData.relacia_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>relacia_popis2:</p>
              <textarea
                name="relacia_popis2"
                value={actualizeData.relacia_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>relacia_lista1:</p>
              <input
                type="text"
                name="relacia_lista1"
                value={actualizeData.relacia_lista1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>relacia_lista2:</p>
              <input
                type="text"
                name="relacia_lista2"
                value={actualizeData.relacia_lista2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            {/*Relacie */}

            <div className="product_admin_row">
              <p>relacie:</p>
              <div className="flex flex-col">
                {actualizeData.relacie.map((element, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <input
                      type="text"
                      name={`relacie-nadpis-${index}`}
                      value={element.nadpis}
                      onChange={(e) =>
                        handleChangeItemTwoArray("relacie", index, "nadpis", e)
                      }
                      className="md:!w-[450px] mt-2"
                    />
                    <input
                      type="text"
                      name={`relacie-popis-${index}`}
                      value={element.popis}
                      onChange={(e) =>
                        handleChangeItemTwoArray("relacie", index, "popis", e)
                      }
                      className="md:!w-[450px] mt-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product_admin_row">
              <p>cenova_ponuka_nadpis:</p>
              <input
                type="text"
                name="cenova_ponuka_nadpis"
                value={actualizeData.cenova_ponuka_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>cenova_ponuka_popis:</p>
              <textarea
                name="cenova_ponuka_popis"
                value={actualizeData.cenova_ponuka_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>nacenovac:</p>
              <input
                type="text"
                name="nacenovac"
                value={actualizeData.nacenovac}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>nacenovac_sekcie:</p>
              <div className="flex flex-col">
                {actualizeData.nacenovac_sekcie.map((element, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <input
                      type="text"
                      name={`nacenovac_sekcie-nadpis-${index}`}
                      value={element.nadpis}
                      placeholder="nadpis"
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "nadpis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                    />
                    <input
                      type="text"
                      name={`nacenovac_sekcie-popis-${index}`}
                      value={element.popis}
                      placeholder="popis"
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "popis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                    />
                    <input
                      type="text"
                      name={`nacenovac_sekcie-button-${index}`}
                      value={element.button}
                      placeholder="button"
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "button",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                    />
                    <input
                      type="text"
                      name={`timbermax_ako-link-${index}`}
                      value={element.link}
                      placeholder="link"
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
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
              <p>posl_popis1:</p>
              <textarea
                name="posl_popis1"
                value={actualizeData.posl_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>posl_popis2:</p>
              <textarea
                name="posl_popis2"
                value={actualizeData.posl_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>posl_popis3:</p>
              <textarea
                name="posl_popis3"
                value={actualizeData.posl_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>posl_popis4:</p>
              <textarea
                name="posl_popis4"
                value={actualizeData.posl_popis4}
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
        </>
      )}
    </div>
  );
};

export default AdminPriceOffer;
