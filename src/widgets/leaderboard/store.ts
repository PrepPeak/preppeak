import { useQuery } from "react-query";
import { getLeaderBoard } from "@/widgets/leaderboard/api.ts";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";
import { Leaderboard, LeaderboardRaw } from "@/widgets/leaderboard/models.ts";

export const useLeaderboard = () => {
  const { data, isLoading } = useQuery("leaderboard", () =>
    getLeaderBoard().then((res) =>
      convertKeysToCamelCase<LeaderboardRaw, Leaderboard>(res.data),
    ),
  );

  return {
    users: data?.users || [],
    isLoading,
  };
};
