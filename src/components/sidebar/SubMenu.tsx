"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type propsTypeD = {
  path: string;
  svg: any;
  value: string;
};

export default function SubMenu({ item }: { item: propsTypeD }) {
  const [isHover, setIsHover] = useState(false);
  const { path, svg, value } = item;
  const pathname = usePathname();

  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={path}
      className={`group dark:text-white relative flex items-center gap-2.5 rounded-sm py-1 my-0.5 px-5 font-medium duration-300 ease-in-out  rounded-r-[3rem]  dark:hover:bg-meta-4 ${
        pathname === path
          ? "bg-dark-pink text-white"
          : "bg-transparent hover:bg-dark-pink hover:text-white text-[#000000]"
      }
       }`}
    >
      <span
        className={` w-8 h-8 flex items-center justify-center ${
          isHover ? "text-white" : "text-dark-pink"
        }`}
      >
        {svg}
      </span>
      <span>{value}</span>
    </Link>
  );
}
