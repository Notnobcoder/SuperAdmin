"use client";

import React from "react";
import styled from "styled-components";

export default function Modal({
  children,
  classes = "min-w-[350px]",
}: {
  children: React.ReactNode;
  classes?: string;
}) {
  return (
    <Root>
      <PopupContent
        className={`p-7 rounded-xl md:min-w-[350px] min-w-[92%] relative ${classes}`}
      >
        {children}
      </PopupContent>
    </Root>
  );
}

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PopupContent = styled.div`
  background-color: #fff;
  border: 2px solid #fff;
  position: relative;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.15);
  z-index: 99;
`;
