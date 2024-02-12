import { deleteCookie } from "cookies-next";
import { STORAGE_TOKEN } from "./constants";

export const log = (...args: any[]) => {
  return console.log(...args);
};

export const logErr = (...args: any[]) => {
  return console.error(...args);
};

// export const removeSuperadminToken = () => {
//   deleteCookie(STORAGE_TOKEN.superadminToken);
// };
