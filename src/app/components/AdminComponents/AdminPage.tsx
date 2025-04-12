"use client";
import { handleSignOut } from "@/app/lib/awsCofnitoActions";
import { fetchAllLanguages } from "@/app/lib/functionsServer";
import { Jazyk, LanguagesAdming } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";

const services_elements = [
  {
    nazov: "Terasy",
    slug: "terasy",
  },
  {
    nazov: "Fasády",
    slug: "fasady",
  },
  {
    nazov: "Bazény",
    slug: "bazeny",
  },
  {
    nazov: "Slnolamy",
    slug: "slnolamy",
  },
  {
    nazov: "Ploty",
    slug: "ploty",
  },
  {
    nazov: "Ostatné",
    slug: "ostatne",
  },
];

const AdminPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);
  const [certainServiceClicked, setCertainServiceClicked] = useState(-1);
  const [certainServiceSlug, setCertainServiceSlug] = useState("");

  const handleServiceClicked = (index: number, slug: string) => {
    setCertainServiceClicked(index);
    setCertainServiceSlug(slug);
  };

  const handleLogout = async () => {
    await handleSignOut();
  };

  return (
    <div className="min-h-screen main_section ">
      <h2>Admin Zóna</h2>
      <p>
        Vitajte v adminskej zóne. Vyberte si sekciu, ktorú potrebujete upraviť.
      </p>
    </div>
  );
};

export default AdminPage;
