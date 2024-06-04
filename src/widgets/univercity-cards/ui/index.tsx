import { UniversityCard } from "../ui/university-card";
import { Grid } from "@chakra-ui/react";
import { useUniversityCards } from "@/widgets/univercity-cards";

export const UniversityCards = () => {
  const { universityCards, isLoading } = useUniversityCards();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid
      gap="20px"
      flexWrap="wrap"
      mt="32px"
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
    >
      {universityCards.map((university) => (
        <UniversityCard university={university} key={university.id} />
      ))}
    </Grid>
  );
};
