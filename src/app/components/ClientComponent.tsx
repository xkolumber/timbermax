"use client";
import React, { useEffect } from "react";
import useLanguageStore from "../zustand/store";
import { doRevalidate } from "../lib/actions";
import { usePathname } from "next/navigation";

const ClientComponent = () => {
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname();

  useEffect(() => {
    const actualize = async () => {
      await doRevalidate(pathname);
    };
    if (language) {
      actualize();
    }
  }, [language]);
  return <div>{language}</div>;
};

export default ClientComponent;
