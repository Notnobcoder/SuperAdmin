"use client";

import { useAuth } from "@/context/AuthProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllMeasurement from "./AllMeasurement";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ENDPOINT } from "@/network";

type MeasurementsD = {
  _id: string;
  name: string;
  gender: string;
  categoriename: string;
  measurements: MeasurementD[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type MeasurementD = {
  name: string;
  mesurmentImage: string;
  _id: string;
};

export default function AllMeasurements() {
  const [allMeasurements, setAllMeasurements] = useState([] as MeasurementsD[]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const getMeasurements = async () => {
    await axios
      .get(`${ENDPOINT}/api/v1/Setups/superadmin_get-mesurment`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        setLoading(false);
        console.log(res?.data?.data, "measurements");
        setAllMeasurements(res?.data?.data);
        // toast.success("Product added successfully");
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  useEffect(() => {
    if (!token) return;
    getMeasurements();
  }, [token]);

  const ButtonHeading = (
    <div>
      <div>All Measurements</div>
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
          {allMeasurements.map((i) => {
            return (
              <div
                key={i._id}
                className="border border-black/20 px-4 py-3 rounded-md mt-5"
              >
                <div className="font-semibold text-xl mb-2">
                  <span>{i.gender}</span>-<span>{i.categoriename}</span>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-3">
                  {i.measurements.map((measurement) => {
                    return (
                      <AllMeasurement key={i._id} measurement={measurement} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
