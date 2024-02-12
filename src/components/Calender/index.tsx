// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import styled from "styled-components";

export const Calender = ({
  onClick,
  margin = "center",
}: {
  onClick?: () => void;
  margin?: string;
}) => {
  const [date, setDate] = useState(new Date());
  // useEffect(() => {
  //   let aa = document.querySelectorAll(".react-calendar__tile");
  //   Array.from(aa).map((i) => {
  //     console.log(i, "pppp");
  //   });
  // }, []);

  return (
    <Root className="h-[100%]" margin={margin}>
      <Calendar
        onChange={() => {
          // setDate();
          onClick();
        }}
        value={date}
      />
    </Root>
  );
};

const Root = styled.div<any>`
  .react-calendar {
    padding: 18px;
    border-radius: 8px;
    border: 1px solid rgb(226 232 240);
    background: #fff;
    box-shadow: 0px 1px 44px 0px rgba(255, 98, 98, 0.1);
    font-family: Manrope;
    width: 100%;
  }
  .react-calendar__month-view__weekdays__weekday * {
    text-decoration: none;
  }
  .react-calendar__tile {
    font-weight: 600;
    font-family: Manrope;
    border-radius: 4px;
  }
  .react-calendar__navigation {
    width: fit-content;
    background-color: #ffe6fb;
    font-weight: 600;
    border-radius: 4px;
    margin-left: ${(props) => props.margin};
    height: 34px;
  }
  .react-calendar__navigation__arrow {
    font-size: 24px;
    line-height: 150%;
    min-width: 32px;
  }
  .react-calendar__navigation button {
    min-width: auto;
    flex-grow: initial !important;
    padding: 0 4px;
  }
  .react-calendar__navigation__label__labelText {
    font-size: 14px;
    font-weight: 600;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__tile--active {
    color: #fff;
    background-color: #f603cf;
    border-radius: 100px;
    padding: 5px 6.6667px;
    height: 30px;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #e207be;
  }
`;
