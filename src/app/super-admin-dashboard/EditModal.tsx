"use client";

import { Modal } from "@/components";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function EditModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal classes="md:min-w-[550px]">
      <h5 className="text-lg font-medium mb-5">Edit</h5>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Store Number</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Store Number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Store Name</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Store Name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Store Type</label>
          <select className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none">
            {/* <option className="" value="">
              Select your Store Type
            </option> */}
            <option value="">Fabric</option>
            <option value="">Designer</option>
            <option value="">Accessories</option>
            <option value="">Factory</option>s
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Email Address</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="email"
            placeholder="demo@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Mobile Number</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="+91 1234567890"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Password</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Password"
          />
        </div>

        <div className="flex gap-3 justify-center items-center">
          <button className="border border-dark-pink bg-dark-pink text-white px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm">
            Save
          </button>
          <button
            className="bg-white text-dark-pink border border-dark-pink font-medium px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
