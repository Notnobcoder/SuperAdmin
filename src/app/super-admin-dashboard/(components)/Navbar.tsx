"use client";

import { useAuth } from "@/context/AuthProvider";
import { LogoImage } from "@/imageLinks";
import Image from "next/image";
import React from "react";
import { RiLogoutBoxRLine, RiMenu5Fill } from "react-icons/ri";

export default function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { Logout } = useAuth();
  return (
    <div className={`transition-alls sticky top-0 bg-white`}>
      <div className="h-16 px-4 md:px-6 2xl:px-10 flex items-center justify-between border-b border-[#cccccc80]">
        <div
          className={`flex items-center gap-7 ${
            open
              ? "opacity-0 pointer-events-none"
              : "pointer-events-auto opacity-100"
          }`}
        >
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            <RiMenu5Fill className="text-2xl text-[#4D4D4D]" />
          </div>
          <Image
            width={102}
            height={33}
            src={LogoImage}
            alt="Logo"
            className=""
          />
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer ml-auto"
          onClick={Logout}
        >
          <div>
            <RiLogoutBoxRLine className="text-2xl text-dark-pink/50" />
          </div>
          <div className="text-dark-pink/50 font-medium">Logout</div>
        </div>
      </div>
    </div>
  );
}
