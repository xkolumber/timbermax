"use client";
import {
  AdminActualizeBazenyPage,
  AdminActualizeOstatnePage,
} from "@/app/lib/actions";
import {
  empty_five_values,
  empty_three_values,
  getSecondPathValue,
} from "@/app/lib/functionsClient";
import { Jazyk, Slnolamy } from "@/app/lib/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
  data: Slnolamy | undefined;
  languages: Jazyk[];
}

const AdminBazeny = ({ language, data, languages }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const [actualizeData, setActualizeData] = useState<Slnolamy>({
    nadpis: "",
    popis1: "",
    popis2: "",
    vlastnosti: empty_three_values,
    nadpis_galeria: "",
    nadpis_informacie: "",
    popis_informacie_1: "",
    info_variants: empty_five_values,
    jazyk: language,
    popis_informacie_2: "",
    popis_informacie_3: "",
    nadpis_vizualizacia: "",
    popis_viz_1: "",
    farba: "",
    btn_ceny: "",
    btn_kalukator: "",
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
        vlastnosti:
          data.vlastnosti?.length > 0 ? data.vlastnosti : empty_three_values,
        nadpis_galeria: data.nadpis_galeria ? data.nadpis_galeria : "",
        nadpis_informacie: data.nadpis_informacie ? data.nadpis_informacie : "",
        popis_informacie_1: data.popis_informacie_1
          ? data.popis_informacie_1
          : "",
        info_variants:
          data.info_variants?.length > 0
            ? data.info_variants
            : empty_five_values,
        jazyk: language,
        popis_informacie_2: data.popis_informacie_2
          ? data.popis_informacie_2
          : "",
        popis_informacie_3: data.popis_informacie_3
          ? data.popis_informacie_3
          : "",
        nadpis_vizualizacia: data.nadpis_vizualizacia
          ? data.nadpis_vizualizacia
          : "",
        popis_viz_1: data.popis_viz_1 ? data.popis_viz_1 : "",
        farba: data.farba ? data.farba : "",
        btn_ceny: data.btn_ceny ? data.btn_ceny : "",
        btn_kalukator: data.btn_kalukator ? data.btn_kalukator : "",
      }));
    }
  }, [data]);

  console.log(data?.vlastnosti);

  const handleChangeItemArray = (
    title: string,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => {
      const updatedArray = [...(prevData[title as keyof Slnolamy] as string[])];
      updatedArray[index] = event.target.value;
      return {
        ...prevData,
        [title]: updatedArray,
      };
    });
  };

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await AdminActualizeBazenyPage(
      actualizeData.nadpis,
      actualizeData.popis1,
      actualizeData.popis2,
      actualizeData.vlastnosti,
      actualizeData.nadpis_galeria,
      actualizeData.nadpis_informacie,
      actualizeData.popis_informacie_1,
      actualizeData.info_variants,
      language,
      actualizeData.popis_informacie_2,
      actualizeData.popis_informacie_3,
      actualizeData.nadpis_vizualizacia,
      actualizeData.popis_viz_1,
      actualizeData.farba,
      actualizeData.btn_ceny,
      actualizeData.btn_kalukator
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
        <h4>Sekcia Bazény</h4>
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
          <p>vlastnosti:</p>
          <div className="flex flex-col">
            {actualizeData.vlastnosti.map((size, index) => (
              <input
                key={index}
                type="text"
                name={`vlastnosti${index}`}
                value={size}
                onChange={(e) => handleChangeItemArray("vlastnosti", index, e)}
                className="md:!w-[450px] mt-2"
              />
            ))}
          </div>
        </div>

        <div className="product_admin_row">
          <p>nadpis_galeria:</p>
          <input
            type="text"
            name="nadpis_galeria"
            value={actualizeData.nadpis_galeria}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>nadpis_informacie:</p>
          <input
            type="text"
            name="nadpis_informacie"
            value={actualizeData.nadpis_informacie}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>popis_informacie_1:</p>
          <input
            type="text"
            name="popis_informacie_1"
            value={actualizeData.popis_informacie_1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>

        {/*info_variants*/}

        <div className="product_admin_row">
          <p>info_variants:</p>
          <div className="flex flex-col">
            {actualizeData.info_variants.map((size, index) => (
              <input
                key={index}
                type="text"
                name={`info_variants${index}`}
                value={size}
                onChange={(e) =>
                  handleChangeItemArray("info_variants", index, e)
                }
                className="md:!w-[450px] mt-2"
              />
            ))}
          </div>
        </div>
        <div className="product_admin_row">
          <p>popis_informacie_2:</p>
          <input
            type="text"
            name="popis_informacie_2"
            value={actualizeData.popis_informacie_2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>popis_informacie_3:</p>
          <input
            type="text"
            name="popis_informacie_3"
            value={actualizeData.popis_informacie_3}
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
          <input
            type="text"
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
          <p>btn_kalukator:</p>
          <input
            type="text"
            name="btn_kalukator"
            value={actualizeData.btn_kalukator}
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

export default AdminBazeny;
