"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { STORAGE_TOKEN } from "@/utils/constants";
import { log } from "@/utils/helper";
import { UserDetailsD } from "@/types";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

type AuthContextD = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  userDetails: UserDetailsD;
  setUserDetails: Dispatch<SetStateAction<UserDetailsD>>;
  Logout: () => void;
};

const MyContext = createContext({} as AuthContextD);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [userDetails, setUserDetails] = useState({} as UserDetailsD);

  const router = useRouter();

  useEffect(() => {
    const super_admin_token = getCookie(STORAGE_TOKEN.superadminToken);

    if (typeof window !== undefined) {
      if (super_admin_token) {
        setToken(super_admin_token || "");
      }
    }
  }, []);

  const Logout = () => {
    deleteCookie(STORAGE_TOKEN.superadminToken);
    router.push("/login");
  };

  return (
    <MyContext.Provider
      value={{ token, setToken, userDetails, setUserDetails, Logout }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
