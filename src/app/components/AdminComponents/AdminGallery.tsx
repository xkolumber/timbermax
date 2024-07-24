import Link from "next/link";
import React from "react";

const AdminGallery = () => {
  return (
    <div className="main_section additional_padding min-h-screen">
      <Link className=" btn btn--primary" href="/admin/galeria/novy-album">
        Pridať galériu
      </Link>
      AdminGallery
    </div>
  );
};

export default AdminGallery;
