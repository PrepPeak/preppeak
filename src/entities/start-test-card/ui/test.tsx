import { StartTestCard } from "@/entities";
import { Box, Text } from "@chakra-ui/react";
import { useTests } from "@/entities/start-test-card/store.ts";
import { TestCard } from "@/entities/start-test-card/ui/test-card.tsx";

export const Tests = () => {
  const { tests, isLoading } = useTests();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <StartTestCard />
      <Text textStyle="md" fontWeight="semibold" mt="24px">
        Пройденные Тесты
      </Text>
      {tests?.map((test) => <TestCard key={test.id} test={test} />)}
    </Box>
  );
};
