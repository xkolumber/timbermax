import React from "react";
import IconCertificateDownload from "./Icons/IconCertificateDownload";

const CertificateDownload = () => {
  return (
    <div
      className="bg-[#CCC4BA]
  "
    >
      <div className="main_section flex flex-col md:flex-row justify-between items-center">
        <h6 className="uppercase">Certifikáty na stiahnutie</h6>
        <div className="flex flex-row gap-24">
          <div className="flex flex-col items-center gap-4">
            <IconCertificateDownload />
            <h6 className="uppercase">Fire Safety</h6>
          </div>

          <div className="flex flex-col items-center gap-4">
            <IconCertificateDownload />
            <h6 className="uppercase">Structural Integrity</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDownload;
