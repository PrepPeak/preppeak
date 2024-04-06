import { request } from "@/shared";

export const register = (data: any) => {
  const url = "/auth/register/";

  return request.post(url, data);
};
