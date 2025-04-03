import React from "react";

const IconCertificateDownload = () => {
  return (
    <div className="w-18 h-18 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-300 cursor-pointer">
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.41 72.41"
        width="72"
        height="72"
      >
        <defs>
          <style>
            {`
              .cls-1c {
                fill: none;
                stroke: #2b2b2b;
                stroke-miterlimit: 10;
                stroke-width: 1.4px;
              }
              .cls-2c {
                fill: #b5a89c;
                transition: fill 0.3s ease;
              }
              .hover-bg:hover .cls-2c {
                fill: #a39284; /* Change color on hover */
              }
            `}
          </style>
        </defs>
        <g
          id="_2.6_Produkty_Ostatne"
          data-name="2.6_Produkty_Ostatne"
          className="hover-bg"
        >
          <g id="Button_Download">
            <circle className="cls-2c" cx="36.2" cy="36.2" r="36.2" />
            <g>
              <polyline
                className="cls-1c"
                points="52.15 40.49 52.15 51.57 20.26 51.57 20.26 40.49"
              />
              <polygon
                className="cls-1c"
                points="40.78 20.83 40.78 31.37 48.31 31.37 36.2 43.47 24.1 31.37 31.63 31.37 31.63 20.83 40.78 20.83"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default IconCertificateDownload;
