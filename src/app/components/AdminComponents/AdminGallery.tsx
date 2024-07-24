"use client";
import { Gallery, IsLoadingMap } from "@/app/lib/interface";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import IconPen from "../Icons/IconPen";
import IconTrash from "../Icons/IconTrash";
import IconCloseButton from "../Icons/IconCloseButton";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import {
  AdminActualizeAlbumGallery,
  AdminDeleteAlbum,
  AdminDeleteImageFromAlbum,
} from "@/app/lib/actions";
import Image from "next/image";
import { categories, CompressImages } from "@/app/lib/functionsClient";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

interface Props {
  data: Gallery[] | undefined;
}

const AdminGallery = ({ data }: Props) => {
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [choosenAlbum, setChoosenAlbum] = useState("");
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [idAlbum, setIdAlbum] = useState("");
  const [albumObject, setAlbumObject] = useState<Gallery>();
  const [editAlbum, setEditAlbum] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleDeleteWindow = (id: string, title: string) => {
    setIdAlbum(id);
    setChoosenAlbum(title);
    setDeleteWindow(true);
  };

  const [actualizeGallery, setActualizeGallery] = useState<Gallery>({
    fotky: [],
    kategorie: [],
    nazov: "",
    id: "",
  });
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

  const handleEditAlbum = (object: Gallery) => {
    setAlbumObject(object);
    setEditAlbum(true);
    setIdAlbum(object.id);
  };

  const handleEditAlbumFirebase = async () => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize_album`]: true,
    }));

    try {
      let photoUrls: string[] = [];
      if (projectPhotos.length > 0) {
        const storage = getStorage();
        photoUrls = await Promise.all(
          projectPhotos.map(async (photo) => {
            const storageRef = ref(storage, `galeria/${photo.name}`);
            await uploadBytes(storageRef, photo);
            return getDownloadURL(storageRef);
          })
        );
      }

      const response = await AdminActualizeAlbumGallery(
        idAlbum,
        photoUrls,
        actualizeGallery.fotky,
        actualizeGallery.kategorie,
        actualizeGallery.nazov
      );
      if (response === "success") {
        toast.success("Album bol aktualizovaný");
        setActualizeGallery((prevData) => ({
          ...prevData,
          fotky: [],
          kategorie: [],
          nazov: "",
        }));
        setProjectPhotos([]);
        setSelectedCategory([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setEditAlbum(false);
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error adding photo:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`actualize_album`]: false,
      }));
    }
  };

  useEffect(() => {
    if (editAlbum) {
      setActualizeGallery((prevData) => ({
        ...prevData,
        fotky: albumObject?.fotky ? albumObject.fotky : [],
        kategorie: albumObject?.kategorie ? albumObject.kategorie : [],
        nazov: albumObject?.nazov ? albumObject.nazov : "",
      }));
      setSelectedCategory(albumObject?.kategorie ? albumObject.kategorie : []);
    }
  }, [editAlbum]);

  const handleDeleteImageFromAlbum = async (index_foto: number) => {
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete_photo-${index_foto}`]: true,
      }));

      const response = await AdminDeleteImageFromAlbum(idAlbum, index_foto);
      if (response === "success") {
        setActualizeGallery((prevData) => ({
          ...prevData,
          fotky: prevData.fotky.filter((_, index) => index !== index_foto),
        }));
        toast.success("Objekt bol vymazaný");
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete_photo-${index_foto}`]: false,
      }));
    }
  };

  const handleChangeMain = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeGallery((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const handlePhotosLoad = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const compressedFiles = await CompressImages(files);

      if (compressedFiles === null) {
        toast.error("Pri načítaní obrázku nastala chyba. Kontaktujte nás.");
      } else {
        setProjectPhotos(compressedFiles);
      }
    }
  };

  const handleCheckboxChangeCategory = (productTitle: string) => {
    setSelectedCategory((prevSelected) => {
      const updatedSelected = prevSelected.includes(productTitle)
        ? prevSelected.filter((nazov) => nazov !== productTitle)
        : [...prevSelected, productTitle];

      setActualizeGallery((prevData) => ({
        ...prevData,
        kategorie: updatedSelected,
      }));

      return updatedSelected;
    });
  };

  console.log(actualizeGallery);

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
            <div
              className="cursor-pointer"
              onClick={() => handleEditAlbum(object)}
            >
              <IconPen />
            </div>

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

      {editAlbum && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message  overflow-x-auto">
            <div className="" onClick={() => setEditAlbum(false)}>
              <IconCloseButton />
            </div>{" "}
            <h5 className="text-center">
              Úprava albumu - {albumObject?.nazov}
            </h5>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>Názov galérie:</h6>
              <input
                type="text"
                name="nazov"
                value={actualizeGallery.nazov}
                onChange={handleChangeMain}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
            <div className="flex flex-row gap-4 justify-center mt-4">
              {actualizeGallery.fotky.map((foto, index_foto) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index_foto}
                >
                  <Image
                    src={foto}
                    width={500}
                    height={500}
                    alt="logo"
                    className="w-[200px] h-[200px] pt-2 pb-2 md:pb-0 cursor-pointer object-cover"
                  />

                  <button
                    className="btn btn--primary"
                    onClick={() => handleDeleteImageFromAlbum(index_foto)}
                    disabled={isLoadingMap[`delete_photo-${index_foto}`]}
                  >
                    {isLoadingMap[`delete_photo-${index_foto}`] ? (
                      <ClipLoader size={20} color={"#32a8a0"} loading={true} />
                    ) : (
                      "Odstrániť"
                    )}
                  </button>
                </div>
              ))}
            </div>
            <div className="product_admin_row pt-8">
              <h6 className="text-primary">
                Zaškrtnite kategériu, kde sa má zobraziť album:
              </h6>
              <div className="product_admin_col">
                {categories.map((category) => (
                  <div key={category}>
                    <input
                      type="checkbox"
                      id={category}
                      value={category}
                      checked={selectedCategory.includes(category)}
                      onChange={() => handleCheckboxChangeCategory(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center pt-8 gap-6">
              {" "}
              <h6 className="text-primary ">Pridajte fotky:</h6>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={(event) => handlePhotosLoad(event)}
                required
              />
            </div>
            <button
              className="btn btn--primary"
              onClick={() => handleEditAlbumFirebase()}
              disabled={isLoadingMap[`actualize_album`]}
            >
              {isLoadingMap[`actualize_album`] ? (
                <ClipLoader
                  size={20}
                  color={"#32a8a0"}
                  loading={true}
                  className="mr-16 ml-16"
                />
              ) : (
                "Aktualizovať"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminGallery;
