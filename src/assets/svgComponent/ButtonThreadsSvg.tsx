import React from "react";

export const ButtonThreadsSvg = ({
  width = 42,
  height = 42,
  color = "#00930F",
}: {
  width?: number | string;
  height?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 42 42"
    fill="none"
  >
    <circle cx="20.6398" cy="20.6398" r="20.6398" fill="#272727" />
    <circle cx="20.6406" cy="20.6406" r="16.5" fill="white" />
    <circle
      cx="15.0832"
      cy="16.5011"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="25.1144"
      cy="15.673"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="26.1769"
      cy="24.7785"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="16.0011"
      cy="25.4894"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <rect
      x="14.8516"
      y="14.668"
      width="16.1926"
      height="2.72043"
      rx="1.36022"
      transform="rotate(36.6914 14.8516 14.668)"
      fill={color}
    />
    <rect
      x="27.0078"
      y="15.5547"
      width="16.1926"
      height="2.72043"
      rx="1.36022"
      transform="rotate(132.564 27.0078 15.5547)"
      fill={color}
    />
  </svg>
);
