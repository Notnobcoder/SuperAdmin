import React from "react";

export const DropdownsSvg = ({
  width = 34,
  height = 34,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 34 34"
    fill="none"
  >
    <g clipPath="url(#clip0_516_2263)">
      <path
        d="M17.0001 21.25L10.9891 15.2391L12.9937 13.236L17.0001 17.2437L21.0064 13.236L23.011 15.2391L17.0001 21.25Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_516_2263">
        <rect width="34" height="34" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
