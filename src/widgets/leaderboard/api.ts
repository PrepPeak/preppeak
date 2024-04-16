import { request } from "@/shared";
import { AxiosResponse } from "axios";
import { LeaderboardRaw } from "@/widgets/leaderboard/models.ts";

export const getLeaderBoard = (): Promise<AxiosResponse<LeaderboardRaw>> => {
  const url = `/leaderboard/`;

  return request.get(url);
};
