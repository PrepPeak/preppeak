import { getSubjects } from "@/entities/subject-choice-card/api";
import { useQuery } from "react-query";
import {
  DetailedTestResponse,
  DetailedTestResponseRaw,
  getTestById,
} from "@/entities/start-test-card/store.ts";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";

export const useSubjects = () => {
  const { data, isLoading, isError, error } = useQuery("subjects", () =>
    getSubjects().then((res) => res.data),
  );

  return {
    subjects: data?.subjects || [],
    isLoading,
    isError,
    error,
  };
};

export const useDetailedTest = (testId: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["subjects", testId],
    () =>
      getTestById(testId).then((res) =>
        convertKeysToCamelCase<DetailedTestResponseRaw, DetailedTestResponse>(
          res.data,
        ),
      ),
  );

  return {
    detailedTest: data,
    isLoading,
    isError,
    error,
  };
};
