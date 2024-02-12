// imports
import Image from "next/image";
import React from "react";

// types
type dropdownProp = {
  name?: string;
  logo: string;
  alt: string;
  array: string[];
  onChange?: (e: any) => void;
  value?: string;
};

export const Dropdown: React.FC<dropdownProp> = ({
  logo,
  alt,
  onChange,
  value,
}) => {
  return (
    <React.Fragment>
      {" "}
      <div className="flex items-center border-[2px] border-[#D9D9D9] my-[0.5rem] w-[18.875rem] justify-between p-[0.81rem] rounded-[0.5rem] hover:border-[#f603cf]">
        <select
          name="role"
          className=" appearance-none w-[19rem] bg-white rounded-[0.5rem]"
          required
          onChange={onChange}
          value={value}
        >
          <option value="superadmin">Super Admin</option>
          <option value="fabric">Fabric</option>
          <option value="designer">Designer</option>
        </select>
        <Image src={logo} alt={alt} width={11.54} height={7.451} />
      </div>
    </React.Fragment>
  );
};
