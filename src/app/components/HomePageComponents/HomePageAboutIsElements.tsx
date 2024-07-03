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
            className="h-[450px] relative rounded-[8px] flex justify-center items-center flex-col"
            key={index}
          >
            <Image
              src={object.image}
              alt="Obrazok"
              width={1000}
              height={1000}
              quality={100}
              className="absolute h-full w-full  z-5 rounded-[8px]"
            />
            <div className="w-16 h-16  relative"> {object.svg_icon}</div>

            <h5 className="relative text-white">{object.title}</h5>
            <p className="text-white relative">{object.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageAboutIsElements;
