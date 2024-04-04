import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { FiBook, FiDivideSquare, FiType } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const SubjectChoiceCard = () => {
  const navigate = useNavigate();
  return (
    <Flex mt="24px" w="720px" flexDir="column" gap="12px">
      <Center
        justifyContent="space-between"
        w="100%"
        bgColor="white"
        p="18px"
        borderRadius="12px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <Center gap="12px">
          <FiBook />
          <Text fontSize="md" fontWeight="bold">
            История казахстана
          </Text>
        </Center>
        <Button colorScheme="blue" onClick={() => navigate("/quiz/mock")}>
          Пройти
        </Button>
      </Center>
      <Center
        justifyContent="space-between"
        w="100%"
        bgColor="white"
        p="18px"
        borderRadius="12px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <Center gap="12px">
          <FiDivideSquare />
          <Text fontSize="md" fontWeight="bold">
            Математическая грамотность
          </Text>
        </Center>
        <Button colorScheme="blue" onClick={() => navigate("/quiz/mock")}>
          Пройти
        </Button>
      </Center>
      <Center
        justifyContent="space-between"
        w="100%"
        bgColor="white"
        p="18px"
        borderRadius="12px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <Center gap="12px">
          <FiType />
          <Text fontSize="md" fontWeight="bold">
            Грамотность чтения
          </Text>
        </Center>
        <Button colorScheme="blue" onClick={() => navigate("/quiz/mock")}>
          Пройти
        </Button>
      </Center>
      <Center
        justifyContent="space-between"
        w="100%"
        bgColor="white"
        p="18px"
        borderRadius="12px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <Center gap="12px">
          <FiBook />
          <Text fontSize="md" fontWeight="bold">
            История казахстана
          </Text>
        </Center>
        <Button colorScheme="blue" onClick={() => navigate("/quiz/mock")}>
          Пройти
        </Button>
      </Center>
      <Center
        justifyContent="space-between"
        w="100%"
        bgColor="white"
        p="18px"
        borderRadius="12px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <Center gap="12px">
          <FiBook />
          <Text fontSize="md" fontWeight="bold">
            История казахстана
          </Text>
        </Center>
        <Button colorScheme="blue" onClick={() => navigate("/quiz/mock")}>
          Пройти
        </Button>
      </Center>
    </Flex>
  );
};
