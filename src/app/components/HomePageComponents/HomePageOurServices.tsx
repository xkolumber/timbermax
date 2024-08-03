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
          <h3 className="uppercase  custom-underline mb-16 2xl:mb-[66px] text-center md:text-left">
            {data.nase_sluzby_nadpis}
          </h3>
        )}
        {data && data.nase_sluzby_veta && (
          <p className="text-primary ">{data.nase_sluzby_veta}</p>
        )}
        {data && data.nase_sluzby_popis && (
          <p className="text-primary mt-8 ">{data.nase_sluzby_popis}</p>
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
