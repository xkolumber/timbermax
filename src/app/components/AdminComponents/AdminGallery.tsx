"use client";
import { AdminDeleteAlbum } from "@/app/lib/actions";
import { Gallery, IsLoadingMap } from "@/app/lib/interface";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import IconCloseButton from "../Icons/IconCloseButton";
import IconPen from "../Icons/IconPen";
import IconTrash from "../Icons/IconTrash";

interface Props {
  data: Gallery[] | undefined;
}

const AdminGallery = ({ data }: Props) => {
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [choosenAlbum, setChoosenAlbum] = useState("");
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [idAlbum, setIdAlbum] = useState("");

  const handleDeleteWindow = (id: string, title: string) => {
    setIdAlbum(id);
    setChoosenAlbum(title);
    setDeleteWindow(true);
  };

  const handleDeleteAlbum = async () => {
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete_album`]: true,
      }));

      const response = await AdminDeleteAlbum(idAlbum);

      if (response === "success") {
        toast.success("Projekt bol odstránený");
        setDeleteWindow(false);
      } else {
        toast.error("Niekde nastala chyba");
      }
      setDeleteWindow(false);
    } catch (error) {
      console.error("Error deleting photo:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete_project`]: false,
      }));
    }
  };

  return (
    <div className="main_section additional_padding min-h-screen">
      <Link className=" btn btn--primary" href="/admin/galeria/novy-album">
        Pridať galériu
      </Link>
      <Toaster />
      <h4 className="mt-8">Všetky albumy</h4>
      {data?.map((object, index) => (
        <div
          className="border-b border-black flex flex-row justify-between items-center"
          key={index}
        >
          <p className="text-primary"> {object.nazov}</p>
          <div className="flex flex-row items-center gap-6">
            <Link
              className="cursor-pointer"
              href={`/admin/galeria/${object.id}`}
            >
              <IconPen />
            </Link>

            <div
              className="cursor-pointer"
              onClick={() => handleDeleteWindow(object.id, object.nazov)}
            >
              <IconTrash />
            </div>
          </div>
        </div>
      ))}

      {deleteWindow && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message ">
            <div className="" onClick={() => setDeleteWindow(false)}>
              <IconCloseButton />
            </div>{" "}
            <h5 className="text-center">
              Chcete skutočne odstániť projekt - {choosenAlbum}?
            </h5>
            <button
              className="btn btn--primary"
              onClick={() => handleDeleteAlbum()}
              disabled={isLoadingMap[`delete_album`]}
            >
              {isLoadingMap[`delete_album`] ? (
                <ClipLoader size={20} color={"#32a8a0"} loading={true} />
              ) : (
                "Odstrániť"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminGallery;
