import React from "react";

interface Props {
  isHovered: boolean;
}

const IconDownload = ({ isHovered }: Props) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.29 32.14"
      className="w-10 h-10"
    >
      <g id="Cennik">
        <g id="Lista">
          <g id="Button_Download">
            <g>
              <polyline
                className="cls-1"
                fill="none"
                stroke={`${isHovered ? "#dad5ce" : "#2b2b2b"}`}
                strokeMiterlimit="10"
                strokeWidth="1.4px"
                points="32.59 20.36 32.59 31.44 .7 31.44 .7 20.36"
              />
              <polygon
                className="cls-1"
                fill="none"
                stroke={`${isHovered ? "#dad5ce" : "#2b2b2b"}`}
                strokeMiterlimit="10"
                strokeWidth="1.4px"
                points="21.22 .7 21.22 11.23 28.75 11.23 16.64 23.34 4.54 11.23 12.07 11.23 12.07 .7 21.22 .7"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconDownload;
