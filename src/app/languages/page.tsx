import React from "react";
import CreateForm from "../components/CreateForm";
import { GetLanguages } from "../lib/actions";

export default async function Page() {
  const latestInvoices = await GetLanguages();
  return (
    <div className="main_section additional_padding">
      {latestInvoices.map((lang, index) => (
        <p key={index}>{lang.jazyk}</p>
      ))}
      <CreateForm />
    </div>
  );
}
