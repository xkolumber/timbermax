import React from "react";

interface Props {
  isClicked: boolean;
}

const IconPalleteVertical = ({ isClicked }: Props) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.9 36.9"
      width="30"
      height="30"
      className={isClicked ? "opacity-100" : "opacity-25"}
    >
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #1d281f;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-width: 1.4px;
          }
             `}
        </style>
      </defs>
      <g id="_2.1_Sluzby_Terasy" data-name="2.1_Sluzby_Terasy">
        <g id="_3.1_FarebneVarianty" data-name="3.1_FarebneVarianty">
          <g id="_3_VizualizacieDosiek" data-name="3_VizualizacieDosiek">
            <g id="_3.2_Vizualizacia" data-name="3.2_Vizualizacia">
              <g id="BANGKIRAI">
                <g>
                  <rect
                    className="cls-1"
                    x=".7"
                    y=".7"
                    width="7.1"
                    height="35.5"
                  />
                  <rect
                    className="cls-1"
                    x="7.8"
                    y=".7"
                    width="7.1"
                    height="35.5"
                  />
                  <rect
                    className="cls-1"
                    x="22"
                    y=".7"
                    width="7.1"
                    height="35.5"
                  />
                  <rect
                    className="cls-1"
                    x="29.1"
                    y=".7"
                    width="7.1"
                    height="35.5"
                  />
                  <rect
                    className="cls-1"
                    x="14.9"
                    y=".7"
                    width="7.1"
                    height="35.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconPalleteVertical;
