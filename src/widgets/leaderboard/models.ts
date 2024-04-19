export type LeaderboardItemRaw = {
  id: number;
  place: number;
  full_name: string;
  result: number;
};

export type LeaderboardItem = {
  id: number;
  place: number;
  fullName: string;
  result: number;
};

export type LeaderboardRaw = {
  users: LeaderboardItemRaw[];
};

export type Leaderboard = {
  users: LeaderboardItem[];
};
