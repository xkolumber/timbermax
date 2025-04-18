"use client";
import React, { useState } from "react";

const IconGalleryRight = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.4 59.4"
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g id="_x32_.1_x5F_Sluzby_x5F_Terasy">
        <g id="_x32__x5F_Galeria">
          <g id="GaleriaRealizacii">
            <g id="Text">
              <g id="hover">
                <path
                  className="cls-1"
                  fill={`${isHovered ? "#626940" : "#dad5ce"}`}
                  stroke={`${isHovered ? "#626940" : "#1d281f"}`}
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="1.4px"
                  d="M29.7.7C13.71.7.7,13.71.7,29.7s13.01,29,29,29,29-13.01,29-29S45.69.7,29.7.7Z"
                />
                <polyline
                  className="cls-1"
                  fill={`${isHovered ? "#626940" : "#dad5ce"}`}
                  stroke={`${isHovered ? "white" : "#1d281f"}`}
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="1.4px"
                  points="26.43 19.03 37.02 29.63 26.28 40.37"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconGalleryRight;
