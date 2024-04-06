import { getSubjects } from "@/entities/subject-choice-card/api";
import { useQuery } from "react-query";

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
