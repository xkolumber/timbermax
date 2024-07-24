import { Gallery } from "@/app/lib/interface";
import Link from "next/link";
import React from "react";
import IconPen from "../Icons/IconPen";
import IconTrash from "../Icons/IconTrash";

interface Props {
  data: Gallery[] | undefined;
}

const AdminGallery = ({ data }: Props) => {
  return (
    <div className="main_section additional_padding min-h-screen">
      <Link className=" btn btn--primary" href="/admin/galeria/novy-album">
        Pridať galériu
      </Link>
      <h4 className="mt-8">Všetky albumy</h4>
      {data?.map((object, index) => (
        <div
          className="border-b border-black flex flex-row justify-between items-center"
          key={index}
        >
          <p className="text-primary"> {object.nazov}</p>
          <div className="flex flex-row items-center gap-6">
            <IconPen />
            <IconTrash />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminGallery;
