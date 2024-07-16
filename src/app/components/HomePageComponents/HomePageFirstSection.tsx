import React from "react";
import HomePageLoop from "./HomePageLoop";
import getBase64 from "@/app/lib/functions";

interface Props {
  button: string | undefined;
}

const HomePageFirstSection = async ({ button }: Props) => {
  // const url = await getBase64(`${process.env.URL}/loop/main1.jpg`);
  const url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC";

  return <HomePageLoop blurUrl={url} button={button} />;
};

export default HomePageFirstSection;
