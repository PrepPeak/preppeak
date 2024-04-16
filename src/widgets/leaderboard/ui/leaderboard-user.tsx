import { LeaderboardItem } from "@/widgets/leaderboard/models.ts";
import { Avatar, Box, Center, Text } from "@chakra-ui/react";

type Props = {
  user: LeaderboardItem;
};
export const LeaderboardUser = ({ user }: Props) => {
  const { place, result, fullName } = user;
  return (
    <Center w="100%" justifyContent="space-between" p="6px">
      <Center justifyContent="flex-start" gap="12px">
        <Avatar />
        <Box>
          <Text textStyle="md" color="gray.900" fontWeight="semibold">
            {fullName}
          </Text>
          <Text textStyle="sm" color="gray.900">
            #{place}
          </Text>
        </Box>
      </Center>
      <Text textStyle="sm" color="gray.500">
        {result} балла
      </Text>
    </Center>
  );
};
