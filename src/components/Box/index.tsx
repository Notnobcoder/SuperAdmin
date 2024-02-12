import { Menu2Icon, boxImage } from "@/imageLinks";
import Image from "next/image";
import React from "react";

export const BoxComponent: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between border-[1.5px] rounded-[8px] my-[1.25rem]">
        <div className="px-[1rem] py-[1.13rem]">
          <div className="flex">
            <Image src={Menu2Icon} alt="logo image" width={20} height={40} />
            <h4 className="">Total Sales</h4>
          </div>
          <div className="flex">
            <Image src={Menu2Icon} alt="logo image" width={20} height={40} />
            <h4 className="text-[1.5rem] font-bold">20, 000</h4>
          </div>
          <div className="flex">
            <h4 className="text-[#009f10]">1.7 %</h4>
            <h4>Vs Last Month </h4>
          </div>
        </div>
        <div>
          <Image src={boxImage} alt="boxImage" width={52} height={133} />
        </div>
      </div>
    </React.Fragment>
  );
};
