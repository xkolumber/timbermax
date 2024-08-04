"use client";
import React, { useState } from "react";

const IconDoubleArrowRight = () => {
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
              strokeMiterlimit={10}
              strokeWidth={`${hover ? "2px" : "1px"}`}
              points=".45 .35 7.43 7.33 .35 14.41"
            />
            <polyline
              className="cls-1"
              fill="none"
              stroke="#d9d5cf"
              strokeMiterlimit={10}
              strokeWidth={`${hover ? "2px" : "1px"}`}
              points="10.33 .35 17.3 7.33 10.23 14.41"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconDoubleArrowRight;
