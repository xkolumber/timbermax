"use client";
import { CompressImages } from "@/app/lib/functionsClient";
import { BlogInterface } from "@/app/lib/interface";
import { useQueryClient } from "@tanstack/react-query";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [actualizeGallery, setActualizeGallery] = useState<BlogInterface>({
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
      const storage = getStorage();
      const photoUrls = await Promise.all(
        projectPhotos.map(async (photo) => {
          const storageRef = ref(storage, `galeria/${photo.name}`);
          await uploadBytes(storageRef, photo);
          return getDownloadURL(storageRef);
        })
      );

      //   const response = await AdminAddPhotoGallery(photoUrls, actualizeGallery);
      //   if (response === 200) {
      //     await queryClient.refetchQueries({
      //       queryKey: ["admin_gallery"],
      //     });
      //     toast.success("Album bol pridaný");
      //     setActualizeGallery((prevData) => ({
      //       ...prevData,
      //       fotky: [],
      //       kategorie: [],
      //       profil: "",
      //       nazov: "",
      //     }));
      //     setProjectPhotos([]);
      //     setSelectedCategory([]);
      //     if (fileInputRef.current) {
      //       fileInputRef.current.value = "";
      //     }
      //     router.push("/admin/galeria");
      //   } else {
      //     toast.error("Niekde nastala chyba");
      //   }
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
    setActualizeGallery((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
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

  return (
    <div className="">
      <Toaster />
      <Link href={"/admin/galeria"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>
      <form onSubmit={handleAddGalleryFirebase}>
        <h3>Pridanie nového albumu</h3>

        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          <h6>Názov blogu:</h6>
          <input
            type="text"
            name="title"
            value={actualizeGallery.title}
            onChange={handleChangeMain}
            className="w-full border border-solid border-black h-[5rem] mt-4"
            required
          />
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
            "Pridať galériu"
          )}
        </button>
      </form>
    </div>
  );
};

export default Page;
