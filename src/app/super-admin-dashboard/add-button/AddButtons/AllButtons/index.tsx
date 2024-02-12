"use client";

import React, { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard";
import { Button, useDisclosure } from "@nextui-org/react";
import AddButtonModal from "./AddButtonModal";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { ENDPOINT } from "@/network";

export type AllButtonsD = {
  id: number;
  name: string;
  buttonImage: string;
};

export default function AllButtons() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allButtons, setAllButtons] = useState([] as AllButtonsD[]);
  const [allButtonsWithoutId, setAllButtonsWithoutId] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const deepRemoveId: any = (obj: any) => {
    if (Array.isArray(obj)) {
      return obj.map(deepRemoveId);
    } else if (obj && typeof obj === "object") {
      const { id, ...rest } = obj;
      for (const key in rest) {
        rest[key] = deepRemoveId(rest[key]);
      }
      return rest;
    }
    return obj;
  };

  useEffect(() => {
    const newArray = deepRemoveId(allButtons);
    setAllButtonsWithoutId(newArray);
  }, [allButtons]);

  console.log(allButtonsWithoutId, "allButtons");

  const addButton = async () => {
    const data = {
      name: "Example Superadmin Button",
      Buttons: allButtonsWithoutId,
    };

    await axios
      .post(`${ENDPOINT}/api/v1/Setups/superadmin_add-button`, data, {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res: any) => {
        console.log(res, "res");
        setAllButtons([]);
        setAllButtonsWithoutId([]);
        setLoading(false);
        toast.success("Buttons added successfully");
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  return (
    <div>
      <h5 className="text-xl font-medium">Buttons</h5>
      <div className="flex flex-wrap gap-5 items-center mt-5">
        {allButtons.map((button) => {
          return (
            <ButtonCard
              key={button.id}
              item={button}
              setAllButtons={setAllButtons}
            />
          );
        })}
      </div>
      <div className="w-fit">
        <div className="flex flex-col items-center">
          <div className="mt-5 max-md:px-5">
            <Button
              color="primary"
              className="bg-dark-pink px-12 text-white max-md:w-full"
              onClick={onOpen}
            >
              Add New Button
            </Button>
          </div>
          <div className="mt-5 max-md:px-5">
            <Button
              color="primary"
              className="bg-dark-pink px-12 text-white max-md:w-full"
              onClick={addButton}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <AddButtonModal {...{ isOpen, onOpenChange, setAllButtons }} />
      <ToastContainer />
    </div>
  );
}
