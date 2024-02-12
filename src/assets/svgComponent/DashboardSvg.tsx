import React from "react";

export const DashboardSvg = ({
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
    <g clipPath="url(#clip0_516_2259)">
      <path
        d="M9.75 15.75V8.25H15.75V15.75H9.75ZM2.25 9.75V2.25H8.25V9.75H2.25ZM6.75 8.25V3.75H3.75V8.25H6.75ZM2.25 15.75V11.25H8.25V15.75H2.25ZM3.75 14.25H6.75V12.75H3.75V14.25ZM11.25 14.25H14.25V9.75H11.25V14.25ZM9.75 2.25H15.75V6.75H9.75V2.25ZM11.25 3.75V5.25H14.25V3.75H11.25Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_516_2259">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
