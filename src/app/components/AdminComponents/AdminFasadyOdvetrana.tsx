"use client";
import { AdminActualizeFasadyOdvetranaPage } from "@/app/lib/actions";
import { empty_five_values } from "@/app/lib/functionsClient";
import { fetchFasady } from "@/app/lib/functionsServer";
import { Fasady } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
}

const AdminFasadyOdvetrana = ({ language }: Props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<Fasady | null>({
    queryKey: ["admin_fasady_odvetrana", language],
    queryFn: () => fetchFasady("fasady-odvetrana", language),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [isLoading2, setIsLoading2] = useState(false);
  const [randomArray, setRandomArray] = useState<string[]>([""]);
  const pathname = usePathname();

  const [actualizeData, setActualizeData] = useState<Fasady>({
    nadpis: "",
    popis1: "",
    popis2: "",
    btn_odvetrana: "",
    btn_predsadena: "",
    nadpis_galeria: "",
    nadpis_informacie: "",
    popis_informacie_1: "",
    info_variants: empty_five_values,
    jazyk: language,
    fareb_var_popis1: "",
    fareb_var_popis2: "",
    vlastnosti_popis1: "",
    vlastnosti_popis2: "",
    vlastnosti_popis3: "",
    vlastnosti_popis4: "",
    vlastnosti_nadpis_: "",
    vlastnosti_popis5: "",
    vlastnosti_popis6: "",
    vlastnosti_popis7: "",
    vlastnosti_popis8: "",
    vlastnosti_btn_viac: "",
    vlastnosti_btn_konkurencia: "",
    montaz_nadpis: "",
    montaz_popis1: "",
    montaz_popis2: "",
    montaz_popis3: "",
    montaz_popis4: "",
    montaz_nadpis_2: "",
    montaz_nadpis_2_category: "",
    montaz_nadpis_2_category_popis1: "",
    montaz_nadpis_2_category_popis2: "",
    montaz_nadpis_2_category_popis3: "",
    montaz_nadpis_2_category2: "",
    montaz_nadpis_2_category2_popis1: "",
    montaz_nadpis_2_category2_popis2: "",
    montaz_nadpis_2_category2_popis3: "",
    montaz_nadpis_2_category2_popis4: "",
    montaz_nadpis_2_category3: "",
    montaz_nadpis_2_category3_popis1: "",
    montaz_nadpis_2_category3_popis2: "",
    montaz_nadpis_2_category3_popis3: "",
    montaz_nadpis_2_category3_popis4: "",
    montaz_nadpis_2_category4: "",
    montaz_nadpis_2_category4_popis1: "",
    montaz_nadpis_2_category4_popis2: "",
    montaz_nadpis_2_category4_popis3: "",
    profil_orientacia: "",
    profil_popis1: "",
    profil_popis2: "",
    profil_popis3: "",
    profil_popis4: "",
    postup_popis: "",
    postup_nacenovac: "",
    nacenovac_sekcie: [],
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
        nadpis: data.nadpis ? data.nadpis : "",
        popis1: data.popis1 ? data.popis1 : "",
        popis2: data.popis2 ? data.popis2 : "",
        btn_odvetrana: data.btn_odvetrana ? data.btn_odvetrana : "",
        btn_predsadena: data.btn_predsadena ? data.btn_predsadena : "",
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
        fareb_var_popis1: data.fareb_var_popis1 ? data.fareb_var_popis1 : "",
        fareb_var_popis2: data.fareb_var_popis2 ? data.fareb_var_popis2 : "",
        vlastnosti_popis1: data.vlastnosti_popis1 ? data.vlastnosti_popis1 : "",
        vlastnosti_popis2: data.vlastnosti_popis2 ? data.vlastnosti_popis2 : "",
        vlastnosti_popis3: data.vlastnosti_popis3 ? data.vlastnosti_popis3 : "",
        vlastnosti_popis4: data.vlastnosti_popis4 ? data.vlastnosti_popis4 : "",
        vlastnosti_nadpis_: data.vlastnosti_nadpis_
          ? data.vlastnosti_nadpis_
          : "",
        vlastnosti_popis5: data.vlastnosti_popis5 ? data.vlastnosti_popis5 : "",
        vlastnosti_popis6: data.vlastnosti_popis6 ? data.vlastnosti_popis6 : "",
        vlastnosti_popis7: data.vlastnosti_popis7 ? data.vlastnosti_popis7 : "",
        vlastnosti_popis8: data.vlastnosti_popis8 ? data.vlastnosti_popis8 : "",
        vlastnosti_btn_viac: data.vlastnosti_btn_viac
          ? data.vlastnosti_btn_viac
          : "",
        vlastnosti_btn_konkurencia: data.vlastnosti_btn_konkurencia
          ? data.vlastnosti_btn_konkurencia
          : "",
        montaz_nadpis: data.montaz_nadpis ? data.montaz_nadpis : "",
        montaz_popis1: data.montaz_popis1 ? data.montaz_popis1 : "",
        montaz_popis2: data.montaz_popis2 ? data.montaz_popis2 : "",
        montaz_popis3: data.montaz_popis3 ? data.montaz_popis3 : "",
        montaz_popis4: data.montaz_popis4 ? data.montaz_popis4 : "",
        montaz_nadpis_2: data.montaz_nadpis_2 ? data.montaz_nadpis_2 : "",
        montaz_nadpis_2_category: data.montaz_nadpis_2_category
          ? data.montaz_nadpis_2_category
          : "",
        montaz_nadpis_2_category_popis1: data.montaz_nadpis_2_category_popis1
          ? data.montaz_nadpis_2_category_popis1
          : "",
        montaz_nadpis_2_category_popis2: data.montaz_nadpis_2_category_popis2
          ? data.montaz_nadpis_2_category_popis2
          : "",
        montaz_nadpis_2_category_popis3: data.montaz_nadpis_2_category_popis3
          ? data.montaz_nadpis_2_category_popis3
          : "",
        montaz_nadpis_2_category2: data.montaz_nadpis_2_category2
          ? data.montaz_nadpis_2_category2
          : "",
        montaz_nadpis_2_category2_popis1: data.montaz_nadpis_2_category2_popis1
          ? data.montaz_nadpis_2_category2_popis1
          : "",
        montaz_nadpis_2_category2_popis2: data.montaz_nadpis_2_category2_popis2
          ? data.montaz_nadpis_2_category2_popis2
          : "",
        montaz_nadpis_2_category2_popis3: data.montaz_nadpis_2_category2_popis3
          ? data.montaz_nadpis_2_category2_popis3
          : "",
        montaz_nadpis_2_category2_popis4: data.montaz_nadpis_2_category2_popis4
          ? data.montaz_nadpis_2_category2_popis4
          : "",
        montaz_nadpis_2_category3: data.montaz_nadpis_2_category3
          ? data.montaz_nadpis_2_category3
          : "",
        montaz_nadpis_2_category3_popis1: data.montaz_nadpis_2_category3_popis1
          ? data.montaz_nadpis_2_category3_popis1
          : "",
        montaz_nadpis_2_category3_popis2: data.montaz_nadpis_2_category3_popis2
          ? data.montaz_nadpis_2_category3_popis2
          : "",
        montaz_nadpis_2_category3_popis3: data.montaz_nadpis_2_category3_popis3
          ? data.montaz_nadpis_2_category3_popis3
          : "",
        montaz_nadpis_2_category3_popis4: data.montaz_nadpis_2_category3_popis4
          ? data.montaz_nadpis_2_category3_popis4
          : "",
        montaz_nadpis_2_category4: data.montaz_nadpis_2_category4
          ? data.montaz_nadpis_2_category4
          : "",
        montaz_nadpis_2_category4_popis1: data.montaz_nadpis_2_category4_popis1
          ? data.montaz_nadpis_2_category4_popis1
          : "",
        montaz_nadpis_2_category4_popis2: data.montaz_nadpis_2_category4_popis2
          ? data.montaz_nadpis_2_category4_popis2
          : "",
        montaz_nadpis_2_category4_popis3: data.montaz_nadpis_2_category4_popis3
          ? data.montaz_nadpis_2_category4_popis3
          : "",
        profil_orientacia: data.profil_orientacia ? data.profil_orientacia : "",
        profil_popis1: data.profil_popis1 ? data.profil_popis1 : "",
        profil_popis2: data.profil_popis2 ? data.profil_popis2 : "",
        profil_popis3: data.profil_popis3 ? data.profil_popis3 : "",
        profil_popis4: data.profil_popis4 ? data.profil_popis4 : "",
        postup_popis: data.postup_popis ? data.postup_popis : "",
        postup_nacenovac: data.postup_nacenovac ? data.postup_nacenovac : "",
        nacenovac_sekcie:
          data.nacenovac_sekcie.length > 0 ? data.nacenovac_sekcie : Nacenovac,
        nadpis_vizualizacia: data.nadpis_vizualizacia
          ? data.nadpis_vizualizacia
          : "",
        popis_viz_1: data.popis_viz_1 ? data.popis_viz_1 : "",
        farba: data.farba ? data.farba : "",
        btn_ceny: data.btn_ceny ? data.btn_ceny : "",
        btn_kalkulator: data.btn_kalkulator ? data.btn_kalkulator : "",
      }));
    } else {
      setActualizeData((prevData) => ({
        ...prevData,
        nacenovac_sekcie: Nacenovac,
      }));
    }
  }, [data]);

  const Nacenovac = [
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

  const handleChangeItemArray = (
    title: string,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => {
      const updatedArray = [...(prevData[title as keyof Fasady] as string[])];
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
      const updatedArray = [...(prevData[title as keyof Fasady] as any[])];
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

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminActualizeFasadyOdvetranaPage(
      actualizeData,
      language
    );
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["admin_fasady_odvetrana", language],
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
      {error && <p>Chyba pri načítaní dát.</p>}

      {data && (
        <>
          <form className="products_admin" onSubmit={handleSaveProduct}>
            <h4>Sekcia Fasady - odvetrana</h4>

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
              <p>btn_odvetrana:</p>
              <input
                type="text"
                name="btn_odvetrana"
                value={actualizeData.btn_odvetrana}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>btn_predsadena:</p>
              <input
                type="text"
                name="btn_predsadena"
                value={actualizeData.btn_predsadena}
                onChange={handleChange}
                className="w-[400px]"
              />
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
              <p>fareb_var_popis1:</p>
              <input
                type="text"
                name="fareb_var_popis1"
                value={actualizeData.fareb_var_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>fareb_var_popis2:</p>
              <input
                type="text"
                name="fareb_var_popis2"
                value={actualizeData.fareb_var_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis1:</p>
              <input
                type="text"
                name="vlastnosti_popis1"
                value={actualizeData.vlastnosti_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis2:</p>
              <input
                type="text"
                name="vlastnosti_popis2"
                value={actualizeData.vlastnosti_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis3:</p>
              <input
                type="text"
                name="vlastnosti_popis3"
                value={actualizeData.vlastnosti_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis4:</p>
              <input
                type="text"
                name="vlastnosti_popis4"
                value={actualizeData.vlastnosti_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_nadpis_:</p>
              <input
                type="text"
                name="vlastnosti_nadpis_"
                value={actualizeData.vlastnosti_nadpis_}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis5:</p>
              <input
                type="text"
                name="vlastnosti_popis5"
                value={actualizeData.vlastnosti_popis5}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis6:</p>
              <input
                type="text"
                name="vlastnosti_popis6"
                value={actualizeData.vlastnosti_popis6}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis7:</p>
              <input
                type="text"
                name="vlastnosti_popis7"
                value={actualizeData.vlastnosti_popis7}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_popis8:</p>
              <input
                type="text"
                name="vlastnosti_popis8"
                value={actualizeData.vlastnosti_popis8}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>vlastnosti_btn_viac:</p>
              <input
                type="text"
                name="vlastnosti_btn_viac"
                value={actualizeData.vlastnosti_btn_viac}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>vlastnosti_btn_konkurencia:</p>
              <input
                type="text"
                name="vlastnosti_btn_konkurencia"
                value={actualizeData.vlastnosti_btn_konkurencia}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            <div className="product_admin_row">
              <p>montaz_nadpis:</p>
              <input
                type="text"
                name="montaz_nadpis"
                value={actualizeData.montaz_nadpis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_popis1:</p>
              <input
                type="text"
                name="montaz_popis1"
                value={actualizeData.montaz_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_popis2:</p>
              <input
                type="text"
                name="montaz_popis2"
                value={actualizeData.montaz_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_popis3:</p>
              <input
                type="text"
                name="montaz_popis3"
                value={actualizeData.montaz_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_popis4:</p>
              <input
                type="text"
                name="montaz_popis4"
                value={actualizeData.montaz_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2:</p>
              <input
                type="text"
                name="montaz_nadpis_2"
                value={actualizeData.montaz_nadpis_2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category"
                value={actualizeData.montaz_nadpis_2_category}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category_popis1:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category_popis1"
                value={actualizeData.montaz_nadpis_2_category_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category_popis2:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category_popis2"
                value={actualizeData.montaz_nadpis_2_category_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category_popis3:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category_popis3"
                value={actualizeData.montaz_nadpis_2_category_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category2:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category2"
                value={actualizeData.montaz_nadpis_2_category2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category2_popis1:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category2_popis1"
                value={actualizeData.montaz_nadpis_2_category2_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category2_popis2:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category2_popis2"
                value={actualizeData.montaz_nadpis_2_category2_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category2_popis3:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category2_popis3"
                value={actualizeData.montaz_nadpis_2_category2_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category2_popis4:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category2_popis4"
                value={actualizeData.montaz_nadpis_2_category2_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category3:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category3"
                value={actualizeData.montaz_nadpis_2_category3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category3_popis1:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category3_popis1"
                value={actualizeData.montaz_nadpis_2_category3_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category3_popis2:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category3_popis2"
                value={actualizeData.montaz_nadpis_2_category3_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category3_popis3:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category3_popis3"
                value={actualizeData.montaz_nadpis_2_category3_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category3_popis4:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category3_popis4"
                value={actualizeData.montaz_nadpis_2_category3_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category4:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category4"
                value={actualizeData.montaz_nadpis_2_category4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category4_popis1:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category4_popis1"
                value={actualizeData.montaz_nadpis_2_category4_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category4_popis2:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category4_popis2"
                value={actualizeData.montaz_nadpis_2_category4_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>montaz_nadpis_2_category4_popis3:</p>
              <input
                type="text"
                name="montaz_nadpis_2_category4_popis3"
                value={actualizeData.montaz_nadpis_2_category4_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_orientacia:</p>
              <input
                type="text"
                name="profil_orientacia"
                value={actualizeData.profil_orientacia}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis1:</p>
              <input
                type="text"
                name="profil_popis1"
                value={actualizeData.profil_popis1}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis2:</p>
              <input
                type="text"
                name="profil_popis2"
                value={actualizeData.profil_popis2}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis3:</p>
              <input
                type="text"
                name="profil_popis3"
                value={actualizeData.profil_popis3}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>profil_popis4:</p>
              <input
                type="text"
                name="profil_popis4"
                value={actualizeData.profil_popis4}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>postup_popis:</p>
              <input
                type="text"
                name="postup_popis"
                value={actualizeData.postup_popis}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>
            <div className="product_admin_row">
              <p>postup_nacenovac:</p>
              <input
                type="text"
                name="postup_nacenovac"
                value={actualizeData.postup_nacenovac}
                onChange={handleChange}
                className="w-[400px]"
              />
            </div>

            {/*nacenovac_sekcie */}
            <div className="product_admin_row">
              <p>nacenovac_sekcie:</p>
              <div className="flex flex-col">
                {actualizeData.nacenovac_sekcie.map((element, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <input
                      type="text"
                      name={`nacenovac_sekcie-${index}`}
                      value={element.nadpis}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "nadpis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="Nadpis"
                    />
                    <input
                      type="text"
                      name={`nacenovac_sekcie-${index}`}
                      value={element.popis}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "popis",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="Popis"
                    />
                    <input
                      type="text"
                      name={`nacenovac_sekcie-${index}`}
                      value={element.button}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "button",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="Tlačidlo"
                    />
                    <input
                      type="text"
                      name={`nacenovac_sekcie-${index}`}
                      value={element.link}
                      onChange={(e) =>
                        handleChangeItemTwoArray(
                          "nacenovac_sekcie",
                          index,
                          "link",
                          e
                        )
                      }
                      className="md:!w-[450px] mt-2"
                      placeholder="Link"
                    />
                  </div>
                ))}
              </div>
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

export default AdminFasadyOdvetrana;
