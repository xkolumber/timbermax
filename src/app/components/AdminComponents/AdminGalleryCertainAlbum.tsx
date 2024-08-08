"use client";
import { categories, CompressImages } from "@/app/lib/functionsClient";
import { Gallery, IsLoadingMap, Jazyk } from "@/app/lib/interface";
import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  AdminActualizeAlbumGallery,
  AdminDeleteImageFromAlbum,
} from "@/app/lib/actions";
import IconCloseButton from "../Icons/IconCloseButton";
import Link from "next/link";

interface Props {
  data: Gallery | undefined;
  languages: Jazyk[];
}

const AdminGalleryCertainAlbum = ({ data, languages }: Props) => {
  const [actualizeGallery, setActualizeGallery] = useState<Gallery>({
    fotky: [],
    kategorie: [],
    nazov: "",
    id: "",
    profil: "",
    farba: "",
    jazyky_kontent: [],
  });
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

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
        data!.id,
        photoUrls,
        actualizeGallery
      );
      if (response === "success") {
        toast.success("Album bol aktualizovaný");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setProjectPhotos([]);
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

  const handleDeleteImageFromAlbum = async (index_foto: number) => {
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete_photo-${index_foto}`]: true,
      }));

      const response = await AdminDeleteImageFromAlbum(data!.id, index_foto);
      if (response === "success") {
        setActualizeGallery((prevData) => ({
          ...prevData,
          fotky: prevData.fotky.filter((_, index) => index !== index_foto),
        }));
        toast.success("Objekt bol vymazaný");
        setProjectPhotos([]);
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

  const handleChangeMainLanguagesContent = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedJazykyKontent = [...actualizeGallery.jazyky_kontent];
    updatedJazykyKontent[index] = {
      ...updatedJazykyKontent[index],
      [name]: value,
    };
    setActualizeGallery((prev) => ({
      ...prev,
      jazyky_kontent: updatedJazykyKontent,
    }));
  };

  const handlePhotosLoad = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    setPhotoLoading(true);

    if (files && files.length > 0) {
      const compressedFiles = await CompressImages(files);

      if (compressedFiles === null) {
        toast.error("Pri načítaní obrázku nastala chyba. Kontaktujte nás.");
        setPhotoLoading(false);
      } else {
        setProjectPhotos(compressedFiles);
        setPhotoLoading(false);
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

  useEffect(() => {
    if (data) {
      setActualizeGallery((prevData) => ({
        ...prevData,
        fotky: data.fotky ? data.fotky : [],
        kategorie: data.kategorie ? data.kategorie : [],
        nazov: data.nazov ? data.nazov : "",
        id: "",
        profil: data.profil ? data.profil : "",
        farba: data.farba ? data.farba : "",
        jazyky: data.jazyky_kontent ? data.jazyky_kontent : [],
      }));
    }
  }, [data]);

  useEffect(() => {
    const initializedJazykyKontent = languages.map((lang) => {
      const existingLangContent = actualizeGallery.jazyky_kontent.find(
        (content) => content.jazyk === lang.jazyk
      );
      return (
        existingLangContent || {
          jazyk: lang.jazyk,
          nazov_farba: "",
          nazov_profil: "",
          nazov_projekt: "",
          popis1: "",
          popis2: "",
          popis3: "",
        }
      );
    });
    setActualizeGallery((prev) => ({
      ...prev,
      jazyky_kontent: initializedJazykyKontent,
    }));
  }, [languages]);

  console.log(actualizeGallery);

  return (
    <div>
      <div className="main_section additional_padding">
        <Toaster />
        <Link href={"/admin/galeria"}>
          <p className="hover:underline ease-in text-black">Späť</p>
        </Link>
        <h5 className="text-center">Úprava albumu - {data?.nazov}</h5>
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
        <div className="flex flex-wrap gap-4 mt-4">
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
        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          <h6>profil galérie:</h6>
          <input
            type="text"
            name="profil"
            value={actualizeGallery.profil}
            onChange={handleChangeMain}
            className="w-full border border-solid border-black h-[5rem] mt-4"
            required
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          <h6>farba:</h6>
          <input
            type="text"
            name="farba"
            value={actualizeGallery.farba}
            onChange={handleChangeMain}
            className="w-full border border-solid border-black h-[5rem] mt-4"
            required
          />
        </div>
        {actualizeGallery.jazyky_kontent.map((object, index) => (
          <div key={index} className="mb-16">
            <p className="text-primary font-bold">Jazyk: {object.jazyk}</p>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>nazov_farba:</h6>
              <p>{actualizeGallery.jazyky_kontent[0].nazov_farba}</p>
              <input
                type="text"
                name="nazov_farba"
                value={object.nazov_farba}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>nazov_profil:</h6>
              <input
                type="text"
                name="nazov_profil"
                value={object.nazov_profil}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>nazov_projekt:</h6>
              <input
                type="text"
                name="nazov_projekt"
                value={object.nazov_projekt}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>Popis 1:</h6>
              <input
                type="text"
                name="popis1"
                value={object.popis1}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>

            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>Popis 2:</h6>
              <input
                type="text"
                name="popis2"
                value={object.popis2}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>Popis 3:</h6>
              <input
                type="text"
                name="popis3"
                value={object.popis3}
                onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>
          </div>
        ))}

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
                  checked={actualizeGallery.kategorie.includes(category)}
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
          {photoLoading && (
            <ClipLoader
              size={20}
              color={"#32a8a0"}
              loading={true}
              className=""
            />
          )}
        </div>
        <button
          className={`btn btn--primary ${
            (photoLoading || isLoadingMap["actualize_album"]) && "disabledBtn"
          } `}
          onClick={() => handleEditAlbumFirebase()}
          disabled={isLoadingMap[`actualize_album`] || photoLoading}
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
    </div>
  );
};

export default AdminGalleryCertainAlbum;
