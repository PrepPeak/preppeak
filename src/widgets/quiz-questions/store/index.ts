import { useQuery } from "react-query";
import { getQuestions } from "@/widgets/quiz-questions/api";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";
import {
  QuestionsType,
  QuestionsTypeRaw,
} from "@/widgets/quiz-questions/models";

export const useQuestions = (subjectId: string, testId: string) => {
  const { data, isError, error, isLoading } = useQuery(
    ["questions", subjectId, testId],
    () =>
      getQuestions(subjectId, testId).then((res) =>
        convertKeysToCamelCase<QuestionsTypeRaw, QuestionsType>(res.data),
      ),
    {
      enabled: !!subjectId,
    },
  );

  return {
    questions: data?.questions || [],
    isLoading,
    isError,
    error,
  };
};
