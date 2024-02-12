"use client";

// imports
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// imports from components
import { Inputs } from "@/components/Inputs";
import { Icons, LogoImage } from "@/imageLinks";
// import { Button } from "@/components/Button";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import { log, logErr } from "@/utils/helper";
import { ROLE, STORAGE_TOKEN, STORE_TYPE } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { ImSpinner8 } from "react-icons/im";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { setCookie } from "cookies-next";
import { ENDPOINT } from "@/network";
import { FaCaretDown } from "react-icons/fa6";

// sample values

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { setToken } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: ROLE.superadmin,
      storeType: STORE_TYPE.owner,
    },

    // validataion step
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      await axios
        .post(`${ENDPOINT}/api/v1/auth/login`, {
          ...values,
          role: ROLE.superadmin,
        })
        .then((response) => {
          log(response, "response");
          setToken(response?.data?.token);
          const expires = new Date();
          expires.setFullYear(expires.getFullYear() + 5);
          setCookie(STORAGE_TOKEN.superadminToken, response?.data?.token, {
            expires,
          });
          router.push("/super-admin-dashboard");
          setLoading(false);
        })
        .catch((err) => {
          logErr(err, "error");
          setLoading(false);
          setError(err?.response.data.message);
        });
    },
  });

  const onChange = (e: any) => {
    setError("");
    formik.handleChange(e);
  };

  return (
    <React.Fragment>
      <div className="flex items-center h-[100vh] gap-7 lg:gap-[9.75rem] back lg:px-[10rem] px-[1rem]">
        <div className="text-center md:min-w-[300px] flex-1 hidden md:block">
          <h3 className="text-[4.25rem] capitalize">Super Admin</h3>
          <h6 className="text-[2.25rem] text-[#F603CF]">Welcome Back</h6>
        </div>{" "}
        <div className="flex-1 px-1 lg:px-[4.62rem] bg-white py-[5.56rem] border-[2px] border-[#D9D9D9] rounded-[2rem] max-w-2xl">
          <form
            className=" flex flex-col items-center max-w-xs m-auto"
            onSubmit={formik.handleSubmit}
          >
            <Image
              src={LogoImage}
              width={166}
              height={54}
              alt="logoImage"
              className="lg:pb-[3.19rem] pb-[1.19rem]"
            />
            <div className="flex flex-col items-center md:hidden">
              <h4>Super admin</h4>
              <p>Welcome Back</p>
            </div>
            <h3 className="text-[1.5rem] lining-[1.5rem] pb-[2.12rem] lg:pb-[3.12rem]">
              Sign In Now
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex w-full items-center border-[2px] border-[#D9D9D9] p-[0.81rem] rounded-[0.5rem] hover:border-[#f603cf]">
                <select
                  name="storeType"
                  className=" appearance-none w-[19rem] bg-white rounded-[0.5rem]"
                  required
                  onChange={(e) => onChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.storeType}
                >
                  <option value="Owner">Super Admin</option>
                </select>
                <FaCaretDown className="text-dark-pink" />
              </div>

              <Inputs
                placeholder="Enter Email"
                icon={<IoIosMail />}
                type="email"
                onChange={(e) => onChange(e)}
                value={formik.values.email}
                name="email"
              />
              {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
              <div className="flex flex-col w-full">
                <Inputs
                  placeholder="Enter Password"
                  icon={showPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  onClick={() => setShowPass(!showPass)}
                  type={showPass ? "text" : "password"}
                  onChange={(e) => onChange(e)}
                  name="password"
                  value={formik.values.password}
                />
                <div className="mb-5 mt-1">
                  <p className="text-[#EE03C9] text-[0.75rem] text-end">
                    Forgot Password ?
                  </p>
                  {error && (
                    <div className="text-red-500 text-center text-sm my-1 first-letter:capitalize">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <Button placeholder="Sign In" type="submit" /> */}
            <Button
              type="submit"
              isLoading={loading}
              spinner={
                <div className="animate-spin">
                  <ImSpinner8 className="text-xl" />
                </div>
              }
              className="bg-[#F603D0] text-base outline-none w-full font-medium rounded-[0.9375rem] text-white px-[2rem] py-6 shadow-[0_35px_60px_-15px_rgba(246,3,208,0.30)]"
            >
              Sign in
            </Button>
            <div className="text-center">
              <p className="text-[0.75rem] pb-[1.87rem] pt-[0.44rem]">
                Don’t have an account?{" "}
                <span className="text-[#EE03C9] font-bold">Sign Up Now</span>
              </p>
              <p className="text-[0.75rem]">
                By creating an account or logging in, you agree to <br />{" "}
                LOVOJ’s
                <span className="text-[#EE03C9]"> Privacy Policy.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
