import React from "react";
import Image from "next/image";
import IconTerasa from "./Icons/IconTerasa";
import IconFasady from "./Icons/IconFasady";
import IconPloty from "./Icons/IconPloty";
import { BLUR_DATA_URL_GRAY } from "../lib/functionsClient";

const data = [
  {
    title: "Terasy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fpodklady-typy%2Fterasy.png?alt=media&token=f6cbb1d2-3068-40c8-834a-6042df2625c5",
    svg_icon: <IconTerasa />,
  },
  {
    title: "Fasády",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fpodklady-typy%2Ffasady.png?alt=media&token=0637e134-a175-4ea2-ab9d-cc6b3424102f",
    svg_icon: <IconFasady />,
  },
  {
    title: "Ploty",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fpodklady-typy%2Fploty.png?alt=media&token=8ba3abe4-ae5c-4a0a-a73e-a1eac570d77d",
    svg_icon: <IconPloty />,
  },
  {
    title: "Slnolamy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/timbermax.appspot.com/o/website_photos%2Fpodklady-typy%2Fslnolamy.png?alt=media&token=0411f34c-66e3-4083-b122-34ab634afbda",
    svg_icon: <IconPloty />,
  },
];

const ProductsPodklady = () => {
  return (
    <div className="navbar_section">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-24">
        {data.map((object, index) => (
          <div
            className="h-[450px] xl:h-[550px] 2xl:h-[700px] relative rounded-[12px] flex justify-center items-center flex-col  overflow-hidden group"
            key={index}
          >
            <Image
              src={object.image}
              alt="Obrazok"
              width={300}
              height={700}
              quality={100}
              priority={true}
              className="absolute h-full w-full z-5 rounded-[8px] object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
            <div
              className={`w-24 h-24 absolute z-10 top-[25%] scale-[1.5] 2xl:scale-[2]  duration-300`}
            >
              {" "}
              {object.svg_icon}
            </div>
            <h5
              className={`absolute text-white top-[43%] 2xl:top-[41%] scale-[1]  duration-300 z-10 uppercase`}
            >
              {object.title}
            </h5>

            <div className=" absolute top-[60%] bottom-0 flex justify-center items-center z-10 flex-row gap-16">
              <button className="btn btn--transparent">PDF</button>
              <button className="btn btn--transparent">DWG</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPodklady;
