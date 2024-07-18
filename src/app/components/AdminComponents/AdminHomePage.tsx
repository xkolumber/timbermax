"use client";
import { AdminactualizeHomePage } from "@/app/lib/actions";
import { getSecondPathValue } from "@/app/lib/functionsClient";
import { HomePageElements, Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [randomArray, setRandomArray] = useState<string[]>([""]);
  const pathname = usePathname();

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
      language,
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
              href={`/admin/${getSecondPathValue(pathname)}/${one_lang.jazyk}`}
              key={index}
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
                    handleChangeItemTwoArray("timbermax_ako", index, "popis", e)
                  }
                  className="md:!w-[450px] mt-2"
                />
                <input
                  type="text"
                  name={`timbermax_ako-link-${index}`}
                  value={element.link}
                  onChange={(e) =>
                    handleChangeItemTwoArray("timbermax_ako", index, "link", e)
                  }
                  className="md:!w-[450px] mt-2"
                />
              </div>
            ))}
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

export default AdminHomePage;
