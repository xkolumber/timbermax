"use client";
import { AdminAddBlog } from "@/app/lib/actions";
import {
  aws_bucket_url,
  cloudfront_url,
  CompressImages,
} from "@/app/lib/functionsClient";
import { uploadFileToS3 } from "@/app/lib/functionsServer";
import { BlogInterface } from "@/app/lib/interface";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);

  const router = useRouter();
  const [clickedPhoto, setClickedPhoto] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);

  const [actualizeData, setActualizeData] = useState<BlogInterface>({
    id: "",
    title: "",
    date: "",
    slug: "",
    title_photo: "",
    partition_key: "all",
    language_content: [],
  });
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [photoLoading, setPhotoLoading] = useState(false);

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

  const handleAddGalleryFirebase = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await AdminAddBlog(actualizeData);

      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_blogs"],
        });
        router.push("/admin/blog");
      }
    } catch (error) {
      console.error("Error adding photo:", error);
    } finally {
      setIsLoading(false);
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

  const handleShowBiggerIamge = (src: string) => {
    setClickedPhoto(src);
    setOpenPopUp(true);
  };

  return (
    <div className="products_admin">
      <Toaster />
      <Link href={"/admin/galeria"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>
      <form onSubmit={handleAddGalleryFirebase}>
        <h3>Nový blog</h3>

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

        <p className="text-primary"> *popisy sa dodatočne nahadzujú</p>

        {photoLoading && (
          <ClipLoader size={20} color={"#32a8a0"} loading={true} className="" />
        )}
        <button
          className={`btn btn--primary ${
            (photoLoading || isLoading) && "disabledBtn"
          }`}
          type="submit"
          disabled={photoLoading || isLoading}
        >
          {isLoading ? (
            <ClipLoader
              size={20}
              color={"#32a8a0"}
              loading={true}
              className="mr-8 ml-8"
            />
          ) : (
            "Pridať blog"
          )}
        </button>
      </form>

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

export default Page;
