"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddMeasurementModal from "./AddMeasurementModal";
import { useAuth } from "@/context/AuthProvider";
import { ENDPOINT } from "@/network";
import axios from "axios";
import MeasurementCategory from "./MeasurementCategory";
import { ToastContainer, toast } from "react-toastify";
import AllMeasurements from "./AllMeasurements";

const MaleCategories = [
  "Suits",
  "Tuxedo",
  "Blazers",
  "Vest",
  "Shirt",
  "Pant",
  "Ceremonial Suits",
  "Ceremonial Tuxedo",
  "Ceremonial Shirt",
  "Sherwani Set",
  "Nehru Jacket",
  "Kurtas Set",
  "T-Shirt",
  "Casual Shirt",
  "Polo Shirt",
  "Trousers",
  "Casual Pants",
  "Jeans",
  "Sweatshirt",
  "Joggers",
  "Shots",
];
const FemaleCategories = [
  "Formal Suits",
  "Tuxedo",
  "Blazer",
  "Suits(Kurtis)",
  "Shirt",
  "Formal Blouses",
  "Formal Skirt",
  "Formal Pants",
  "Ceremonial Suits",
  "Sarees",
  "Anarkali Suit",
  "Lehenga",
  "Blouse",
  "Gown",
  "Pants",
  "Skirt",
  "Casual Shirt",
  "Top",
  "Dress",
  "Sweatshirt",
  "Abaya",
  "Casual Pants",
  "Trouser",
  "Jeans",
  "Casual Skirt",
  "Shots",
];

export default function page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allCategories, setAllCategories] = useState([]);
  const [allStyles, setAllStyles] = useState([]);
  const [gender, setGender] = useState("Men");
  const [categoryType, setCategoryType] = useState(
    gender === "Men" ? "Suits" : "Formal Suits"
  );
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
    const newArray = deepRemoveId(allCategories);
    setAllStyles(newArray);
  }, [allCategories]);

  console.log(allStyles, "allStyles");

  const addProductSuperadminSubmit = async () => {
    const data = {
      name: `${gender}-${categoryType}`,
      gender: gender,
      categoriename: categoryType,
      measurements: allStyles,
    };

    await axios
      .post(`${ENDPOINT}/api/v1/Setups/superadmin_add-mesurment`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        setAllCategories([]);
        setAllStyles([]);
        setGender("Men");
        setLoading(false);
        toast.success("Product added successfully");
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <h4 className="font-semibold text-2xl">Add Measurement</h4>
      <div>
        <AllMeasurements />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Gender*</label>
            <select
              className="border border-black/30 px-4 py-2 rounded-lg"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Select category</label>
            <select
              className="border border-black/30 px-4 py-2 rounded-lg"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
            >
              {gender === "Men"
                ? MaleCategories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))
                : FemaleCategories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
            </select>
          </div>
        </div>
      </div>
      <div className="font-semibold">Measurement Details</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {allCategories.length > 0 &&
          allCategories.map((i: any, indx) => {
            return (
              <MeasurementCategory
                key={indx}
                {...{ item: i, setAllCategories, allCategories }}
              />
            );
          })}

        <div className="md:mt-4">
          <Button
            color="primary"
            startContent={<FaPlus />}
            className="bg-dark-pink px-12 h-10"
            onClick={() => {
              onOpen();
            }}
          >
            Add New Measurement
          </Button>
        </div>
      </div>
      <div className="ml-auto">
        <Button
          color="primary"
          className="bg-dark-pink px-12 h-12 font-semibold"
          onClick={addProductSuperadminSubmit}
          isLoading={loading}
        >
          Submit
        </Button>
      </div>
      <AddMeasurementModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        {...{ setAllCategories }}
      />
      <ToastContainer />
    </div>
  );
}
