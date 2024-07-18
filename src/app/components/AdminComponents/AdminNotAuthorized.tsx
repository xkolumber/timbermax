"use client";

import { useAuth } from "@/app/auth/Provider";
import { doRevalidate } from "@/app/lib/actions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import IconNotAuthorized from "../Icons/IconNotAuthorized";
import AdminPageSkeleton from "./AdminPageSkeleton";

const AdminNotAuthorized = () => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/check-admin", {
          method: "GET",
        });

        if (response.status === 200) {
          await doRevalidate(pathname);
          setIsAdmin(true);
          setIsLoading(false);
        }
        setChecked(true);
      } catch (error) {
        console.error("Error sending email:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      checkAdmin();
    } else {
      const timer = setTimeout(() => {
        setChecked(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <>
      {checked && !isAdmin ? (
        <div className="min-h-[400px] justify-center items-center flex  flex-col">
          <IconNotAuthorized />
          <h2 className="text-center">Na túto sekciu nemáte oprávnenie.</h2>
          <p className="text-center">
            Zdá sa, že na túto stránku nemáte oprávnenie.
          </p>
        </div>
      ) : (
        <>{pathname === "/admin" && <AdminPageSkeleton />} </>
      )}
    </>
  );
};

export default AdminNotAuthorized;
