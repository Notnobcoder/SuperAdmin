// imports
import React from "react";
// types
type buttonProp = {
  placeholder: string;
  onClick?: () => void;
  type?: any;
};

export const Button: React.FC<buttonProp> = ({
  placeholder,
  onClick,
  type,
}) => {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className="bg-[#F603D0] w-[18.4375rem] h-14 font-medium rounded-[0.9375rem] text-white px-[2rem] shadow-[0_35px_60px_-15px_rgba(246,3,208,0.30)]"
        type={type}
      >
        {placeholder}
      </button>
    </React.Fragment>
  );
};

type blackButtonProp = {
  placeholder: string;
  onClick?: () => void;
};

export const BlackButton: React.FC<blackButtonProp> = ({
  placeholder,
  onClick,
}) => {
  return (
    <React.Fragment>
      <button
        className="bg-[#D9D9D9] py-12 h-16 px-[3rem] rounded-[0.75rem] hover:bg-[#F603D0] hover:text-white"
        onClick={onClick}
      >
        {placeholder}
      </button>
    </React.Fragment>
  );
};
