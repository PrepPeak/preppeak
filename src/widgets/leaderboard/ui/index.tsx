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
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
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
