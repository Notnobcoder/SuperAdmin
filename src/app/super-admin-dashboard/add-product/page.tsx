// @ts-nocheck
"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddStyleModal from "./AddStyleModal";
import { useAuth } from "@/context/AuthProvider";
import { logErr } from "@/utils/helper";
import { ENDPOINT } from "@/network";
import axios from "axios";
import StyleCategory from "./StyleCategory";
import { ToastContainer, toast } from "react-toastify";
import AllProducts from "./AllProducts";

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
  "Ceremonial Blazer",
  "Ceremonial Pant",
  "Ceremonial Vest",
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
  const [isNew, setIsNew] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [allStyles, setAllStyles] = useState([]);
  const [gender, setGender] = useState("Men");
  const [categoryType, setCategoryType] = useState(
    gender === "Men" ? "Suits" : "Formal Suits",
  );
  const [productNumber, setProductNumber] = useState("");
  const [productImage, setProductImage] = useState<any>(null);
  const [awsProductImage, setAwsProductImage] = useState("");
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

  const addImageSuperadmin = async () => {
    const formdata = new FormData();
    formdata.append("SuperadminProductPhoto", productImage, productImage.name);

    await axios
      .post(
        `${ENDPOINT}/api/v1/Setups/add-imagesSuperadmin_pro_sub`,
        formdata,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response: any) => {
        setAwsProductImage(
          response?.data?.superadminProductSubproduct[0]
            ?.SuperadminProductPhoto[0][0],
        );
      })
      .catch((err: any) => {
        logErr({ err: err });
      });
  };
  const addProductSuperadminSubmit = async () => {
    const data = {
      name: `${gender} ${categoryType} Section`,
      productImage: awsProductImage,
      productNumber,
      gender: {
        name: gender,
        categories: [
          {
            name: categoryType,
            subcategories: allStyles,
          },
        ],
      },
    };

    await axios
      .post(`${ENDPOINT}/api/v1/Setups/superadmin_add-product`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        setAllCategories([]);
        setAllStyles([]);
        setProductImage(null);
        setAwsProductImage("");
        setProductNumber("");
        setGender("Men");
        setLoading(false);
        toast.success("Product added successfully");
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  useEffect(() => {
    if (!productImage) return;
    addImageSuperadmin();
  }, [productImage]);

  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <h4 className="font-semibold text-2xl md:mb-7">Add Your Own Product</h4>
      <div>
        <AllProducts />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Product ID*</label>
            <input
              className="border border-black/30 px-4 py-2 rounded-lg"
              type="text"
              placeholder="Product ID"
              value={productNumber}
              onChange={(e) => setProductNumber(e.target.value)}
            />
          </div>
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
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Product Image*</div>
          <label
            className="border border-black/30 px-4 py-2 rounded-lg w-full aspect-video  flex items-center justify-center"
            htmlFor="uploadProductImage"
          >
            {productImage ? (
              <Image
                className=""
                src={URL.createObjectURL(productImage)}
                alt="camara"
                width={150}
                height={150}
              />
            ) : (
              <Image
                src="/images/camara.svg"
                alt="camara"
                width={50}
                height={50}
              />
            )}
          </label>
          <input
            id="uploadProductImage"
            className="hidden"
            type="file"
            onChange={(e: any) => setProductImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col gap-5"></div>
      </div>
      <div className="font-semibold">Style Details</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {allCategories.length > 0 &&
          allCategories.map((i: any, indx) => {
            return (
              <StyleCategory
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
              // setIsNew(true);
            }}
          >
            Add New Style
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
      <AddStyleModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        {...{ isNew, setAllCategories, setIsNew }}
      />
      <ToastContainer />
    </div>
  );
}
