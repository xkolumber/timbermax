"use client";
import React, { useState } from "react";

const IconDoubleArrowLeft = () => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.01 14.76"
      className="w-10 h-10 duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g id="PC">
        <g id="MainScroll">
          <g>
            <polyline
              className="cls-1"
              fill="none"
              stroke="#d9d5cf"
              strokeWidth={`${hover ? "2px" : "1px"}`}
              strokeMiterlimit={10}
              points="17.56 14.41 10.59 7.43 17.66 .35"
            />
            <polyline
              className="cls-1"
              fill="none"
              stroke="#d9d5cf"
              strokeWidth={`${hover ? "2px" : "1px"}`}
              strokeMiterlimit={10}
              points="7.69 14.41 .71 7.43 7.78 .35"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconDoubleArrowLeft;
