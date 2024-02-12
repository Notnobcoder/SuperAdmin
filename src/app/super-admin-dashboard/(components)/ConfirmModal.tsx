"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type propsTypeD = {
  title: string;
  text: string;
  isOpen: any;
  onOpenChange: any;
};

export default function ConfirmModal({
  title,
  text,
  isOpen,
  onOpenChange,
}: propsTypeD) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      className="p-8"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div
              className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
              onClick={onClose}
            >
              <IoClose className="text-lg" />
            </div>
            <h5 className="text-lg font-medium mb-5">{title}</h5>
            <div className="flex flex-col gap-8">
              <div className="text-center">{text}</div>
              <div className="flex gap-3 justify-center items-center">
                <button className="bg-dark-pink text-white px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm">
                  Yes
                </button>
                <button
                  className="bg-light-gray text-black font-medium px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm"
                  onClick={onClose}
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
