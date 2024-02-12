import { get, post } from "..";

export const subscribeApi = async ({ email }: { email: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify({ email }),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const contactApi = async (raw: { name: string; email: string; message: string; intrested_in: string; project_budget: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const sendResetEmailApi = async ({ email }: { email: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify({ email }),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const resetPasswordApi = async (raw: { password: string; hash: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const TermsApi = async () => {
  return get({
    route: "/api/v1/",
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const PrivacyApi = async () => {
  return get({
    route: "/api/v1/",
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const getPostDetailsBySlugApi = async (slug: string) => {
  return get({
    route: `/index.php/wp-json/wp/v2/posts?slug=${slug}`,
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};

export const getSelfHostedNotification = async (raw: { name: string; email: string; organization: string; message: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};
export const getUserDetailApi = async ({ token }: { token: string }) => {
  return post({
    route: "/api/v1/",
    data: "",
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    },
  });
};
export const sendPromoCodeApi = async (raw: { email: string }) => {
  return post({
    route: "/api/v1/",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });
};
