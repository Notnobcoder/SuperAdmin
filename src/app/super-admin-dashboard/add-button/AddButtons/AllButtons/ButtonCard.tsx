"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { MdDelete } from "react-icons/md";
import { AllButtonsD } from ".";

export default function ButtonCard({
  item,
  setAllButtons,
}: {
  item: AllButtonsD;
  setAllButtons: Dispatch<SetStateAction<AllButtonsD[]>>;
}) {
  const handleDeleteButton = () => {
    setAllButtons((prevButtons) =>
      prevButtons.filter((button) => button.id !== item.id)
    );
  };
  return (
    <div className="rounded-xl bg-white border border-black/10 flex gap-14 items-center justify-between px-5 py-3 h-16 max-md:w-full">
      <div className="flex items-center gap-5">
        <div>
          <Image src={item.buttonImage} alt="button" width={50} height={50} />
        </div>
        <div>{item.name}</div>
      </div>
      <div
        className="text-dark-pink text-xl cursor-pointer"
        onClick={handleDeleteButton}
      >
        <MdDelete />
      </div>
    </div>
  );
}
