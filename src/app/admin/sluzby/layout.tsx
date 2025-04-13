"use client";
import { services_elements } from "@/app/lib/functionsClient";
import { fetchAllLanguages } from "@/app/lib/functionsServer";
import { LanguagesAdming } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const categories_fasady = [
  {
    id: 1,
    name: "Predsadená",
    slug: "predsadena",
  },
  {
    id: 1,
    name: "Odvetraná",
    slug: "odvetrana",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [chosenElement, setChosenElement] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFasade, setSelectedFasade] = useState("");

  const {
    data: languages,
    error,
    isLoading,
  } = useQuery<LanguagesAdming[]>({
    queryKey: ["languages"],
    queryFn: () => fetchAllLanguages(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const handleMakeRoute = (language: string) => {
    const found_element = services_elements.find(
      (item) => item.slug === chosenElement
    );
    if (found_element) {
      setSelectedLanguage(language);
      if (found_element.slug === "fasady") {
        if (selectedFasade != "") {
          router.push(
            `/admin/sluzby/${chosenElement}/${selectedFasade}/${language}`
          );
        } else {
          toast.error("Vyber typ fasády");
        }
      } else {
        router.push(`/admin/sluzby/${chosenElement}/${language}`);
      }
    } else {
      toast.error("Vyber službu");
    }
  };

  const currentPath = pathname.split("/").pop();

  const segments = pathname.split("/").filter(Boolean);
  const secondPart = segments[2];
  const thirdPart = segments[3];

  useEffect(() => {
    if (pathname && currentPath) {
      setChosenElement(secondPart);
      setSelectedLanguage(currentPath);
      if (secondPart === "fasady") {
        setSelectedFasade(thirdPart);
      }
    }
  }, [pathname]);

  const handleSetElement = (slug: string) => {
    setSelectedLanguage("");
    setChosenElement(slug);
  };

  const handleTypeFasade = (slug: string) => {
    setSelectedLanguage("");
    setSelectedFasade(slug);
  };

  return (
    <div className="flex flex-col ">
      <Toaster />
      <div className="">
        {services_elements && (
          <div className="grid grid-cols-3 gap-4 pt-4">
            {services_elements.map((object, index) => (
              <div
                className={`p-[24px] rounded-[8px] hover:scale-[1.02] duration-200 cursor-pointer text-black ${
                  chosenElement === object.slug
                    ? "bg-[#384239] text-white"
                    : "bg-white"
                }`}
                key={index}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <div onClick={() => handleSetElement(object.slug)}>
                  {object.nazov}
                </div>
              </div>
            ))}
          </div>
        )}

        {isLoading && (
          <CircularProgress size={24} color="inherit" className="mt-16 mb-16" />
        )}
        {error && <p>Chyba pri načítaní dát.</p>}

        {chosenElement === "fasady" && (
          <div className="grid grid-cols-2 gap-4 pt-16">
            {categories_fasady.map((object, index) => (
              <div
                className={`p-[24px] rounded-[8px] hover:scale-[1.02] duration-200 cursor-pointer text-black ${
                  selectedFasade === object.slug
                    ? "bg-[#384239] text-white"
                    : "bg-white"
                }`}
                key={index}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
                onClick={() => handleTypeFasade(object.slug)}
              >
                {object.name}
              </div>
            ))}
          </div>
        )}

        {languages && (
          <div className="grid grid-cols-3 gap-4 pt-16">
            {languages.map((object, index) => (
              <div
                className={`p-[24px] rounded-[8px] hover:scale-[1.02] duration-200 cursor-pointer text-black ${
                  selectedLanguage === object.jazyk
                    ? "bg-[#384239] text-white"
                    : "bg-white"
                }`}
                key={index}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
                onClick={() => handleMakeRoute(object.jazyk)}
              >
                {object.jazyk}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 mt-16">{children}</div>
    </div>
  );
}
