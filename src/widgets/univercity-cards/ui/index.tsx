import { UniversityCard } from "../ui/university-card";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useUniversityCards } from "@/widgets/univercity-cards";

export const UniversityCards = () => {
  const { universityCards, isLoading } = useUniversityCards();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid gap="20px" flexWrap="wrap" mt="32px" templateColumns="repeat(3,1fr)">
      {universityCards.map((university) => (
        <UniversityCard university={university} key={university.id} />
      ))}
    </Grid>
  );
};
