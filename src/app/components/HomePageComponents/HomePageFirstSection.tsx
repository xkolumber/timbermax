import HomePageLoop from "./HomePageLoop";

interface Props {
  button: string | undefined;
}

const HomePageFirstSection = ({ button }: Props) => {
  const url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC";

  return <HomePageLoop blurUrl={url} button={button} />;
};

export default HomePageFirstSection;
