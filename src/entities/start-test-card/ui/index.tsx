import { Button, Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const StartTestCard = () => {
  const navigate = useNavigate();
  return (
    <Center
      justifyContent="space-between"
      w="720px"
      bgColor="white"
      p="18px"
      borderRadius="12px"
      mt="24px"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
    >
      <Text fontSize="md" fontWeight="bold">
        Первый пробный тест
      </Text>
      <Button colorScheme="blue" onClick={() => navigate("/subject-choose")}>
        Пройти
      </Button>
    </Center>
  );
};
