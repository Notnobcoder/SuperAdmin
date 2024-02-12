import { get, post } from "..";

export const getStoresApi = async ({ token }: { token: string }) => {
  return get({
    route: "/api/v1/auth/superadmin_getstores",
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    },
  });
};

// export const addImageSuperadminApi = async (
//   raw: { SuperadminProductPhoto?: string; SuperadminSubproductPhoto?: string; SuperadminStylePhoto?: string; },
//   { token }: { token: string },
// ) => {
//   const formdata = new FormData();
//   formdata.append("SuperadminProductPhoto", SuperadminProductPhoto);
//     formdata.append("SuperadminSubproductPhoto", SuperadminSubproductPhoto);
//     formdata.append("SuperadminStylePhoto", SuperadminStylePhoto);

//   return post({
//     route: "/api/v1/Setups/add-imagesSuperadmin_pro_sub",
//     data: JSON.stringify(raw),
//     config: {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-type": "application/json",
//       },
//     },
//   });
// };
