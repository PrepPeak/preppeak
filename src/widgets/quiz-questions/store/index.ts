import { useQuery } from "react-query";
import { getQuestions } from "@/widgets/quiz-questions/api";

export const useQuestions = (subjectId: string) => {
  const { data, isError, error, isLoading } = useQuery(
    ["questions", subjectId],
    () => getQuestions(subjectId).then((res) => res.data),
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
