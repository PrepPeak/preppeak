import { AxiosResponse } from "axios";
import { QuestionsType } from "@/widgets/quiz-questions/models";
import { request } from "@/shared";

export const getQuestions = (
  subjectId: string,
): Promise<AxiosResponse<QuestionsType>> => {
  const url1 = `/subjects/<int:subject_id>/questions/`;
  const url2 = "?subject_id=" + subjectId;

  const url = url1 + url2;

  return request.get(url);
};
