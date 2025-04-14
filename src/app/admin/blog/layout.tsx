"use client";
import { fetchAllLanguages } from "@/app/lib/functionsServer";
import { LanguagesAdming } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const {
    data: languages,
    error,
    isLoading,
  } = useQuery<LanguagesAdming[]>({
    queryKey: ["languages"],
    queryFn: () => fetchAllLanguages(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const currentPath = pathname.split("/").pop();

  return (
    <div className="flex flex-col ">
      <div className="">
        {isLoading && <CircularProgress size={24} color="inherit" />}
        {error && <p>Chyba pri načítaní dát.</p>}
        {languages && (
          <div className="grid grid-cols-3 gap-4 pt-4">
            {languages.map((object, index) => (
              <Link
                className={`p-[24px] rounded-[8px] hover:scale-[1.02] duration-200 cursor-pointer text-black ${
                  currentPath === object.jazyk
                    ? "bg-[#384239] text-white"
                    : "bg-white"
                }`}
                key={index}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
                href={`/admin/blog/${object.jazyk}`}
              >
                {object.jazyk}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 mt-16">{children}</div>
    </div>
  );
}
