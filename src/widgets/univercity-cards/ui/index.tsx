import { UniversityCard } from "../ui/university-card";
import { Flex } from "@chakra-ui/react";

export const UniversityCards = () => {
  return (
    <Flex gap="20px" flexWrap="wrap" mt="32px">
      {[...Array(12)].map((_, index) => (
        <UniversityCard key={index} />
      ))}
    </Flex>
  );
};
