import { useNavigate } from "react-router-dom";
import { Button, Center, Tag, Text } from "@chakra-ui/react";
import { TestResponse } from "@/entities/start-test-card/store.ts";

type Props = {
  test: TestResponse;
};
export const TestCard = ({ test }: Props) => {
  const navigate = useNavigate();
  return (
    <Center
      justifyContent="space-between"
      w={{ base: "100%", md: "720px" }}
      bgColor="white"
      p="18px"
      borderRadius="12px"
      mt="24px"
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
    >
      <Text fontSize="md" fontWeight="bold">
        Тест №{test.id}
      </Text>
      <Tag colorScheme={test.status === "FINISHED" ? "green" : "blue"}>
        {test.status === "FINISHED" ? "Завершен" : "Не завершен"}
      </Tag>
      <Button
        colorScheme="blue"
        onClick={() => navigate(`/subject-choose?test_id=${test.id}`)}
      >
        Пройти
      </Button>
    </Center>
  );
};
