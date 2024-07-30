import { HomePageElements } from "@/app/lib/interface";
import HomePageLoop from "./HomePageLoop";

interface Props {
  data: HomePageElements | undefined;
}

const HomePageFirstSection = ({ data }: Props) => {
  const url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC";

  return <HomePageLoop blurUrl={url} data={data} />;
};

export default HomePageFirstSection;
