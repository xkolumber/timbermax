import React from "react";
import IconNotAuthorized from "./Icons/IconNotAuthorized";
import Link from "next/link";

const NoProductFound = () => {
  return (
    <div className="main_section  min-h-screen justify-center items-center flex  flex-col">
      <IconNotAuthorized />
      <h2 className="text-center">Produkt neexistuje</h2>
      <p className="text-center">
        Zdá sa, že ste omylom vyhľadali produkt, ktorý už neexistuje, alebo je
        pod iným názvom.
      </p>
      <Link className="btn btn--primary" href={"/"}>
        Domov
      </Link>
    </div>
  );
};

export default NoProductFound;
