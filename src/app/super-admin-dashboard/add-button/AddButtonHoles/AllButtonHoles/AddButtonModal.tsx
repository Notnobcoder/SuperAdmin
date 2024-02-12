"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Modal, ModalContent, Button, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";
import { ENDPOINT } from "@/network";
import { useAuth } from "@/context/AuthProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Color_List = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Purple", hex: "#800080" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#00FF50" },
  { name: "Teal", hex: "#008080" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Gray", hex: "#808080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Navy", hex: "#000080" },
  { name: "Olive", hex: "#808000" },
  { name: "Turquoise", hex: "#40E0D0" },
];

type propsTypeD = {
  isOpen: any;
  onOpenChange: any;
  setAllButtons: Dispatch<SetStateAction<any>>;
};

export default function AddButtonModal({
  isOpen,
  onOpenChange,
  setAllButtons,
}: propsTypeD) {
  const [buttonName, setButtonName] = useState("");
  const [buttonHolecode, setButtonHolecode] = useState("");
  const [active, setActive] = useState("");

  const handleNewStyle = () => {
    setAllButtons((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        name: buttonName,
        buttonHolecode,
        // buttonImage: awsButtonImage,
      },
    ]);

    // Reset input values
    setButtonName("");
    setButtonHolecode("");
    setActive("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      className="p-1.5 md:max-w-xs max-w-[94%] rounded-2xl max-h-[90vh]"
      placement="center"
    >
      <ModalContent className="">
        {(onClose) => (
          <>
            <ModalBody className="overflow-y-auto custom-scrollbar md:p-5 p-4">
              <div
                className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
                onClick={onClose}
              >
                <IoClose className="text-lg" />
              </div>

              <h4 className="font-semibold text-lg pb-2">Button Hole Color</h4>

              <div className="flex flex-wrap justify-center gap-5">
                {Color_List.map((i) => {
                  return (
                    <div
                      key={i.hex}
                      className={`w-12 h-12 rounded-lg cursor-pointer border ${
                        active === i.hex
                          ? "border-dark-pink p-1"
                          : "border-transparent"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded`}
                        style={{ backgroundColor: i.hex }}
                        onClick={() => {
                          setButtonHolecode(i.hex);
                          setButtonName(i.name);
                          setActive(i.hex);
                        }}
                      >
                        <Image
                          className="opacity-50 h-full w-full"
                          src="/images/buttons/button-color.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mx-auto">
                <Button
                  color="primary"
                  className="bg-transparent text-dark-pink border-[2px] border-dark-pink outline-none px-12 h-11 font-semibold"
                  onClick={() => {
                    handleNewStyle();
                    onClose();
                  }}
                >
                  Save
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
