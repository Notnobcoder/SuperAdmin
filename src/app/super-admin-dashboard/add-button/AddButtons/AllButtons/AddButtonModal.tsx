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
  const [buttonImage, setButtonImage] = useState<any>(null);
  const [awsButtonImage, setAwsButtonImage] = useState("");
  const { token } = useAuth();
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleNewStyle = () => {
    setAllButtons((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        name: buttonName,
        buttonImage: awsButtonImage,
      },
    ]);

    // Reset input values
    setButtonName("");
    setButtonImage(null);
    setAwsButtonImage("");
    setLoadingProgress(0);
  };

  const addButtonImage = async () => {
    const formdata = new FormData();
    formdata.append("superadminButtonPthoto", buttonImage, buttonImage.name);

    await axios
      .post(`${ENDPOINT}/api/v1/Setups/add-ButtonImages_superadmin`, formdata, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent: any) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setLoadingProgress(Number(progress.toFixed(0)));
        },
      })
      .then((response: any) => {
        setAwsButtonImage(
          response?.data?.superadminadminButtons[0]
            ?.superadminButtonPthoto[0][0]
        );
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  useEffect(() => {
    if (!buttonImage) return;
    addButtonImage();
  }, [buttonImage]);

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

              <div className="flex flex-col gap-5 pt-2">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold">Button Image</h4>
                  <div className="relative">
                    {awsButtonImage && (
                      <div
                        className="absolute right-1 top-1 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer z-10"
                        onClick={() => {
                          setButtonImage(null);
                          setAwsButtonImage("");
                          setLoadingProgress(0);
                        }}
                      >
                        <IoClose className="text-lg" />
                      </div>
                    )}

                    <label
                      className="border border-black/30 px-4 py-2 rounded-lg w-full aspect-video flex flex-col items-center justify-center"
                      htmlFor="uploadStyleImage"
                    >
                      {awsButtonImage ? (
                        <div className="relative">
                          <Image
                            className="w-auto h-full p-2 relative z-[2] max-h-[150px]"
                            // src={awsButtonImage}
                            src={URL.createObjectURL(buttonImage)}
                            alt=""
                            width={150}
                            height={150}
                          />

                          {/* <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] font-medium text-black/80">
                          Loading...
                        </span> */}
                        </div>
                      ) : (
                        <>
                          {buttonImage ? (
                            <CircularProgressbar
                              value={loadingProgress}
                              text={`${loadingProgress}%`}
                              strokeWidth={8}
                              className="w-16 h-16"
                              styles={buildStyles({
                                textSize: "25px",
                                textColor: "#F603D0",
                                pathColor: "#3C50E0",
                              })}
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
                        </>
                      )}
                    </label>
                  </div>
                  <input
                    id="uploadStyleImage"
                    className="hidden"
                    type="file"
                    onChange={(e: any) => setButtonImage(e.target.files[0])}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Button Name</label>
                  <input
                    className="border border-black/30 px-4 py-2 rounded-lg"
                    type="text"
                    placeholder="Button Name"
                    value={buttonName}
                    onChange={(e) => setButtonName(e.target.value)}
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
