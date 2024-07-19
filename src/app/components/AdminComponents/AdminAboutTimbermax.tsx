"use client";
import {
  AdminActualizeAboutUsPage,
  AdminActualizeMoreAboutPage,
} from "@/app/lib/actions";
import { getSecondPathValue } from "@/app/lib/functionsClient";
import {
  AboutUsElements,
  Jazyk,
  MoreAboutTimElements,
} from "@/app/lib/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
  data: MoreAboutTimElements | undefined;
  languages: Jazyk[];
}

const AdminAboutTimbermax = ({ language, data, languages }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

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
        nadpis: data.nadpis ? data.nadpis : "",
        popis1: data.popis1 ? data.popis1 : "",
        popis2: data.popis2 ? data.popis2 : "",
        popis_porovnanie: data.popis_porovnanie ? data.popis_porovnanie : "",
        tim_vs_konk: data.tim_vs_konk ? data.tim_vs_konk : "",
        next_popis1: data.next_popis1 ? data.next_popis1 : "",
        next_popis2: data.next_popis2 ? data.next_popis2 : "",
        next_popis3: data.next_popis3 ? data.next_popis3 : "",
        next_popis4: data.next_popis4 ? data.next_popis4 : "",
        btn_exotic: data.btn_exotic ? data.btn_exotic : "",
        btn_rustic: data.btn_rustic ? data.btn_rustic : "",
        pod_btn: data.pod_btn ? data.pod_btn : "",
        jazyk: language,
        another_popis1: data.another_popis1 ? data.another_popis1 : "",
        another_popis2: data.another_popis2 ? data.another_popis2 : "",
        lahko_nadpis: data.lahko_nadpis ? data.lahko_nadpis : "",
        lahko_popis: data.nadpis ? data.lahko_popis : "",
      }));
    }
  }, [data]);

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await AdminActualizeMoreAboutPage(
      actualizeData.nadpis,
      actualizeData.popis1,
      actualizeData.popis2,
      actualizeData.popis_porovnanie,
      actualizeData.tim_vs_konk,
      actualizeData.next_popis1,
      actualizeData.next_popis2,
      actualizeData.next_popis3,
      actualizeData.next_popis4,
      actualizeData.btn_exotic,
      actualizeData.btn_rustic,
      actualizeData.pod_btn,
      language,
      actualizeData.another_popis1,
      actualizeData.another_popis2,
      actualizeData.lahko_nadpis,
      actualizeData.lahko_popis
    );
    setIsLoading(false);
    if (response === "success") {
      toast.success("Sekcia bola aktualizovaná");
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
        <h4>Sekcia Viac o Timbermaxe</h4>
        <div className="flex flex-row gap-4">
          {languages.map((one_lang, index) => (
            <Link
              className={`btn btn--primary ${
                language === one_lang.jazyk && "!bg-green-800"
              }`}
              href={`/admin/${getSecondPathValue(pathname)}/${one_lang.jazyk}`}
              key={index}
            >
              {one_lang.jazyk}
            </Link>
          ))}
        </div>
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
          <input
            type="text"
            name="popis1"
            value={actualizeData.popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>popis2:</p>
          <input
            type="text"
            name="popis2"
            value={actualizeData.popis2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>popis_porovnanie:</p>
          <input
            type="text"
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
          <input
            type="text"
            name="next_popis1"
            value={actualizeData.next_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>next_popis2:</p>
          <input
            type="text"
            name="next_popis2"
            value={actualizeData.next_popis2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>next_popis3:</p>
          <input
            type="text"
            name="next_popis3"
            value={actualizeData.next_popis3}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>next_popis4:</p>
          <input
            type="text"
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
          <input
            type="text"
            name="another_popis1"
            value={actualizeData.another_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>another_popis2:</p>
          <input
            type="text"
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
          <input
            type="text"
            name="lahko_popis"
            value={actualizeData.lahko_popis}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>

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
              className="ml-24 mr-24"
            />
          ) : (
            "Aktualizovať sekciu"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminAboutTimbermax;
