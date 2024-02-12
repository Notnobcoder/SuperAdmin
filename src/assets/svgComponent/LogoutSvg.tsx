import React from "react";

export const LogoutSvg = ({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_516_2277)">
      <path
        d="M20 6L18 6L18 4L6 4L6 20L18 20L18 18L20 18L20 21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22L5 22C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21L4 3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10535 4.73478 2 5 2L19 2C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3L20 6ZM18 13L11 13L11 11L18 11L18 8L23 12L18 16L18 13Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_516_2277">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(24 24) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);
