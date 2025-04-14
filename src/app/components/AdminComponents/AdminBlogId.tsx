"use client";
import { AdminActualizeBlog } from "@/app/lib/actions";
import {
  aws_bucket_url,
  cloudfront_url,
  CompressImages,
} from "@/app/lib/functionsClient";
import {
  fetchAllLanguages,
  fetchBlogId,
  uploadFileToS3,
} from "@/app/lib/functionsServer";
import {
  BlogInterface,
  IsLoadingMap,
  LanguagesAdming,
} from "@/app/lib/interface";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import StepBack from "../StepBack";

interface Props {
  id: string;
}

const AdminBlogId = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<BlogInterface>({
    queryKey: ["admin_blogs", id],
    queryFn: () => fetchBlogId(id),
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

  const [actualizeData, setActualizeData] = useState<BlogInterface>({
    id: "",
    title: "",
    date: "",
    slug: "",
    title_photo: "",
    partition_key: "all",
    language_content: [],
  });
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [dataLoading, setDataLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [clickedPhoto, setClickedPhoto] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleEditAlbumFirebase = async () => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize_album`]: true,
    }));

    try {
      const response = await AdminActualizeBlog(data!.id, actualizeData);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_blogs", id],
        });
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

  const handleChangeMain = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
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
    const updatedJazykyKontent = [...actualizeData.language_content];
    updatedJazykyKontent[index] = {
      ...updatedJazykyKontent[index],
      [name]: value,
    };
    setActualizeData((prev) => ({
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

      setActualizeData((prevData) => ({
        ...prevData,
        kategorie: updatedSelected,
      }));

      return updatedSelected;
    });
  };

  useEffect(() => {
    if (data) {
      setActualizeData((prevData) => ({
        ...prevData,

        id: data.id,
        title: data.title,
        date: data.date,
        slug: data.slug,
        title_photo: data.title_photo,
        partition_key: data.partition_key,
        language_content: data.language_content,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (data && languages) {
      const initializedJazykyKontent = languages.map((lang) => {
        const existingLangContent = data?.language_content?.find(
          (content) => content.language === lang.jazyk
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
      setActualizeData((prev) => ({
        ...prev,
        jazyky_kontent: initializedJazykyKontent,
      }));
    }
  }, [languages, data]);

  const handleShowBiggerIamge = (src: string) => {
    setClickedPhoto(src);
    setOpenPopUp(true);
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("No file selected");
      return;
    }

    setDataLoading(true);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const url = await uploadFileToS3(formData);
    setActualizeData((prevData) => ({
      ...prevData,
      [title]: url,
    }));
    e.target.value = "";
    setDataLoading(false);
  };

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <StepBack />

        {isLoading && (
          <CircularProgress size={24} color="inherit" className="mt-16 mb-16" />
        )}
        {error && <p>Chyba pri načítaní dát.</p>}

        {data && (
          <>
            <h5 className="text-center">Úprava blogu - {data?.title}</h5>
            <div className="flex flex-row justify-between items-center gap-4 mt-8">
              <h6>Názov blogu:</h6>
              <input
                type="text"
                name="title"
                value={actualizeData.title}
                onChange={handleChangeMain}
                className="w-full border border-solid border-black h-[5rem] mt-4"
                required
              />
            </div>

            <div className="product_admin_row">
              <p>Titulná foto:</p>
              <div className="flex flex-col w-[75%]">
                {actualizeData.title_photo && (
                  <img
                    width={120}
                    height={120}
                    src={actualizeData.title_photo.replace(
                      aws_bucket_url,
                      cloudfront_url
                    )}
                    className="mt-4 mb-4 cursor-pointer"
                    onClick={() =>
                      handleShowBiggerIamge(
                        actualizeData.title_photo.replace(
                          aws_bucket_url,
                          cloudfront_url
                        )
                      )
                    }
                  />
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "title_photo")}
                  required={actualizeData.title_photo === ""}
                />
              </div>
            </div>

            {actualizeData.language_content.map((object, index) => (
              <div key={index} className="mb-16">
                <p className="text-primary font-bold">
                  Jazyk: {object.language}
                </p>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>text1:</h6>

                  <input
                    type="text"
                    name="text1"
                    value={object.text1}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                  />
                </div>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>text2:</h6>
                  <input
                    type="text"
                    name="text2"
                    value={object.text2}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                  />
                </div>
                <div className="flex flex-row justify-between items-center gap-4 mt-8">
                  <h6>text3:</h6>
                  <input
                    type="text"
                    name="text3"
                    value={object.text3}
                    onChange={(e) => handleChangeMainLanguagesContent(e, index)}
                    className="w-full border border-solid border-black h-[5rem] mt-4"
                    required
                  />
                </div>
              </div>
            ))}

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
      </div>

      <Dialog open={dataLoading} onClose={() => setDataLoading(false)}>
        <DialogTitle>Objekt sa nahráva do cloudu..</DialogTitle>
        <DialogContent
          sx={{
            margin: "auto",
          }}
        >
          <CircularProgress color="inherit" />
        </DialogContent>
      </Dialog>

      <Dialog open={openPopUp} onClose={() => setOpenPopUp(false)}>
        <DialogContent
          sx={{
            margin: "auto",
          }}
        >
          <Image
            width={420}
            height={420}
            src={clickedPhoto}
            className="max-h-[500px] object-contain"
            alt="image"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlogId;
