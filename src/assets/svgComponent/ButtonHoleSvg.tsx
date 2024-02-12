import React from "react";

export const ButtonHoleSvg = ({
  width = 77,
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
    viewBox="0 0 77 42"
    fill="none"
  >
    <rect y="13.8359" width="77" height="13.4839" rx="4.73118" fill={color} />
    <path
      d="M39.3297 17.1484L0.238281 20.2828L39.3297 24.0678L76.7652 20.2828L39.3297 17.1484Z"
      fill="#00000043"
    />
    <circle cx="38.4992" cy="20.6398" r="20.6398" fill="#272727" />
    <circle cx="38.5" cy="20.6406" r="16.5" fill="white" />
    <circle
      cx="32.9425"
      cy="16.5011"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="42.9738"
      cy="15.673"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="44.0363"
      cy="24.7785"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <circle
      cx="33.8605"
      cy="25.4894"
      r="2.36559"
      stroke="black"
      stroke-width="0.591398"
    />
    <rect
      x="32.7109"
      y="14.668"
      width="16.1926"
      height="2.72043"
      rx="1.36022"
      transform="rotate(36.6914 32.7109 14.668)"
      fill="#272727"
    />
    <rect
      x="44.8672"
      y="15.5547"
      width="16.1926"
      height="2.72043"
      rx="1.36022"
      transform="rotate(132.564 44.8672 15.5547)"
      fill="#272727"
    />
  </svg>
);
