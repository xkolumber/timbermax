"use client";
import { AdminActualizeMoreAboutPage } from "@/app/lib/actions";
import { fetchMoreAbout, fetchMoreAboutAdmin } from "@/app/lib/functionsServer";
import { MoreAboutTimElements } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
}

const AdminAboutTimbermax = ({ language }: Props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<MoreAboutTimElements | null>({
    queryKey: ["admin_more_about", language],
    queryFn: () => fetchMoreAboutAdmin(language),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [isLoading2, setIsLoading2] = useState(false);

  const [actualizeData, setActualizeData] = useState<MoreAboutTimElements>({
    nadpis: "",
    popis1: "",
    popis2: "",
    popis_porovnanie: "",
    tim_vs_konk: "",
    next_popis1: "",
    next_popis2: "",
    next_popis3: "",
    next_popis4: "",
    btn_exotic: "",
    btn_rustic: "",
    pod_btn: "",
    jazyk: "",
    another_popis1: "",
    another_popis2: "",
    lahko_nadpis: "",
    lahko_popis: "",
    fareb_nadpis: "",
    fareb_popis: "",
    tepel_nadpis: "",
    tepel_popis: "",
    prehrev_nadpis: "",
    prehrev_popis1: "",
    prehrev_popis2: "",
    prehrev_popis3: "",
    prehrev_popis4: "",
    prehrev_popis5: "",
    prehrev_popis6: "",
    mech_nadpis: "",
    mech_popis: "",
    tvar_nadpis: "",
    tvar_popis1: "",
    tvar_popis2: "",
    tvar_popis3: "",
    tvar_popis4: "",
    tvar_popis5: "",
    tvar_popis6: "",
    tvar_popis7: "",
    profil_nadpis: "",
    profil_popis1: "",
    profil_popis2: "",
    profil_popis3: "",
    profil_popis4: "",
    nadpis_vizualizacia: "",
    popis_viz_1: "",
    farba: "",
    btn_ceny: "",
    btn_kalkulator: "",
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
        nadpis: data.nadpis,
        popis1: data.popis1,
        popis2: data.popis2,
        popis_porovnanie: data.popis_porovnanie,
        tim_vs_konk: data.tim_vs_konk,
        next_popis1: data.next_popis1,
        next_popis2: data.next_popis2,
        next_popis3: data.next_popis3,
        next_popis4: data.next_popis4,
        btn_exotic: data.btn_exotic,
        btn_rustic: data.btn_rustic,
        pod_btn: data.pod_btn,
        jazyk: language,
        another_popis1: data.another_popis1,
        another_popis2: data.another_popis2,
        lahko_nadpis: data.lahko_nadpis,
        lahko_popis: data.lahko_popis,
        fareb_nadpis: data.fareb_nadpis,
        fareb_popis: data.fareb_popis,
        tepel_nadpis: data.tepel_nadpis,
        tepel_popis: data.tepel_popis,
        prehrev_nadpis: data.prehrev_nadpis,
        prehrev_popis1: data.prehrev_popis1,
        prehrev_popis2: data.prehrev_popis2,
        prehrev_popis3: data.prehrev_popis3,
        prehrev_popis4: data.prehrev_popis4,
        prehrev_popis5: data.prehrev_popis5,
        prehrev_popis6: data.prehrev_popis6,
        mech_nadpis: data.mech_nadpis,
        mech_popis: data.mech_popis,
        tvar_nadpis: data.tvar_nadpis,
        tvar_popis1: data.tvar_popis1,
        tvar_popis2: data.tvar_popis2,
        tvar_popis3: data.tvar_popis3,
        tvar_popis4: data.tvar_popis4,
        tvar_popis5: data.tvar_popis5,
        tvar_popis6: data.tvar_popis6,
        tvar_popis7: data.tvar_popis7,
        profil_nadpis: data.profil_nadpis,
        profil_popis1: data.profil_popis1,
        profil_popis2: data.profil_popis2,
        profil_popis3: data.profil_popis3,
        profil_popis4: data.profil_popis4,
        nadpis_vizualizacia: data.nadpis_vizualizacia,
        popis_viz_1: data.popis_viz_1,
        farba: data.farba,
        btn_ceny: data.btn_ceny,
        btn_kalkulator: data.btn_kalkulator,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setActualizeData((prevData) => ({
        ...prevData,
        nadpis: "",
        popis1: "",
        popis2: "",
        popis_porovnanie: "",
        tim_vs_konk: "",
        next_popis1: "",
        next_popis2: "",
        next_popis3: "",
        next_popis4: "",
        btn_exotic: "",
        btn_rustic: "",
        pod_btn: "",
        jazyk: language,
        another_popis1: "",
        another_popis2: "",
        lahko_nadpis: "",
        lahko_popis: "",
        fareb_nadpis: "",
        fareb_popis: "",
        tepel_nadpis: "",
        tepel_popis: "",
        prehrev_nadpis: "",
        prehrev_popis1: "",
        prehrev_popis2: "",
        prehrev_popis3: "",
        prehrev_popis4: "",
        prehrev_popis5: "",
        prehrev_popis6: "",
        mech_nadpis: "",
        mech_popis: "",
        tvar_nadpis: "",
        tvar_popis1: "",
        tvar_popis2: "",
        tvar_popis3: "",
        tvar_popis4: "",
        tvar_popis5: "",
        tvar_popis6: "",
        tvar_popis7: "",
        profil_nadpis: "",
        profil_popis1: "",
        profil_popis2: "",
        profil_popis3: "",
        profil_popis4: "",
        nadpis_vizualizacia: "",
        popis_viz_1: "",
        farba: "",
        btn_ceny: "",
        btn_kalkulator: "",
      }));
    }
  }, [error]);

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminActualizeMoreAboutPage(language, actualizeData);
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["admin_more_about", language],
      });
      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  return (
    <div className="">
      <Toaster />

      {isLoading && <CircularProgress size={24} color="inherit" />}
      {error && (
        <form className="products_admin" onSubmit={handleSaveProduct}>
          <h4>Sekcia Viac o Timbermaxe</h4>

          <div className="product_admin_row">
            <p>nadpis:</p>
            <input
              type="text"
              name="nadpis"
              value={actualizeData.nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>popis1:</p>
            <textarea
              name="popis1"
              value={actualizeData.popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>popis2:</p>
            <textarea
              name="popis2"
              value={actualizeData.popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>popis_porovnanie:</p>
            <textarea
              name="popis_porovnanie"
              value={actualizeData.popis_porovnanie}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tim_vs_konk:</p>
            <input
              type="text"
              name="tim_vs_konk"
              value={actualizeData.tim_vs_konk}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>next_popis1:</p>
            <textarea
              name="next_popis1"
              value={actualizeData.next_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>next_popis2:</p>
            <textarea
              name="next_popis2"
              value={actualizeData.next_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>next_popis3:</p>
            <textarea
              name="next_popis3"
              value={actualizeData.next_popis3}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>next_popis4:</p>
            <textarea
              name="next_popis4"
              value={actualizeData.next_popis4}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>btn_rustic:</p>
            <input
              type="text"
              name="btn_rustic"
              value={actualizeData.btn_rustic}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>pod_btn:</p>
            <input
              type="text"
              name="pod_btn"
              value={actualizeData.pod_btn}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>another_popis1:</p>
            <textarea
              name="another_popis1"
              value={actualizeData.another_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>another_popis2:</p>
            <textarea
              name="another_popis2"
              value={actualizeData.another_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>lahko_nadpis:</p>
            <input
              type="text"
              name="lahko_nadpis"
              value={actualizeData.lahko_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>lahko_popis:</p>
            <textarea
              name="lahko_popis"
              value={actualizeData.lahko_popis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>fareb_nadpis:</p>
            <input
              type="text"
              name="fareb_nadpis"
              value={actualizeData.fareb_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>fareb_popis:</p>
            <textarea
              name="fareb_popis"
              value={actualizeData.fareb_popis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tepel_nadpis:</p>
            <input
              type="text"
              name="tepel_nadpis"
              value={actualizeData.tepel_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tepel_popis:</p>
            <textarea
              name="tepel_popis"
              value={actualizeData.tepel_popis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_nadpis:</p>
            <input
              type="text"
              name="prehrev_nadpis"
              value={actualizeData.prehrev_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis1:</p>
            <textarea
              name="prehrev_popis1"
              value={actualizeData.prehrev_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis2:</p>
            <textarea
              name="prehrev_popis2"
              value={actualizeData.prehrev_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis3:</p>
            <textarea
              name="prehrev_popis3"
              value={actualizeData.prehrev_popis3}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis4:</p>
            <textarea
              name="prehrev_popis4"
              value={actualizeData.prehrev_popis4}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis5:</p>
            <textarea
              name="prehrev_popis5"
              value={actualizeData.prehrev_popis5}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prehrev_popis6:</p>
            <textarea
              name="prehrev_popis6"
              value={actualizeData.prehrev_popis6}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>mech_nadpis:</p>
            <input
              type="text"
              name="mech_nadpis"
              value={actualizeData.mech_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>mech_popis:</p>
            <textarea
              name="mech_popis"
              value={actualizeData.mech_popis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_nadpis:</p>
            <input
              type="text"
              name="tvar_nadpis"
              value={actualizeData.tvar_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis1:</p>
            <textarea
              name="tvar_popis1"
              value={actualizeData.tvar_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis2:</p>
            <textarea
              name="tvar_popis2"
              value={actualizeData.tvar_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis3:</p>
            <textarea
              name="tvar_popis3"
              value={actualizeData.tvar_popis3}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis4:</p>
            <textarea
              name="tvar_popis4"
              value={actualizeData.tvar_popis4}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis5:</p>
            <textarea
              name="tvar_popis5"
              value={actualizeData.tvar_popis5}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis6:</p>
            <textarea
              name="tvar_popis6"
              value={actualizeData.tvar_popis6}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tvar_popis7:</p>
            <textarea
              name="tvar_popis7"
              value={actualizeData.tvar_popis7}
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
            <p>nadpis_vizualizacia:</p>
            <input
              type="text"
              name="nadpis_vizualizacia"
              value={actualizeData.nadpis_vizualizacia}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>popis_viz_1:</p>
            <textarea
              name="popis_viz_1"
              value={actualizeData.popis_viz_1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>

          <div className="product_admin_row">
            <p>farba:</p>
            <input
              type="text"
              name="farba"
              value={actualizeData.farba}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>

          <div className="product_admin_row">
            <p>btn_ceny:</p>
            <input
              type="text"
              name="btn_ceny"
              value={actualizeData.btn_ceny}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>btn_kalkulator:</p>
            <input
              type="text"
              name="btn_kalkulator"
              value={actualizeData.btn_kalkulator}
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

      {data && (
        <>
          <form className="products_admin" onSubmit={handleSaveProduct}>
            <h4>Sekcia Viac o Timbermaxe</h4>

            <div className="product_admin_row">
              <p>nadpis:</p>
              <input
                type="text"
                name="nadpis"
                value={actualizeData.nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>popis1:</p>
              <textarea
                name="popis1"
                value={actualizeData.popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>popis2:</p>
              <textarea
                name="popis2"
                value={actualizeData.popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>popis_porovnanie:</p>
              <textarea
                name="popis_porovnanie"
                value={actualizeData.popis_porovnanie}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tim_vs_konk:</p>
              <input
                type="text"
                name="tim_vs_konk"
                value={actualizeData.tim_vs_konk}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>next_popis1:</p>
              <textarea
                name="next_popis1"
                value={actualizeData.next_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>next_popis2:</p>
              <textarea
                name="next_popis2"
                value={actualizeData.next_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>next_popis3:</p>
              <textarea
                name="next_popis3"
                value={actualizeData.next_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>next_popis4:</p>
              <textarea
                name="next_popis4"
                value={actualizeData.next_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>btn_rustic:</p>
              <input
                type="text"
                name="btn_rustic"
                value={actualizeData.btn_rustic}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>pod_btn:</p>
              <input
                type="text"
                name="pod_btn"
                value={actualizeData.pod_btn}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>another_popis1:</p>
              <textarea
                name="another_popis1"
                value={actualizeData.another_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>another_popis2:</p>
              <textarea
                name="another_popis2"
                value={actualizeData.another_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>lahko_nadpis:</p>
              <input
                type="text"
                name="lahko_nadpis"
                value={actualizeData.lahko_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>lahko_popis:</p>
              <textarea
                name="lahko_popis"
                value={actualizeData.lahko_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>fareb_nadpis:</p>
              <input
                type="text"
                name="fareb_nadpis"
                value={actualizeData.fareb_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>fareb_popis:</p>
              <textarea
                name="fareb_popis"
                value={actualizeData.fareb_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tepel_nadpis:</p>
              <input
                type="text"
                name="tepel_nadpis"
                value={actualizeData.tepel_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tepel_popis:</p>
              <textarea
                name="tepel_popis"
                value={actualizeData.tepel_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_nadpis:</p>
              <input
                type="text"
                name="prehrev_nadpis"
                value={actualizeData.prehrev_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis1:</p>
              <textarea
                name="prehrev_popis1"
                value={actualizeData.prehrev_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis2:</p>
              <textarea
                name="prehrev_popis2"
                value={actualizeData.prehrev_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis3:</p>
              <textarea
                name="prehrev_popis3"
                value={actualizeData.prehrev_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis4:</p>
              <textarea
                name="prehrev_popis4"
                value={actualizeData.prehrev_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis5:</p>
              <textarea
                name="prehrev_popis5"
                value={actualizeData.prehrev_popis5}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>prehrev_popis6:</p>
              <textarea
                name="prehrev_popis6"
                value={actualizeData.prehrev_popis6}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>mech_nadpis:</p>
              <input
                type="text"
                name="mech_nadpis"
                value={actualizeData.mech_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>mech_popis:</p>
              <textarea
                name="mech_popis"
                value={actualizeData.mech_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_nadpis:</p>
              <input
                type="text"
                name="tvar_nadpis"
                value={actualizeData.tvar_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis1:</p>
              <textarea
                name="tvar_popis1"
                value={actualizeData.tvar_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis2:</p>
              <textarea
                name="tvar_popis2"
                value={actualizeData.tvar_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis3:</p>
              <textarea
                name="tvar_popis3"
                value={actualizeData.tvar_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis4:</p>
              <textarea
                name="tvar_popis4"
                value={actualizeData.tvar_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis5:</p>
              <textarea
                name="tvar_popis5"
                value={actualizeData.tvar_popis5}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis6:</p>
              <textarea
                name="tvar_popis6"
                value={actualizeData.tvar_popis6}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>tvar_popis7:</p>
              <textarea
                name="tvar_popis7"
                value={actualizeData.tvar_popis7}
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
              <p>nadpis_vizualizacia:</p>
              <input
                type="text"
                name="nadpis_vizualizacia"
                value={actualizeData.nadpis_vizualizacia}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>popis_viz_1:</p>
              <textarea
                name="popis_viz_1"
                value={actualizeData.popis_viz_1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>farba:</p>
              <input
                type="text"
                name="farba"
                value={actualizeData.farba}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>btn_ceny:</p>
              <input
                type="text"
                name="btn_ceny"
                value={actualizeData.btn_ceny}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>btn_kalkulator:</p>
              <input
                type="text"
                name="btn_kalkulator"
                value={actualizeData.btn_kalkulator}
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

export default AdminAboutTimbermax;
