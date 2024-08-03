"use client";
import React, { useState } from "react";

const IconArrowLoopRight = () => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.22 37.37"
      className="w-12 h-12 2xl:w-16 2xl:h-16 duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g id="MainPage">
        <g id="Buttons">
          <polyline
            id="NextPhoto"
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth={`${hover ? "3px" : "2px"}`}
            className="cls-1"
            points=".95 .71 18.8 18.56 .71 36.66"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconArrowLoopRight;
