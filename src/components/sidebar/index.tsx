"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoImage } from "@/imageLinks";
import { SidebarRoutes } from "./SidebarRoutes";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface SidebarProps {
  dashbaordValues: {
    path: string;
    svg: any;
    value: string;
  }[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ dashbaordValues, open, setOpen }: SidebarProps) => {
  return (
    <aside
      className={`max-lg:absolute max-lg:left-0 max-lg:top-0 z-50 flex h-screen transition-all flex-col bg-[#FFF2FD] text-black border-r border-light-pink ${
        open ? "translate-x-0 w-[280px]" : "-translate-x-[320px] lg:w-0"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-5 p-8">
        <Link href="/">
          <Image
            width={102}
            height={33}
            src={LogoImage}
            alt="Logo"
            className=""
          />
        </Link>

        <div
          className="bg-dark-pink w-8 h-8 flex items-center justify-center rounded-full text-white cursor-pointer"
          onClick={() => setOpen(false)}
        >
          {/* <IoClose className="text-lg" /> */}
          <MdOutlineKeyboardArrowLeft className="text-2xl" />
        </div>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear py-5 pr-5">
        {/* <!-- Sidebar Menu --> */}
        <nav className="">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="flex flex-col gap-1.5">
              {dashbaordValues.map((item, key) => (
                <SidebarRoutes key={key} item={item} />
              ))}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
