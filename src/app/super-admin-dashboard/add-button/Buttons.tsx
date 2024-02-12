"use client";

import React, { useState } from "react";
import AddButtons from "./AddButtons";
import AddButtonHoles from "./AddButtonHoles";
import AddButtonThreads from "./AddButtonThreads";
import AllButtons from "./AddButtons/AllButtons";
import { IoChevronBackOutline } from "react-icons/io5";
import { ButtonE } from "@/utils/constants";
import ButtonHoles from "./AddButtonHoles/AllButtonHoles";
import ButtonThreads from "./AddButtonThreads/AllButtonThreads";

export default function Buttons() {
  const [selectedButton, setSelectedButton] = useState("");

  let componentToRender;

  switch (selectedButton) {
    case ButtonE.button:
      componentToRender = (
        <div>
          <div className="flex items-center gap-5">
            <div
              className="flex items-center justify-center h-8 w-8 bg-black text-white text-xl rounded-full cursor-pointer"
              onClick={() => setSelectedButton("")}
            >
              <IoChevronBackOutline />
            </div>
            <h4 className="font-semibold text-2xl">Buttons Setup</h4>
          </div>
          <div className="mt-7">
            <AllButtons />
          </div>
        </div>
      );
      break;
    case ButtonE.buttonHole:
      componentToRender = (
        <div>
          <div className="flex items-center gap-5">
            <div
              className="flex items-center justify-center h-8 w-8 bg-black text-white text-xl rounded-full cursor-pointer"
              onClick={() => setSelectedButton("")}
            >
              <IoChevronBackOutline />
            </div>
            <h4 className="font-semibold text-2xl">Button Hole Setup</h4>
          </div>
          <div className="mt-7">
            <ButtonHoles />
          </div>
        </div>
      );
      break;
    case ButtonE.buttonThread:
      componentToRender = (
        <div>
          <div className="flex items-center gap-5">
            <div
              className="flex items-center justify-center h-8 w-8 bg-black text-white text-xl rounded-full cursor-pointer"
              onClick={() => setSelectedButton("")}
            >
              <IoChevronBackOutline />
            </div>
            <h4 className="font-semibold text-2xl">Button Threads Setup</h4>
          </div>
          <div className="mt-7">
            <ButtonThreads />
          </div>
        </div>
      );
      break;
    default:
      componentToRender = (
        <div>
          <h4 className="font-semibold text-2xl">Quick order Setup</h4>
          <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5 mt-7">
            <AddButtons onContinue={() => setSelectedButton(ButtonE.button)} />
            <AddButtonHoles
              onContinue={() => setSelectedButton(ButtonE.buttonHole)}
            />
            <AddButtonThreads
              onContinue={() => setSelectedButton(ButtonE.buttonThread)}
            />
          </div>
        </div>
      );
      break;
  }

  return <div>{componentToRender}</div>;
}
