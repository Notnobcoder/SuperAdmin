import React, { useState } from "react";
import { MeasurementD } from ".";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function AllMeasurement({
  measurement,
}: {
  measurement: MeasurementD;
}) {
  const { name, mesurmentImage } = measurement;
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(name);

  return (
    <div className="flex flex-col gap-2">
      <div className="border border-black/10 px-4 py-3 rounded-lg flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Image src={mesurmentImage} alt="" width={60} height={60} />
            {isEditing ? (
              <input
                className="border-b border-black/20 outline-none w-11/12"
                type="text"
                value={newValue}
                onChange={(e) => {
                  setNewValue(e.target.value);
                }}
              />
            ) : (
              <span className="font-medium">{name}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isEditing ? (
              <span
                className="cursor-pointer"
                onClick={() => {
                  //   updateCategoryName(item.id);
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
                // onClick={() => deleteMeasurement(item.id)}
              >
                <MdOutlineDeleteOutline className="text-dark-pink text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
