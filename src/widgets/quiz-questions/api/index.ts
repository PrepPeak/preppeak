import { AxiosResponse } from "axios";
import { QuestionsType } from "@/widgets/quiz-questions/models";
import { request } from "@/shared";

export const getQuestions = (
  subjectId: string,
): Promise<AxiosResponse<QuestionsType>> => {
  const url = `/subjects/${subjectId}/questions/`;

  return request.get(url);
};
