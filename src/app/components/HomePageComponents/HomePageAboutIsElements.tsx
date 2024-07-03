import React from "react";
import IconTerasa from "../icons/IconTerasa";
import IconFasady from "../icons/IconFasady";
import IconBazeny from "../icons/IconBazeny";
import IconPloty from "../icons/IconPloty";
import IconSlnolamy from "../icons/IconSlnolamy";
import IconOstatne from "../icons/IconOstatne";
import Image from "next/image";

const data = [
  {
    description: "sdf",
    title: "Terasy",
    image: "/oblasti/terasy.jpg",
    svg_icon: <IconTerasa />,
  },
  {
    description: "sdf",
    title: "Fasády",
    image: "/oblasti/fasady.jpg",
    svg_icon: <IconFasady />,
  },
  {
    description: "sdf",
    title: "Bazény",
    image: "/oblasti/bazen.jpg",
    svg_icon: <IconBazeny />,
  },
  {
    description: "sdf",
    title: "Ploty",
    image: "/oblasti/ploty.jpg",
    svg_icon: <IconPloty />,
  },
  {
    description: "sdf",
    title: "Slnolamy",
    image: "/oblasti/slnolamy.jpg",
    svg_icon: <IconSlnolamy />,
  },
  {
    description: "sdf",
    title: "Ostatné",
    image: "/oblasti/ostatne.jpg",
    svg_icon: <IconOstatne />,
  },
];

const HomePageAboutIsElements = () => {
  return (
    <div className="navbar_section m-auto">
      <div className="grid grid-cols-3 gap-6">
        {data.map((object, index) => (
          <div
            className="h-[450px] relative rounded-[8px] flex justify-center items-center flex-col cursor-pointer overflow-hidden group"
            key={index}
          >
            <Image
              src={object.image}
              alt="Obrazok"
              width={1000}
              height={1000}
              quality={100}
              className="absolute h-full w-full z-5 rounded-[8px] object-cover"
            />
            <div className="w-16 h-16 relative z-10"> {object.svg_icon}</div>
            <h5 className="relative text-white z-10">{object.title}</h5>

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-6"></div>

            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="text-center text-white p-4">
                <p className="text-white">{object.description}</p>
              </div>
              <div className="btn btn--secondary absolute bottom-0 !mb-8">
                Čítať viac
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageAboutIsElements;
