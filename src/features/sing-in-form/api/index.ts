import { request } from "@/shared";

export const login = (data: any) => {
  const url = "/auth/login/";

  return request.post(url, data);
};
