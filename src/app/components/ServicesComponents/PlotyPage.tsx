"use client";
import { Ploty, Slnolamy } from "@/app/lib/interface";

import Image from "next/image";

import IconServiceFeatures from "../Icons/IconServiceFeatures";
import IconServiceInstallation from "../Icons/IconServiceInstallation";
import IconServiceOrder from "../Icons/IconServiceOrder";
import IconServiceProfile from "../Icons/IconServiceProfile";
import IconServiceVariants from "../Icons/IconServiceVariants";
import ServiceGallery from "./ServiceGallery";

const projects = [
  {
    title: "Projekt Brno",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Krahulčia",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt Bodnár",
    photo: "/main_picture.png",
  },
  {
    title: "Projekt SkyPark",
    photo: "/main_picture.png",
  },
];

const icon_text = [
  {
    icon: <IconServiceVariants />,
    text: "Farebné varianty",
  },
  {
    icon: <IconServiceFeatures />,
    text: "Vlastnosti",
  },
  {
    icon: <IconServiceInstallation />,
    text: "Montáž",
  },
  {
    icon: <IconServiceProfile />,
    text: "Profily",
  },
  {
    icon: <IconServiceOrder />,
    text: "Postup objednania",
  },
];

interface Props {
  data: Ploty | undefined;
}

const PlotyPage = ({ data }: Props) => {
  return (
    <div>
      <main className="bg-secondary">
        <div className="main_section additional_padding">
          <h4 className="text-tertiary">{data?.nadpis}</h4>
          <p className="text-tertiary">{data?.popis1}</p>
        </div>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
        />

        <div className="main_section ">
          <p className="text-primary">{data?.popis2}</p>
          <div className="flex flex-col">
            {data?.vlastnosti.map((object, index) => (
              <p className="text-primary" key={index}>
                {object}
              </p>
            ))}
          </div>

          <h4 className="text-tertiary">{data?.nadpis_galeria}</h4>
        </div>
      </main>
      <ServiceGallery />
      {/* <h4 className="text-tertiary">Galeriálne terasy</h4>
          <p className="text-tertiary">
            Projekty ukazovať podľa Instagramu a Facebooku Ukázať: T138 (tvar
            dosky), OKUME (farba dosky), Bazény (aplikácia) Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p> */}

      <div className="bg-secondary">
        <main className="main_section">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_informacie}</h4>
          <p className="text-tertiary">{data?.popis_informacie_1}</p>
        </main>
        <div className="navbar_section">
          <div className="grid grid-cols-5">
            {icon_text.map((object, index) => (
              <div
                className="flex flex-col hover:border-[1.4px] hover:border-[#1D281F] rounded-[8px] justify-center items-center gap-6 p-4"
                key={index}
              >
                <div className="w-32 full">{object.icon}</div>
                <p className="uppercase text-[#1D281F]">
                  {data?.info_variants[index] != ""
                    ? data?.info_variants[index]
                    : object.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="main_section">
          <p className="text-tertiary">{data?.popis_informacie_2}</p>
          <p className="text-tertiary">{data?.popis_informacie_3}</p>
        </div> */}
      </div>

      <Image
        src={"/farby.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full  object-cover"
      />
      <div className="bg-secondary">
        <main className="main_section">
          {" "}
          <h4 className="text-tertiary">{data?.nadpis_vizualizacia}</h4>
          <p className="text-tertiary">{data?.popis_viz_1}</p>
        </main>
      </div>
    </div>
  );
};

export default PlotyPage;
