"use client";
import { AdminActualizeContactPage } from "@/app/lib/actions";
import { daysOrder, OpeningHoursEmpty } from "@/app/lib/functionsClient";
import { fetchContact } from "@/app/lib/functionsServer";
import { ContactPage } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
}

const AdminContactPage = ({ language }: Props) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<ContactPage | null>({
    queryKey: ["admin_contact", language],
    queryFn: () => fetchContact(language),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [isLoading2, setIsLoading2] = useState(false);

  const [actualizeData, setActualizeData] = useState<ContactPage>({
    kontakt_nadpis: "",
    tel_number: "",
    email: "",
    vzorkovne_nadpis: "",
    vzorkovne_popis1: "",
    vzorkovne_popis2: "",
    vzorkovne_popis3: "",
    vzorkovne_popis4: "",
    prevadzky_nadpis: "",
    otvaracie_hodiny: "",
    hodiny: {
      pon: "",
      ut: "",
      st: "",
      stv: "",
      pi: "",
      sob: "",
      ne: "",
    },
    sidlo_nadpis: "",
    sidlo: "",
    sidlo_popis1: "",
    sidlo_popis2: "",
    sidlo_popis3: "",
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
        kontakt_nadpis: data.kontakt_nadpis ? data.kontakt_nadpis : "",
        tel_number: data.tel_number ? data.tel_number : "",
        email: data.email ? data.email : "",
        vzorkovne_nadpis: data.vzorkovne_nadpis ? data.vzorkovne_nadpis : "",
        vzorkovne_popis1: data.vzorkovne_popis1 ? data.vzorkovne_popis1 : "",
        vzorkovne_popis2: data.vzorkovne_popis2 ? data.vzorkovne_popis2 : "",
        vzorkovne_popis3: data.vzorkovne_popis3 ? data.vzorkovne_popis3 : "",
        vzorkovne_popis4: data.vzorkovne_popis4 ? data.vzorkovne_popis4 : "",
        prevadzky_nadpis: data.prevadzky_nadpis ? data.prevadzky_nadpis : "",
        otvaracie_hodiny: data.otvaracie_hodiny ? data.otvaracie_hodiny : "",
        hodiny: data.hodiny ? data.hodiny : OpeningHoursEmpty,
        sidlo_nadpis: data.sidlo_nadpis ? data.sidlo_nadpis : "",
        sidlo: data.sidlo ? data.sidlo : "",
        sidlo_popis1: data.sidlo_popis1 ? data.sidlo_popis1 : "",
        sidlo_popis2: data.sidlo_popis2 ? data.sidlo_popis2 : "",
        sidlo_popis3: data.sidlo_popis3 ? data.sidlo_popis3 : "",
      }));
    }
  }, [data]);

  interface OpeningHours {
    pon: string;
    ut: string;
    st: string;
    stv: string;
    pi: string;
    sob: string;
    ne: string;
  }

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminActualizeContactPage(actualizeData, language);
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["admin_contact", language],
      });
      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  const handleChangeHodiny = (
    day: keyof OpeningHours,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Day: ", day);
    console.log("Value: ", event.target.value);
    setActualizeData((prevData) => ({
      ...prevData,
      hodiny: {
        ...prevData.hodiny,
        [day]: event.target.value,
      },
    }));
  };

  return (
    <div className="">
      <Toaster />
      {isLoading && <CircularProgress size={24} color="inherit" />}
      {error && <p>Chyba pri načítaní dát.</p>}

      {data && (
        <form className="products_admin" onSubmit={handleSaveProduct}>
          <h4>Sekcia Kontakt</h4>

          <div className="product_admin_row">
            <p>kontakt_nadpis:</p>
            <input
              type="text"
              name="kontakt_nadpis"
              value={actualizeData.kontakt_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>tel_number:</p>
            <input
              type="text"
              name="tel_number"
              value={actualizeData.tel_number}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>email:</p>
            <input
              type="text"
              name="email"
              value={actualizeData.email}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>vzorkovne_nadpis:</p>
            <input
              type="text"
              name="vzorkovne_nadpis"
              value={actualizeData.vzorkovne_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>vzorkovne_popis1:</p>
            <textarea
              name="vzorkovne_popis1"
              value={actualizeData.vzorkovne_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>vzorkovne_popis2:</p>
            <textarea
              name="vzorkovne_popis2"
              value={actualizeData.vzorkovne_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>vzorkovne_popis3:</p>
            <textarea
              name="vzorkovne_popis3"
              value={actualizeData.vzorkovne_popis3}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>vzorkovne_popis4:</p>
            <textarea
              name="vzorkovne_popis4"
              value={actualizeData.vzorkovne_popis4}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>prevadzky_nadpis:</p>
            <input
              type="text"
              name="prevadzky_nadpis"
              value={actualizeData.prevadzky_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>otvaracie_hodiny:</p>
            <input
              type="text"
              name="otvaracie_hodiny"
              value={actualizeData.otvaracie_hodiny}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          {/*opening hours*/}

          <div className="product_admin_row">
            <p>Dni v týždni</p>
            <div className="flex flex-col">
              {daysOrder.map((day, index) => (
                <input
                  key={index}
                  type="text"
                  name={`hodiny_${day}`}
                  value={actualizeData.hodiny[day]}
                  onChange={(e) => handleChangeHodiny(day, e)}
                  className="md:!w-[450px] mt-2"
                />
              ))}
            </div>
          </div>

          <div className="product_admin_row">
            <p>sidlo_nadpis:</p>
            <input
              type="text"
              name="sidlo_nadpis"
              value={actualizeData.sidlo_nadpis}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>sidlo:</p>
            <input
              type="text"
              name="sidlo"
              value={actualizeData.sidlo}
              onChange={handleChange}
              className="w-[400px]"
              placeholder="adresa firmy"
            />
          </div>
          <div className="product_admin_row">
            <p>sidlo_popis1:</p>
            <textarea
              name="sidlo_popis1"
              value={actualizeData.sidlo_popis1}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>sidlo_popis2:</p>
            <textarea
              name="sidlo_popis2"
              value={actualizeData.sidlo_popis2}
              onChange={handleChange}
              className="w-[400px]"
            />
          </div>
          <div className="product_admin_row">
            <p>sidlo_popis3:</p>
            <textarea
              name="sidlo_popis3"
              value={actualizeData.sidlo_popis3}
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

export default AdminContactPage;
