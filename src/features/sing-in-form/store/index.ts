import { login } from "@/features/sing-in-form/api";
import { useMutation } from "react-query";

type SignInData = {
  phone: string;
  password: string;
};

export const useSignIn = () => {
  return useMutation((data: any) => login(data));
};
