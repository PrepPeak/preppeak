import { PropsWithChildren } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";

export const UniversityCardLayout = ({
  children: addToFavourite,
}: PropsWithChildren) => {
  return (
    <Flex flexDir="column" bg="white" p="24px" borderRadius="12px">
      <Center w="100%" justifyContent="space-between" gap="6px">
        <Text textStyle="md" textColor="gray.900">
          Подготовка учителей информатики
        </Text>
        {addToFavourite}
      </Center>
      <Text textStyle="sm" textColor="gray.500">
        5B070500
      </Text>
      <Text textStyle="md" textColor="gray.500">
        Популярность:{" "}
        <Text as={"span"} textStyle="md" textColor="green.500">
          высокая
        </Text>
      </Text>
    </Flex>
  );
};
