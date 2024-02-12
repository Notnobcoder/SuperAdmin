"use client";

import React, { Dispatch, SetStateAction } from "react";
import { MdDelete } from "react-icons/md";
import { AllButtonsD } from ".";
import { ButtonThreadsSvg } from "@/assets/svgComponent";

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
          <ButtonThreadsSvg
            width="auto"
            height={35}
            color={item.buttonThreadcode}
          />
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
