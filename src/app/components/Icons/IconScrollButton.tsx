import React from "react";

const IconScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.16 63"
      onClick={scrollToTop}
      className="w-16 h-16"
    >
      <g id="PC">
        <g id="KONTAKT">
          <g>
            <path
              className="cls-1"
              fill="#d9d5cf"
              d="M11.5,0h30.16c6.35,0,11.5,5.15,11.5,11.5v51.5H0V11.5C0,5.15,5.15,0,11.5,0Z"
              transform="translate(53.16 63) rotate(180)"
            />
            <path
              className="cls-2"
              fill="none"
              stroke="#252823"
              strokeMiterlimit={10}
              strokeWidth="1.8px"
              d="M13.43,36.3l13.43-13.43,13.62,13.62M40.48,50l-13.62-13.62-13.43,13.43"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconScrollButton;
