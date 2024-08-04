import React from "react";

interface Props {
  nadpis: string;
  popis: string;
}

const AboutUsHistory = ({ nadpis, popis }: Props) => {
  return (
    <div className="bg-secondary ">
      <div className="main_section w-full justify-center items-center">
        <h3 className="custom-underline text-center ">{nadpis}</h3>
        <p className="text-primary text-center">{popis}</p>
      </div>
    </div>
  );
};

export default AboutUsHistory;
