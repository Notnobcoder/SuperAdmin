"use client";

// imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { FaPlus } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useAuth } from "@/context/AuthProvider";

const SUB_MENUS = [
  {
    path: "/super-admin-dashboard/add-product",
    svg: <FaPlus />,
    value: "Add Product",
  },
  {
    path: "/super-admin-dashboard/add-measurement",
    svg: <FaPlus />,
    value: "Add Measurement",
  },
  {
    path: "/super-admin-dashboard/add-button",
    svg: <FaPlus />,
    value: "Button Setup",
  },
];

type propsTypeD = {
  path: string;
  svg: any;
  value: string;
};

export const SidebarRoutes = ({ item }: { item: propsTypeD }) => {
  const [isHover, setIsHover] = useState(false);
  const { path, svg, value } = item;
  const pathname = usePathname();
  // const [isSubMenu, setIsSubMenu] = useState(false);
  const isPathnameIncludesValue = SUB_MENUS.some((menuItem) =>
    pathname.includes(menuItem.path)
  );
  const { Logout } = useAuth();

  const menuTitle = (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`group dark:text-white relative flex items-center gap-2.5 rounded-sm py-1.5 my-0.5 px-5 font-medium duration-300 ease-in-out  rounded-r-[3rem]  dark:hover:bg-meta-4 cursor-pointer ${
        isPathnameIncludesValue
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
    </div>
  );

  const itemClasses = {
    base: "",
    title: "font-normal text-base",
    trigger: "p-0 font-normal",
    indicator: "",
    content: "p-0",
  };

  return (
    <li>
      {value === "Quick Order Setup" ? (
        <>
          <Accordion
            showDivider={false}
            hideIndicator
            itemClasses={itemClasses}
            className="p-0"
          >
            <AccordionItem key="1" aria-label="Accordion 1" title={menuTitle}>
              {SUB_MENUS.map((item, index) => {
                return (
                  <div key={item.value} className="mx-5 my-1">
                    <SubMenu item={item} />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
        </>
      ) : value === "Logout" ? (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`group dark:text-white relative flex items-center gap-2.5 rounded-sm py-1.5 my-0.5 px-5 font-medium duration-300 ease-in-out  rounded-r-[3rem]  dark:hover:bg-meta-4 cursor-pointer ${
            pathname === path
              ? "bg-dark-pink text-white"
              : "bg-transparent hover:bg-dark-pink hover:text-white text-[#000000]"
          }`}
          onClick={Logout}
        >
          <span
            className={` w-8 h-8 flex items-center justify-center ${
              isHover ? "text-white" : "text-dark-pink"
            }`}
          >
            {svg}
          </span>
          <span>{value}</span>
        </div>
      ) : (
        <Link
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href={path}
          className={`group dark:text-white relative flex items-center gap-2.5 rounded-sm py-1.5 my-0.5 px-5 font-medium duration-300 ease-in-out  rounded-r-[3rem]  dark:hover:bg-meta-4 ${
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
      )}
    </li>
  );
};
