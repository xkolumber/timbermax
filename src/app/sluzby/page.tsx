import React from "react";
import ServiceIntro from "../components/ServicesComponents/ServiceIntro";
import ServiceAnotherInfo from "../components/ServicesComponents/ServiceAnotherInfo";
import ServiceVisualisation from "../components/ServicesComponents/ServiceVisualisation";
import ServiceColors from "../components/ServicesComponents/ServiceColors";

const page = () => {
  return (
    <div className="">
      <ServiceIntro />
      <ServiceAnotherInfo />
      <ServiceColors />
      <ServiceVisualisation />
    </div>
  );
};

export default page;
