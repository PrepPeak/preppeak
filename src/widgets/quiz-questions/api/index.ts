import { AxiosResponse } from "axios";
import { QuestionsTypeRaw } from "@/widgets/quiz-questions/models";
import { request } from "@/shared";
import { AnswerQuestionRequest } from "@/widgets/quiz-questions/store";

export const getQuestions = (
  subjectId: string,
  testId: string,
): Promise<AxiosResponse<QuestionsTypeRaw>> => {
  const url = `/test/${testId}/subjects/${subjectId}/questions/`;

  return request.get(url);
};

export const answerQuestion = (data: AnswerQuestionRequest) => {
  const { testId, subjectId, questionId } = data;
  const url = `/test/${testId}/subjects/${subjectId}/questions/${questionId}/answer/`;

  return request.post(url, { answerId: 1 });
};
