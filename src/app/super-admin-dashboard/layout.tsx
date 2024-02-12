"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import Loader from "@/containers/loader";
import { LogoImage } from "@/imageLinks";
import { useLayoutEffect, useState } from "react";
import Navbar from "./(components)/Navbar";
import { FaPlus } from "react-icons/fa6";
import {
  DashboardSvg,
  DiscountSvg,
  DropdownsSvg,
  LogoutSvg,
  SettingSvg,
  StoreListSvg,
} from "@/assets/svgComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoadin] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  let dashbaordValues = [
    {
      path: "/super-admin-dashboard",
      svg: <StoreListSvg />,
      value: "Store List",
    },
    {
      path: "/super-admin-dashboard/dashboard",
      svg: <DashboardSvg />,
      value: "Dashboard",
    },
    {
      path: "/super-admin-dashboard/manage-dropdowns",
      svg: <DropdownsSvg />,
      value: "Manage Dropdowns",
    },
    {
      path: "/super-admin-dashboard/store-discount",
      svg: <DiscountSvg />,
      value: "Store Discount",
    },
    {
      path: "/super-admin-dashboard",
      svg: <SettingSvg />,
      value: "Quick Order Setup",
    },
    // {
    //   path: "/super-admin-dashboard/add-product",
    //   svg: <FaPlus />,
    //   value: "Add Product",
    // },
    // {
    //   path: "/super-admin-dashboard/add-measurement",
    //   svg: <FaPlus />,
    //   value: "Add Measurement",
    // },
    // {
    //   path: "/super-admin-dashboard/add-button",
    //   svg: <FaPlus />,
    //   value: "Button Setup",
    // },
    {
      path: "/super-admin-dashboard/settings",
      svg: <SettingSvg />,
      value: "Settings",
    },
    { path: "", svg: <LogoutSvg />, value: "Logout" },
  ];

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <div className="max-lg:hidden">
            <Sidebar
              {...{
                dashbaordValues,
                open: desktopOpen,
                setOpen: setDesktopOpen,
              }}
            />
          </div>
          <div className="lg:hidden">
            <Sidebar
              {...{
                dashbaordValues,
                open: mobileOpen,
                setOpen: setMobileOpen,
              }}
            />
          </div>
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto">
            {/* <!-- ===== Header Start ===== --> */}
            {/* <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                /> */}

            <div className="max-lg:hidden">
              <Navbar {...{ open: desktopOpen, setOpen: setDesktopOpen }} />
            </div>
            <div className="lg:hidden">
              <Navbar {...{ open: mobileOpen, setOpen: setMobileOpen }} />
            </div>

            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="">
              <div className="mx-auto max-w-screen-3xl px-4 md:px-6 2xl:px-10 pb-4 md:pb-6 2xl:pb-1 md:mt-8 mt-4">
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      )}
    </div>
  );
}
