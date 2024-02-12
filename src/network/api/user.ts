import { string } from "yup";
import { get, post } from "..";

export const getWorkersApi = async ({ token }: { token: string }) => {
  return get({
    route: "/api/v1/worker/workers",
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    },
  });
};

export const workerSignUpApi = async (
  raw: { name: string; email: string; password: string; role: string },
  { token }: { token: string },
) => {
  return post({
    route: "/api/v1/worker/signup",
    data: JSON.stringify(raw),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    },
  });
};
