import { AxiosResponse } from "axios";
import { QuestionsTypeRaw } from "@/widgets/quiz-questions/models";
import { request } from "@/shared";

export const getQuestions = (
  subjectId: string,
  testId: string,
): Promise<AxiosResponse<QuestionsTypeRaw>> => {
  const url = `/test/${testId}/subjects/${subjectId}/questions/`;

  return request.get(url);
};
