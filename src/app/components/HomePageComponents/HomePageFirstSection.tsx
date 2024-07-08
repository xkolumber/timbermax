import React from "react";
import HomePageLoop from "./HomePageLoop";

const HomePageFirstSection = async () => {
  const url = `${process.env.URL}/loop/main1.jpg`;

  return <HomePageLoop blurUrl={url} />;
};

export default HomePageFirstSection;
