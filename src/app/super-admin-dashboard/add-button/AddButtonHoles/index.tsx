"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function AddButtonHoles({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <Root className="border border-[#e0e0e0] rounded-3xl bg-white flex justify-center items-center w-72 h-72 p-4">
      <div className="flex flex-col items-center justify-between gap-5 h-full w-full pt-14">
        <div>
          <Image
            className="w-auto h-12"
            src="/images/buttons/add-button-holes.svg"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <h6 className="font-semibold">Add Button Holes</h6>
        <div className="w-full">
          <Button
            color="primary"
            className="bg-dark-pink text-white w-full font-semibold"
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
`;
