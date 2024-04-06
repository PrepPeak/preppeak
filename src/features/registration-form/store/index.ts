import { useMutation } from "react-query";
import { register } from "@/features/registration-form/api";

export const useRegister = () => {
  return useMutation((data: any) => register(data));
};
