"use client";
import {
  AdminActualizeAlbumGallery,
  AdminDeleteImageFromAlbum,
} from "@/app/lib/actions";

import {
  aws_bucket_url,
  categories,
  cloudfront_url,
  CompressImage,
} from "@/app/lib/functionsClient";
import {
  fetchAllLanguages,
  fetchGalleryId,
  uploadFileToS3,
} from "@/app/lib/functionsServer";
import { Gallery, IsLoadingMap, LanguagesAdming } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  id: string;
}

const AdminGalleryCertainAlbum = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<Gallery>({
    queryKey: ["admin_gallery", id],
    queryFn: () => fetchGalleryId(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const {
    data: languages,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<LanguagesAdming[]>({
    queryKey: ["languages"],
    queryFn: () => fetchAllLanguages(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const [actualizeGallery, setActualizeGallery] = useState<Gallery>({
    datum_pridania: "",
    fotky: [],
    kategorie: [],
    nazov: "",
    id: "",
    profil: "",
    farba: "",
    jazyky_kontent: [],
    partition_key: "all",
  });
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  const handleEditAlbumFirebase = async () => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize_album`]: true,
    }));

    try {
      const response = await AdminActualizeAlbumGallery(
        data!.id,
        actualizeGallery
      );
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_gallery", id],
        });
        toast.success("Album bol aktualizovaný");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
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
      if (response === 200) {
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

  const handleChangeMainLanguagesContent = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
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
        partition_key: "all",
      }));
    }
  }, [data]);

  useEffect(() => {
    if (data && languages) {
      const initializedJazykyKontent = languages.map((lang) => {
        const existingLangContent = data?.jazyky_kontent?.find(
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
    }
  }, [languages, data]);

  const handleUploadPhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    const validFiles = fileArray.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      toast.error("Iba obrázky sú povolené");
      return;
    }

    setDataLoading(true);

    const compressedFiles = [];
    for (const file of validFiles) {
      const compressedFile = await CompressImage(file);
      if (compressedFile) {
        const newFile = new File([compressedFile], file.name, {
          type: compressedFile.type,
          lastModified: file.lastModified,
        });
        compressedFiles.push(newFile);
      }
    }

    try {
      const uploadedUrls = await Promise.all(
        compressedFiles.map(async (compressedFile) => {
          const formData = new FormData();

          const fileName = compressedFile.name.replace(/\s+/g, "_");
          console.log(fileName);

          formData.append("file", compressedFile);

          const url = await uploadFileToS3(formData);

          return url;
        })
      );

      setActualizeGallery((prevData) => {
        const updatedPhotos = [...prevData.fotky, ...uploadedUrls];
        return { ...prevData, fotky: updatedPhotos };
      });
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Failed to upload one or more photos. Please try again.");
    } finally {
      setDataLoading(false);
      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <Link href={"/admin/galeria"}>
          <p className="hover:underline ease-in text-black">Späť</p>
        </Link>

        {isLoading && (
          <CircularProgress size={24} color="inherit" className="mt-16 mb-16" />
        )}
        {error && <p>Chyba pri načítaní dát.</p>}

        {data && (
          <>
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
                    src={foto.replace(aws_bucket_url, cloudfront_url)}
                    width={500}
                    height={500}
                    priority
                    alt="logo"
                    className="w-[200px] h-[200px] pt-2 pb-2 md:pb-0 cursor-pointer object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPoyAnauXnji/+fbVNdGZqyAqe1FtlEajHIMzD42mhFBFjwaAgw8DEAAEdSDLK7z3GTAAAAAElFTkSuQmCC"
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
            <div className="flex flex-row items-center pt-8 gap-6 mb-16">
              {" "}
              <h6 className="text-primary ">Pridajte fotky:</h6>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUploadPhotos(e)}
                className="mt-6"
                multiple
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
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>profil galérie:</h6>
              <input
                type="text"
                name="profil"
                value={actualizeGallery.profil}
                onChange={handleChangeMain}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
                placeholder="t138"
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
                placeholder="brown"
              />
            </div>
            {actualizeGallery.jazyky_kontent.map((object, index) => (
              <div key={index} className="mb-16">
                <p className="text-primary font-bold">Jazyk: {object.jazyk}</p>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>nazov_farba:</h6>

                  <input
                    type="text"
                    name="nazov_farba"
                    value={object.nazov_farba}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                    placeholder="vo farbe - preklad slova"
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
                    placeholder="profil - preklad slova"
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
                    placeholder="projekt - preklad slova"
                  />
                </div>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>Popis 1:</h6>
                  <textarea
                    name="popis1"
                    value={object.popis1}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                  />
                </div>

                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>Popis 2:</h6>
                  <textarea
                    name="popis2"
                    value={object.popis2}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                  />
                </div>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>Popis 3:</h6>
                  <textarea
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

            <button
              className={`btn btn--primary ${
                (photoLoading || isLoadingMap["actualize_album"]) &&
                "disabledBtn"
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
          </>
        )}

        {dataLoading && (
          <>
            {" "}
            <div className="behind_card_background"></div>
            <div className="popup_message">
              <h5 className="text-center">Objekty sa nahrávajú do cloudu...</h5>
              <ClipLoader
                size={20}
                color={"#00000"}
                loading={true}
                className="ml-16 mr-16"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminGalleryCertainAlbum;
