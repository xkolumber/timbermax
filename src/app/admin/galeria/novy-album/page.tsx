"use client";
import { AdminAddPhotoGallery } from "@/app/lib/actions";
import { categories, CompressImage } from "@/app/lib/functionsClient";
import { uploadFileToS3 } from "@/app/lib/functionsServer";
import { Gallery } from "@/app/lib/interface";
import { useQueryClient } from "@tanstack/react-query";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [actualizeGallery, setActualizeGallery] = useState<Gallery>({
    datum_pridania: "",
    fotky: [],
    kategorie: [],
    nazov: "",
    id: "",
    profil: "",
    farba: "",
    jazyky_kontent: [],
  });
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const handleAddGalleryFirebase = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await AdminAddPhotoGallery(actualizeGallery);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_gallery"],
        });
        toast.success("Album bol pridaný");
        setActualizeGallery((prevData) => ({
          ...prevData,
          fotky: [],
          kategorie: [],
          profil: "",
          nazov: "",
        }));
        setSelectedCategory([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.push("/admin/galeria");
      } else {
        toast.error("Niekde nastala chyba");
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
    <div className="">
      <Toaster />
      <Link href={"/admin/galeria"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>
      <form onSubmit={handleAddGalleryFirebase}>
        <h3>Pridanie nového albumu</h3>

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
        <p className="text-primary"> *popisy sa dodatočne nahadzujú</p>

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
        <h6 className="text-primary pt-8">Pridajte fotky:</h6>
        <p className="text-primary">
          P.S. :Prvá fotka by mala byť na šírku, druhá a tretia - nezávisí..
          zbytok ideálne na šírku{" "}
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleUploadPhotos(e)}
          className="mt-6"
          multiple
        />
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
  );
};

export default Page;
