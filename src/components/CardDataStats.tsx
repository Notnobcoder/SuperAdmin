// @ts-nocheck
import { LogoImage, Menu2Icon, boxImage } from "@/imageLinks";
import Image from "next/image";
import React from "react";

interface CardDataStatsProps {
  heading: string;
  icon: string;
  title?: string;
  alt: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  heading,
  value,
  icon,
}) => {
  return (
    <React.Fragment>
      <div className="flex bg-white items-center justify-between border-[1.5px] border-[#F5F5F5] rounded-[8px] ">
        <div className="px-[1rem] py-[1.13rem]">
          <div className="flex">
            <h4 className="">{heading}</h4>
          </div>
          <div className="flex">
            <h4 className="text-[1.5rem] font-bold">{value}</h4>
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

export default CardDataStats;
