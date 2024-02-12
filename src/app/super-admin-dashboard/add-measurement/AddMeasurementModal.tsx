"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Modal, ModalContent, Button, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";
import { ENDPOINT } from "@/network";
import { useAuth } from "@/context/AuthProvider";

type propsTypeD = {
  isOpen: any;
  onOpenChange: any;
  setAllCategories: Dispatch<SetStateAction<any>>;
};

export default function AddMeasurementModal({
  isOpen,
  onOpenChange,
  setAllCategories,
}: propsTypeD) {
  const [styleName, setStyleName] = useState("");
  const [styleNumber, setStyleNumber] = useState("");
  const [styleImage, setStyleImage] = useState<any>(null);
  const [awsStyleImage, SetAwsStyleImage] = useState<any>("");
  const { token } = useAuth();

  const handleNewStyle = () => {
    setAllCategories((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        name: styleName,
        mesurmentImage: awsStyleImage,
        // "mesurmentNumber": styleNumber,
      },
    ]);

    // Reset input values
    setStyleName("");
    setStyleNumber("");
    setStyleImage(null);
  };

  const addImageSuperadmin = async () => {
    const formdata = new FormData();
    formdata.append("superadminMeasurmentphoto", styleImage, styleImage.name);

    await axios
      .post(
        `${ENDPOINT}/api/v1/Setups/add-imagesSuperadmin_mesurment`,
        formdata,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response: any) => {
        SetAwsStyleImage(
          response?.data?.superadminMeasurmentphotos[0]
            ?.superadminMeasurmentphoto[0][0]
        );
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  useEffect(() => {
    if (!styleImage) return;
    addImageSuperadmin();
  }, [styleImage]);

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

              <div className="flex flex-col gap-5">
                <h4 className="py-4 text-center font-semibold text-xl">
                  Add New Measurement
                </h4>
                <div className="flex flex-col gap-2">
                  <label
                    className="border border-black/30 px-4 py-2 rounded-lg w-full aspect-video flex flex-col items-center justify-center"
                    htmlFor="uploadStyleImage"
                  >
                    {styleImage ? (
                      <Image
                        className=""
                        src={URL.createObjectURL(styleImage)}
                        alt="camara"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <>
                        <Image
                          src="/images/camara.svg"
                          alt="camara"
                          width={50}
                          height={50}
                        />
                        <div className="font-medium">Upload Image</div>
                      </>
                    )}
                  </label>
                  <input
                    id="uploadStyleImage"
                    className="hidden"
                    type="file"
                    onChange={(e: any) => setStyleImage(e.target.files[0])}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Measurement Name</label>
                  <input
                    className="border border-black/30 px-4 py-2 rounded-lg"
                    type="text"
                    placeholder="Measurement Name"
                    value={styleName}
                    onChange={(e) => setStyleName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Measurement Number</label>
                  <input
                    className="border border-black/30 px-4 py-2 rounded-lg"
                    type="text"
                    placeholder="Measurement Number"
                    value={styleNumber}
                    onChange={(e) => setStyleNumber(e.target.value)}
                  />
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
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
