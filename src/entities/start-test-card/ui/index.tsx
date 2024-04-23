import { Button, Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCreateTest } from "@/entities/start-test-card/store.ts";

export const StartTestCard = () => {
  const navigate = useNavigate();

  const { mutate } = useCreateTest();

  const startNewTest = () => {
    mutate(
      {
        language: "ru",
        subjectIds: [1, 2, 3, 4, 5],
      },
      {
        onSuccess: (data: any) => {
          navigate(`/subject-choose?test_id=${data.data.id}`);
        },
      },
    );
  };

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
        Пройти Тест
      </Text>
      <Button colorScheme="blue" onClick={() => startNewTest()}>
        Пройти
      </Button>
    </Center>
  );
};
