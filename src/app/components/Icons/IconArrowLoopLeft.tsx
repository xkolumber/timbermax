"use client";
import React, { useState } from "react";

const IconArrowLoopLeft = () => {
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
            id="PreviousPhoto"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth={`${hover ? "3px" : "2px"}`}
            className="cls-1"
            points="19.27 36.66 1.41 18.8 19.51 .71"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconArrowLoopLeft;
