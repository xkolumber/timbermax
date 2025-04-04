"use client";
import { AdminActualizeAboutUsPage } from "@/app/lib/actions";
import { getSecondPathValue, TeamValuesEmpty } from "@/app/lib/functionsClient";
import { AboutUsElements, Jazyk } from "@/app/lib/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
  data: AboutUsElements | undefined;
  languages: Jazyk[];
}

const AdminAboutUsPage = ({ language, data, languages }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomArray, setRandomArray] = useState<string[]>([""]);
  const pathname = usePathname();

  const [actualizeData, setActualizeData] = useState<AboutUsElements>({
    o_nas: "",
    citat: "",
    history_nadpis: "",
    history_popis: "",
    filozofia_nadpis: "",
    filozofia_popis1: "",
    filozofia_popis2: "",
    filozofia_popis3: "",
    jazyk: "",
    spoznajte_tim: "",
    staviame_znacka: "",
    tim: [],
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
        o_nas: data.o_nas ? data.o_nas : "",
        citat: data.citat ? data.citat : "",
        history_nadpis: data.history_nadpis ? data.history_nadpis : "",
        history_popis: data.history_popis ? data.history_popis : "",
        filozofia_nadpis: data.filozofia_nadpis ? data.filozofia_nadpis : "",
        filozofia_popis1: data.filozofia_popis1 ? data.filozofia_popis1 : "",
        filozofia_popis2: data.filozofia_popis2 ? data.filozofia_popis2 : "",
        filozofia_popis3: data.filozofia_popis3 ? data.filozofia_popis3 : "",
        jazyk: language,
        spoznajte_tim: data.spoznajte_tim ? data.spoznajte_tim : "",
        staviame_znacka: data.staviame_znacka ? data.staviame_znacka : "",
        tim: data.tim.length > 0 ? data.tim : TeamValuesEmpty,
      }));
    }
  }, [data]);

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await AdminActualizeAboutUsPage(actualizeData, language);
    setIsLoading(false);
    if (response === "success") {
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
      const updatedArray = [
        ...(prevData[title as keyof AboutUsElements] as any[]),
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
        <h4>Sekcia O nás</h4>
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
          <p>o_nas:</p>
          <input
            type="text"
            name="o_nas"
            value={actualizeData.o_nas}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>history_nadpis:</p>
          <input
            type="text"
            name="history_nadpis"
            value={actualizeData.history_nadpis}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>history_popis:</p>
          <input
            type="text"
            name="history_popis"
            value={actualizeData.history_popis}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>filozofia_nadpis:</p>
          <input
            type="text"
            name="filozofia_nadpis"
            value={actualizeData.filozofia_nadpis}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>staviame_znacka:</p>
          <input
            type="text"
            name="staviame_znacka"
            value={actualizeData.staviame_znacka}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>filozofia_popis1:</p>
          <input
            type="text"
            name="filozofia_popis1"
            value={actualizeData.filozofia_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>filozofia_popis2:</p>
          <input
            type="text"
            name="filozofia_popis2"
            value={actualizeData.filozofia_popis2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>filozofia_popis3:</p>
          <input
            type="text"
            name="filozofia_popis3"
            value={actualizeData.filozofia_popis3}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>citat:</p>
          <input
            type="text"
            name="citat"
            value={actualizeData.citat}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>spoznajte_tim:</p>
          <input
            type="text"
            name="spoznajte_tim"
            value={actualizeData.spoznajte_tim}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>

        <div className="product_admin_row">
          <p>tim:</p>
          <div className="flex flex-col">
            {actualizeData.tim.map((element, index) => (
              <div key={index} className="flex flex-row gap-4">
                <input
                  type="text"
                  name={`tim-meno-${index}`}
                  value={element.meno}
                  onChange={(e) =>
                    handleChangeItemTwoArray("tim", index, "meno", e)
                  }
                  className="md:!w-[450px] mt-2"
                  placeholder="Meno a priezvisko"
                />
                <input
                  type="text"
                  name={`tim-funkcia-${index}`}
                  value={element.funkcia}
                  onChange={(e) =>
                    handleChangeItemTwoArray("tim", index, "funkcia", e)
                  }
                  className="md:!w-[450px] mt-2"
                  placeholder="Práca"
                />
                <input
                  type="text"
                  name={`tim-popis-${index}`}
                  value={element.popis}
                  onChange={(e) =>
                    handleChangeItemTwoArray("tim", index, "popis", e)
                  }
                  className="md:!w-[450px] mt-2"
                  placeholder="Popis"
                />
                <input
                  type="text"
                  name={`tim-tel-${index}`}
                  value={element.tel}
                  onChange={(e) =>
                    handleChangeItemTwoArray("tim", index, "tel", e)
                  }
                  className="md:!w-[450px] mt-2"
                  placeholder="Telefónny kontakt"
                />
              </div>
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

export default AdminAboutUsPage;
