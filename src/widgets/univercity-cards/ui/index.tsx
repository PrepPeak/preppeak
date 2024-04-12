import { UniversityCard } from "../ui/university-card";
import { Flex } from "@chakra-ui/react";
import { useUniversityCards } from "@/widgets/univercity-cards";

export const UniversityCards = () => {
  const { universityCards, isLoading } = useUniversityCards();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Flex gap="20px" flexWrap="wrap" mt="32px">
      {universityCards.map((university) => (
        <UniversityCard key={university.id} university={university} />
      ))}
    </Flex>
  );
};
