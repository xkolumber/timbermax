import React from "react";
import HomePageLoop from "./HomePageLoop";
import getBase64 from "@/app/lib/functions";

const HomePageFirstSection = async () => {
  const url = await getBase64(`${process.env.URL}/loop/main1.jpg`);

  return <HomePageLoop blurUrl={url} />;
};

export default HomePageFirstSection;
