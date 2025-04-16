"use client";
import { AdminAddLanguage } from "@/app/lib/actions";
import { LanguagesAdming } from "@/app/lib/interface";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();

  const [isLoading2, setIsLoading2] = useState(false);

  const [actualizeData, setActualizeData] = useState<LanguagesAdming>({
    id: "",
    jazyk: "",
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

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    setIsLoading2(true);

    const response = await AdminAddLanguage(actualizeData.jazyk);
    setIsLoading2(false);
    if (response === 200) {
      await queryClient.refetchQueries({
        queryKey: ["languages"],
      });
      setActualizeData((prevData) => ({
        ...prevData,
        jazyk: "",
      }));

      toast.success("Sekcia bola aktualizovaná");
    } else {
      toast.error("Niekde nastala chyba");
    }
  };

  return (
    <div>
      <Toaster />

      <form className="products_admin" onSubmit={handleSaveProduct}>
        <h4>Nový jazk</h4>

        <div className="product_admin_row">
          <p>Jazyk v tvare &apos;en&apos;, &apos;sk&apos; :</p>
          <input
            type="text"
            name="jazyk"
            value={actualizeData.jazyk}
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
            "Pridať jazyk"
          )}
        </button>
      </form>
    </div>
  );
};

export default Page;
