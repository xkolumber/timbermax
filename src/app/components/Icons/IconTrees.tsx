import React from "react";

interface Props {
  color: string;
}

const IconTrees = ({ color }: Props) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 58.49 49.01"
      width="60"
      height="40"
    >
      <defs>
        <style>
          {`
                   .cls-1-tree {
            fill: ${color};
          }
    
          .cls-2-tree {
            opacity: .83;
          }
                
                `}
        </style>
      </defs>
      <g id="Cennik">
        <g id="CENOVÝ_POROVNÁVAČ" data-name="CENOVÝ POROVNÁVAČ">
          <g className="cls-2-tree">
            <polygon
              className="cls-1-tree"
              points="24.98 28.9 15.91 12.44 19.34 12.44 12.49 0 5.64 12.44 9.06 12.44 0 28.9 10.14 28.9 10.48 28.9 10.48 49.01 14.5 49.01 14.5 28.9 15.51 28.9 24.98 28.9"
            />
            <polygon
              className="cls-1-tree"
              points="58.49 28.9 49.42 12.44 52.85 12.44 46 0 39.15 12.44 42.57 12.44 33.51 28.9 43.65 28.9 43.99 28.9 43.99 49.01 48.01 49.01 48.01 28.9 49.02 28.9 58.49 28.9"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconTrees;
