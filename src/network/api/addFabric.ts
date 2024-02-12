import { post } from "..";

export const sendPromoCodeApi = async ({ token }: { token: string }) => {
  return post({
    route: "/api/v1/fabric/addFabric",
    data: JSON.stringify(""),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    },
  });
};
