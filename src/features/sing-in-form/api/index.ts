import { request } from "@/shared";

export const login = (data: any) => {
  const url = "/auth/login/";

  console.log("data", data);
  return request.post(url, data);
};
