import { useLeaderboard } from "@/widgets/leaderboard/store.ts";
import { Stack } from "@chakra-ui/react";
import { LeaderboardUser } from "@/widgets/leaderboard/ui/leaderboard-user.tsx";

export const Leaderboard = () => {
  const { users, isLoading } = useLeaderboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack
      mt="24px"
      bgColor="white"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      p="12px"
      borderRadius="12px"
      gap="12px"
    >
      {users.map((user) => (
        <LeaderboardUser key={user.id} user={user} />
      ))}
    </Stack>
  );
};
