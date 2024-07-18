import React from "react";

interface Props {
  nadpis: string;
  popis: string;
}

const AboutUsHistory = ({ nadpis, popis }: Props) => {
  return (
    <div className="bg-secondary ">
      <div className="main_section w-full justify-center items-center">
        <h2 className="text-center">{nadpis}</h2>
        <p className="text-primary text-center">{popis}</p>
      </div>
    </div>
  );
};

export default AboutUsHistory;
