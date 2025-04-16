import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/admin/jazyky/novy-jazyk" className="text-black">
        Pridať nový jazyk
      </Link>
    </div>
  );
};

export default page;
