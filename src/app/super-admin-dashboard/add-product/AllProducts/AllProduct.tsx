import React, { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CategoryD, ProductsD, StyleD, SubcategoryD } from ".";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";

export default function AllProduct({ product }: { product: SubcategoryD }) {
  const { styles, subCatImage, name } = product;
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(name);
  const [isDisable, setIsDisable] = useState(false);

  const ButtonHeading = (
    <div
      className="flex items-center justify-between gap-2"
      // onClick={() => setIsDisable(true)}
    >
      <div className="flex items-center gap-4 h-16">
        <div className="w-16 h-full">
          <Image
            // src={subCatImage}
            src={
              subCatImage.startsWith("https") ? subCatImage : `/${subCatImage}`
            }
            alt=""
            className="w-auto h-full object-scale-down"
            width={60}
            height={60}
          />
        </div>
        <div className="flex-1">
          {isEditing ? (
            <input
              className="border-b border-black/20 outline-none w-full"
              type="text"
              value={newValue}
              onChange={(e) => {
                setNewValue(e.target.value);
              }}
            />
          ) : (
            <span className="font-medium inline-block w-full">{name}</span>
          )}
        </div>
      </div>
      <div>
        <div
          className="flex items-center gap-3"
          // onClick={() => setIsDisable(false)}
        >
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
  );

  const itemClasses = {
    base: "",
    title: "",
    trigger: "p-0 font-normal",
    indicator: "",
    content: "",
  };

  return (
    <div className="">
      <div className="border border-black/10 px-4 py-3 rounded-lg flex flex-col gap-5">
        <Accordion hideIndicator={true} itemClasses={itemClasses}>
          <AccordionItem key="1" aria-label="Accordion 1" title={ButtonHeading}>
            <div className="flex flex-col gap-5 px-2 mt-3">
              <h5 className="text-lg font-medium border-b border-t border-black/30 border-dashed text-center text-dark-pink">
                Styles
              </h5>
              {styles.map((i: any) => {
                return (
                  <div
                    key={i.catStyleName}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={
                          i.styleImage.startsWith("https")
                            ? i.styleImage
                            : `/${i.styleImage}`
                        }
                        alt=""
                        width={60}
                        height={60}
                      />
                      <span className="font-medium">{i.catStyleName}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className="cursor-pointer"
                        // onClick={() => deleteStyle(i.id)}
                      >
                        <MdOutlineDeleteOutline className="text-dark-pink text-xl" />
                      </span>
                      <Checkbox />
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
