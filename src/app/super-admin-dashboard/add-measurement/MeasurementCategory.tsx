"use client";

import { Button, Checkbox, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import AddMoreMeasurementModal from "./AddMoreMeasurementModal";

export default function MeasurementCategory({
  item,
  setAllCategories,
  allCategories,
}: {
  item: any;
  setAllCategories: any;
  allCategories: any;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(item.name);

  const updateCategoryName = (id: number) => {
    const updatedCategories = allCategories.map((category: any) => {
      if (category.id === id) {
        // Update the name of the specific category
        return { ...category, name: newValue };
      }
      return category;
    });

    setAllCategories(updatedCategories);
  };

  const deleteMeasurement = (id: number) => {
    // Filter out the category with the specified id
    const updatedCategories = allCategories.filter(
      (category: any) => category.id !== id,
    );

    // Update the state with the filtered array
    setAllCategories(updatedCategories);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="border border-black/30 p-5 rounded-lg flex flex-col gap-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <Image src={item.mesurmentImage} alt="" width={60} height={60} />
              {isEditing ? (
                <input
                  className="border-none outline-none"
                  type="text"
                  value={newValue}
                  onChange={(e) => {
                    setNewValue(e.target.value);
                  }}
                />
              ) : (
                <span className="font-medium">{item.name}</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {isEditing ? (
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    updateCategoryName(item.id);
                    setIsEditing(false);
                  }}
                >
                  <FaCheck className="text-dark-pink text-xl" />
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  <AiOutlineEdit className="text-dark-pink text-2xl" />
                </span>
              )}
              <div className="flex items-center gap-4">
                <span
                  className="cursor-pointer"
                  onClick={() => deleteMeasurement(item.id)}
                >
                  <MdOutlineDeleteOutline className="text-dark-pink text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
