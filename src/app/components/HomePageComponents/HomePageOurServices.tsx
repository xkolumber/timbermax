import { cookies } from "next/headers";
import HomePageAboutIsElements from "./HomePageAboutIsElements";
import HomePageIcons from "./HomePageIcons";
import { HomePageElements } from "@/app/lib/interface";

interface Props {
  data: HomePageElements | undefined;
}

const HomePageOurServices = ({ data }: Props) => {
  return (
    <div className="bg-secondary">
      <div className="main_section">
        {data && data.nase_sluzby_nadpis && (
          <h2 className="uppercase">{data.nase_sluzby_nadpis}</h2>
        )}
        {data && data.nase_sluzby_veta && (
          <p className="text-black">{data.nase_sluzby_veta}</p>
        )}
        {data && data.nase_sluzby_popis && (
          <p className="text-black mt-16">{data.nase_sluzby_popis}</p>
        )}
      </div>
      <HomePageAboutIsElements
        services={data?.sluzby ? data.sluzby : []}
        button_citat_viac={
          data?.button_citat_viac ? data.button_citat_viac : ""
        }
      />
      <HomePageIcons svg_titles={data?.svg_titles ? data.svg_titles : []} />
    </div>
  );
};

export default HomePageOurServices;
