"use client";
import { AdminActualizeContactPage } from "@/app/lib/actions";
import { getSecondPathValue } from "@/app/lib/functionsClient";
import { Jazyk, ContactPage } from "@/app/lib/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  language: string;
  data: ContactPage | undefined;
  languages: Jazyk[];
}

const AdminContactPage = ({ language, data, languages }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomArray, setRandomArray] = useState<string[]>([""]);
  const pathname = usePathname();

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
        hodiny: data.hodiny ? data.hodiny : OpeningHours,
        sidlo_nadpis: data.sidlo_nadpis ? data.sidlo_nadpis : "",
        sidlo: data.sidlo ? data.sidlo : "",
        sidlo_popis1: data.sidlo_popis1 ? data.sidlo_popis1 : "",
        sidlo_popis2: data.sidlo_popis2 ? data.sidlo_popis2 : "",
        sidlo_popis3: data.sidlo_popis3 ? data.sidlo_popis3 : "",
      }));
    }
  }, [data]);

  const OpeningHours = {
    pon: "",
    ut: "",
    st: "",
    stv: "",
    pi: "",
    sob: "",
    ne: "",
  };

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
    setIsLoading(true);

    const response = await AdminActualizeContactPage(actualizeData, language);
    setIsLoading(false);
    if (response === "success") {
      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  const handleChangeHodiny = (
    day: keyof OpeningHours,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActualizeData((prevData) => ({
      ...prevData,
      hodiny: {
        ...prevData.hodiny,
        [day]: event.target.value,
      },
    }));
  };

  return (
    <div className="main_section additional_padding">
      <Toaster />
      <Link href={"/admin"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>

      <form className="products_admin" onSubmit={handleSaveProduct}>
        <h4>Sekcia Kontakt</h4>
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
          <input
            type="text"
            name="vzorkovne_popis1"
            value={actualizeData.vzorkovne_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>vzorkovne_popis2:</p>
          <input
            type="text"
            name="vzorkovne_popis2"
            value={actualizeData.vzorkovne_popis2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>vzorkovne_popis3:</p>
          <input
            type="text"
            name="vzorkovne_popis3"
            value={actualizeData.vzorkovne_popis3}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>vzorkovne_popis4:</p>
          <input
            type="text"
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
          <p>Otváracie hodiny: / dni v týždni</p>
          <div className="flex flex-col">
            {Object.keys(actualizeData.hodiny).map((day, index) => (
              <input
                key={index}
                type="text"
                name={`hodiny_${day}`}
                value={(actualizeData.hodiny as any)[day]}
                onChange={(e) =>
                  handleChangeHodiny(day as keyof OpeningHours, e)
                }
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
          <input
            type="text"
            name="sidlo_popis1"
            value={actualizeData.sidlo_popis1}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>sidlo_popis2:</p>
          <input
            type="text"
            name="sidlo_popis2"
            value={actualizeData.sidlo_popis2}
            onChange={handleChange}
            className="w-[400px]"
          />
        </div>
        <div className="product_admin_row">
          <p>sidlo_popis3:</p>
          <input
            type="text"
            name="sidlo_popis3"
            value={actualizeData.sidlo_popis3}
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

export default AdminContactPage;
