import React from "react";

export const AddFabricSvg = ({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
  >
    <g clipPath="url(#clip0_37_1992)">
      <path
        d="M3 2.25H15C15.1989 2.25 15.3897 2.32902 15.5303 2.46967C15.671 2.61032 15.75 2.80109 15.75 3V15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75H3C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15V3C2.25 2.80109 2.32902 2.61032 2.46967 2.46967C2.61032 2.32902 2.80109 2.25 3 2.25ZM3.75 3.75V14.25H14.25V3.75H3.75ZM8.25 8.25V5.25H9.75V8.25H12.75V9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_37_1992">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
