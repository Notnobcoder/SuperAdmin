"use client";

import { Button, Checkbox, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import AddMoreStyleModal from "./AddMoreStyleModal";

export default function StyleCategory({
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

  const deleteSubStyle = (id: number) => {
    const newCategories = allCategories.map((category: any) => {
      const updatedStyles = category.styles.filter(
        (style: any) => style.id !== id
      );

      // Return the category with the updated styles array
      return { ...category, styles: updatedStyles };
    });
    setAllCategories(newCategories);
  };

  const deleteStyle = (id: number) => {
    // Filter out the category with the specified id
    const updatedCategories = allCategories.filter(
      (category: any) => category.id !== id
    );

    // Update the state with the filtered array
    setAllCategories(updatedCategories);
  };

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

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="border border-black/30 rounded-lg flex flex-col gap-3 pb-5">
          <div className="flex items-center justify-between gap-2 bg-[#272727] w-full p-3 rounded-tl-md rounded-tr-md">
            <div className="flex items-center gap-4">
              <Image
                src={item.subCatImage}
                alt=""
                width={60}
                height={60}
                className="rounded-sm"
              />
              {isEditing ? (
                <input
                  className="border-none outline-none px-2 py-1 w-11/12 rounded-sm"
                  type="text"
                  value={newValue}
                  onChange={(e) => {
                    setNewValue(e.target.value);
                  }}
                />
              ) : (
                <span className="font-semibold text-dark-pink flex flex-col">
                  <span className="text-white">Style</span>
                  <span>"{item.name}"</span>
                </span>
              )}
              {/* <span className='font-medium'>{item.name}</span> */}
            </div>
            {isEditing ? (
              <div className="flex items-center gap-3">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    updateCategoryName(item.id);
                    setIsEditing(false);
                  }}
                >
                  <FaCheck className="text-white md:text-xl text-2xl" />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => deleteStyle(item.id)}
                >
                  <MdOutlineDeleteOutline className="text-red-300 text-2xl" />
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  <AiOutlineEdit className="text-white text-2xl" />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => deleteStyle(item.id)}
                >
                  <MdOutlineDeleteOutline className="text-red-300 text-2xl" />
                </span>
              </div>
            )}
          </div>
          {item.styles.length > 0 && (
            <div className="flex gap-5 items-center justify-between px-5">
              <div className="text-base text-black/90 font-semibold">
                Substyles
              </div>
              <div className="text-base text-black/80 font-semibold">
                {item.styles.length}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-5 p-5">
            {item.styles.map((i: any) => {
              return (
                <div
                  key={i.catStyleName}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <Image src={i.styleImage} alt="" width={60} height={60} />
                    <span className="text-base text-[#636363] font-medium">
                      {i.catStyleName}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="cursor-pointer"
                      onClick={() => deleteSubStyle(i.id)}
                    >
                      <MdOutlineDeleteOutline className="text-dark-pink text-xl" />
                    </span>
                    <Checkbox />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            color="primary"
            className="bg-dark-pink px-6 mx-5"
            onClick={onOpen}
          >
            Add New Substyle
          </Button>
        </div>
      </div>
      <AddMoreStyleModal
        isOpen={isOpen}
        {...{ onOpenChange, setAllCategories, subStyles: item.styles }}
        styledId={item.id}
      />
    </>
  );
}
