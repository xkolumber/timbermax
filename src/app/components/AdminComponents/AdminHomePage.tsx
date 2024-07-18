"use client";
import { AdminactualizeHomePage } from "@/app/lib/actions";
import { HomePageElements, Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
  data: HomePageElements | undefined;
  languages: Jazyk[];
}

const AdminHomePage = ({ language, data, languages }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  const [actualizeData, setActualizeData] = useState<HomePageElements>({
    button_citat_viac: "",
    button_vypocet: "",
    cenova_p_nadpis: "",
    cenova_p_popis1: "",
    cenova_p_popis2: "",
    jazyk: "",
    nase_sluzby_nadpis: "",
    nase_sluzby_veta: "",
    nase_sluzby_popis: "",
    o_nas_nadpis: "",
    o_nas_popis: "",
    o_nas_elements: [],
    ref_elements: [],
    sluzby: [],
    svg_titles: [],
    timbermax_ako: [],
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
        button_citat_viac: data.button_citat_viac,
        button_vypocet: data.button_vypocet,
        cenova_p_nadpis: data.cenova_p_nadpis,
        cenova_p_popis1: data.cenova_p_popis1,
        cenova_p_popis2: data.cenova_p_popis2,
        jazyk: data.jazyk,
        nase_sluzby_nadpis: data.nase_sluzby_nadpis,
        nase_sluzby_veta: data.nase_sluzby_veta,
        nase_sluzby_popis: data.nase_sluzby_popis,
        o_nas_nadpis: data.o_nas_nadpis,
        o_nas_popis: data.o_nas_popis,
        o_nas_elements: data.o_nas_elements,
        ref_elements: data.ref_elements,
        sluzby: data.sluzby,
        svg_titles: data.svg_titles,
        timbermax_ako: data.timbermax_ako,
      }));
    }
  }, [data]);

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await AdminactualizeHomePage(
      actualizeData.button_citat_viac,
      actualizeData.button_vypocet,
      actualizeData.cenova_p_nadpis,
      actualizeData.cenova_p_popis1,
      actualizeData.cenova_p_popis2,
      actualizeData.jazyk,
      actualizeData.nase_sluzby_nadpis,
      actualizeData.nase_sluzby_veta,
      actualizeData.nase_sluzby_popis,
      actualizeData.o_nas_nadpis,
      actualizeData.o_nas_popis,
      actualizeData.o_nas_elements,
      actualizeData.ref_elements,
      actualizeData.sluzby,
      actualizeData.svg_titles,
      actualizeData.timbermax_ako
    );
    setIsLoading(false);
    if (response === "success") {
      toast.success("Produkt bol aktualizovaný");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  return (
    <div className="main_section additional_padding">
      <Toaster />
      <Link href={"/admin"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>

      <form className="products_admin" onSubmit={handleSaveProduct}>
        <h4>Sekcia Domov</h4>
        <div className="flex flex-row gap-4">
          {languages.map((one_lang, index) => (
            <Link
              className="btn btn--primary"
              href={`/admin/domov/${one_lang.jazyk}`}
            >
              {one_lang.jazyk}
            </Link>
          ))}
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
          <input
            type="text"
            name="cenova_p_popis1"
            value={actualizeData.cenova_p_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>cenova_p_popis2:</p>
          <input
            type="text"
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
          <input
            type="text"
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
          <input
            type="text"
            name="o_nas_popis"
            value={actualizeData.o_nas_popis}
            onChange={handleChange}
            className=""
          />
        </div>
        {/* <div className="product_admin_row">
          <p>o_nas_nadpis:</p>
          <input
            type="text"
            name="o_nas_nadpis"
            value={actualizeData.o_nas_nadpis}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div> */}

        <button
          className="btn btn--primary !bg-red-700"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader
              size={20}
              color={"#00000"}
              loading={true}
              className="ml-36 mr-36"
            />
          ) : (
            "Aktualizovať produkt"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminHomePage;
