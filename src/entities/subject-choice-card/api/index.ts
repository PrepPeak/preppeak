import { AxiosResponse } from "axios";
import { SubjectsType } from "@/entities/subject-choice-card/models";
import { request } from "@/shared";

export const getSubjects = (): Promise<AxiosResponse<SubjectsType>> => {
  const url = "/subjects";

  return request.get(url);
};
