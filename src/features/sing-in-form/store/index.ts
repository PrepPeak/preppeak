import { login } from "@/features/sing-in-form/api";
import { useMutation } from "react-query";


export const useSignIn = () => {
  return useMutation((data: any) => login(data));
};
