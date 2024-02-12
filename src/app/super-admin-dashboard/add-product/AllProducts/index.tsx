"use client";

import { useAuth } from "@/context/AuthProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AllProduct from "./AllProduct";
import { ENDPOINT } from "@/network";

export type ProductsD = {
  gender: GenderD;
  _id: string;
  name: string;
  productImage: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type GenderD = {
  name: string;
  categories: CategoryD[];
};

export type CategoryD = {
  name: string;
  subcategories: SubcategoryD[];
  _id: string;
};

export type SubcategoryD = {
  name: string;
  subCatImage: string;
  subCatNumber: string;
  styles: StyleD[];
  _id: string;
};

export type StyleD = {
  catStyleName: string;
  catStyleNumber: string;
  styleImage: string;
  flag: boolean;
  _id: string;
};

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([] as ProductsD[]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const getProducts = async () => {
    await axios
      .get(`${ENDPOINT}/api/v1/Setups/superadmin_get-product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        setLoading(false);
        console.log(res?.data?.allProducts, "products");
        setAllProducts(res?.data?.allProducts);
        // toast.success("Product added successfully");
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  useEffect(() => {
    if (!token) return;
    getProducts();
  }, [token]);

  const ButtonHeading = (
    <div>
      <div>All Products</div>
    </div>
  );

  const itemClasses = {
    base: "",
    title:
      "border border-dark-pink px-7 py-2 rounded-md w-fit text-dark-pink font-medium",
    trigger: "p-0 font-normal",
    indicator: "",
    content: "p-0",
  };

  return (
    <div>
      <Accordion hideIndicator={true} itemClasses={itemClasses} className="p-0">
        <AccordionItem key="1" aria-label="Accordion 1" title={ButtonHeading}>
          <div className="border border-black/20 px-4 py-3 rounded-md mt-5 flex flex-col gap-5">
            {allProducts.map((i) => {
              return (
                <div key={i._id} className="">
                  <div className="font-semibold text-xl mb-2">
                    <span>{i.gender.name}</span>-<span>{i.name}</span>
                  </div>
                  <div className="">
                    {i.gender.categories.map((category) => {
                      return (
                        <div
                          key={i._id}
                          className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-3"
                        >
                          {category.subcategories.map((i) => {
                            return <AllProduct key={i._id} product={i} />;
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
