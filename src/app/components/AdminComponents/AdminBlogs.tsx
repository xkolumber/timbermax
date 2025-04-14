"use client";
import { AdminDeleteBlog } from "@/app/lib/actions";
import { fetchBlogs } from "@/app/lib/functionsServer";
import { BlogInterface, IsLoadingMap } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import IconCloseButton from "../Icons/IconCloseButton";
import IconPen from "../Icons/IconPen";
import IconTrash from "../Icons/IconTrash";

const AdminBlogs = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<BlogInterface[]>({
    queryKey: ["admin_blogs"],
    queryFn: () => fetchBlogs(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

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

      const response = await AdminDeleteBlog(idAlbum);

      if (response === 200) {
        toast.success("Projekt bol odstránený");
        await queryClient.refetchQueries({
          queryKey: ["admin_blogs"],
        });
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
    <div className=" min-h-screen">
      <Link className=" btn btn--primary" href="/admin/blog/novy-blog">
        Pridať blog
      </Link>
      <Toaster />

      <h4 className="mt-8">Všetky blogy</h4>
      {isLoading && <CircularProgress size={24} color="inherit" />}
      {error && <p>Chyba pri načítaní dát.</p>}

      {data &&
        data?.map((object, index) => (
          <div
            className="border-b border-black flex flex-row justify-between items-center"
            key={index}
          >
            <p className="text-primary"> {object.title}</p>
            <div className="flex flex-row items-center gap-6">
              <Link
                className="cursor-pointer"
                href={`/admin/blog/${object.id}`}
              >
                <IconPen />
              </Link>

              <div
                className="cursor-pointer"
                onClick={() => handleDeleteWindow(object.id, object.title)}
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
              Chcete skutočne odstániť blog - {choosenAlbum}?
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

export default AdminBlogs;
