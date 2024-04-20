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
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
    >
      <Text fontSize="md" fontWeight="bold">
        Пройти Тест
      </Text>
      <Button colorScheme="blue" onClick={() => navigate("/subject-choose")}>
        Пройти
      </Button>
    </Center>
  );
};
