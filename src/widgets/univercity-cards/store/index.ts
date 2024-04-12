import { useQuery } from "react-query";
import { getUniversityCards } from "@/widgets/univercity-cards/api";
import { parseUniversityCard } from "@/widgets/univercity-cards/models/parsers.ts";

export const useUniversityCards = () => {
  const { data, isLoading } = useQuery("universityCards", () =>
    getUniversityCards().then((res) =>
      res.data.universities.map(parseUniversityCard),
    ),
  );

  return {
    universityCards: data || [],
    isLoading,
  };
};
