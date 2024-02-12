"use client";

import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineDateRange } from "react-icons/md";
import styled from "styled-components";
// import EditStatusModal from "./EditStatusModal";
import Link from "next/link";
import { log, logErr } from "@/utils/helper";
import { getStoresApi } from "@/network/api/superadmin";
import { useAuth } from "@/context/AuthProvider";
import { GetStoresD } from "@/types/superadmin";
// import AlertModal from "./AlertModal";
import { AiOutlineEdit } from "react-icons/ai";
import EditModal from "./EditModal";
import ConfirmModal from "./(components)/ConfirmModal";
import { ImSpinner2, ImSpinner8 } from "react-icons/im";
import { CircularProgress, Spinner, useDisclosure } from "@nextui-org/react";
import Loader from "@/components/Loader";

export default function Table() {
  const [edit, setEdit] = useState(false);
  const { token } = useAuth();
  const [data, setData] = useState([] as GetStoresD[]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log("<superadmin>");

  const getStores = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const res = await getStoresApi({
        token,
      });
      log(res, "response");
      setLoading(false);
      setData(res?.data);
    } catch (error) {
      logErr(error, "ERROR");
      setLoading(false);
    }
  };

  useEffect(() => {
    getStores();
  }, [token]);

  return (
    <div className="">
      <h4 className="mb-5 text-[#333333] font-medium text-xl">
        All Store List
      </h4>
      {/* ========================== TABLE ============================= */}

      <TableWrapper className="overflow-x-auto rounded-xl border border-[#cccccc7f] min-h-[200px] relative">
        <table className="w-full border-collapse rounded-xl border-spacing-0 ">
          <thead>
            <tr className="bg-black text-white ">
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Store Number
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Name
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Email
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Mobile Number
              </th>
              <th className="text-center whitespace-pre font-medium text-sm py-4 px-5">
                Store Type
              </th>
              <th className="text-center whitespace-pre font-medium text-sm py-4 px-5">
                Edit
              </th>
              <th className="text-center whitespace-pre font-medium text-sm py-4 px-5">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => {
              return (
                <tr
                  key={i?._id}
                  className={`text-[#4d4d4d] ${index % 2 === 0
                    ? "bg-[#f1f1f1] border-t border-b border-[#cccccc7f]"
                    : "bg-[#ffffff]"
                    } ${data[index]._id === data[data.length - 1]._id
                      ? "border-b-transparent"
                      : ""
                    }`}
                >
                  <Link className="w-full" href="/dashboard/order/edit">
                    <td className="text-sm py-4 px-5">{i?.storeNumber}</td>
                  </Link>
                  <td className="text-sm py-4 px-5">{i?.name}</td>
                  <td className="text-sm py-4 px-5">{i?.email}</td>
                  <td className="text-sm py-4 px-5">{i?.mobileNumber}</td>
                  <td className="text-center whitespace-pre cursor-pointer">
                    {i?.storeType}
                  </td>
                  <td className="text-sm py-4 px-5">
                    <div className="m-auto" onClick={() => setEdit(true)}>
                      <AiOutlineEdit className="text-dark-pink text-xl cursor-pointer m-auto" />
                    </div>
                  </td>
                  <td className="text-sm py-4 px-5">
                    <div
                      className="w-7 h-7 flex items-center justify-center bg-white rounded-full delete-shadow m-auto"
                      onClick={onOpen}
                    >
                      <MdDeleteOutline className="text-dark-pink text-xl cursor-pointer m-auto" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Loader loading={loading} />
      </TableWrapper>

      {/* {editStatus && <EditStatusModal onClose={() => setEditStatus(false)} />} */}
      {/* <AlertModal onClose={() => setEditStatus(false)} /> */}
      <ConfirmModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Delete Store"
        text="Are you sure to delete Store?"
      />
      {edit && <EditModal onClose={() => setEdit(false)} />}
    </div>
  );
}

const TableWrapper = styled.div`
  .delete-shadow {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;
