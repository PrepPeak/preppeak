import {
  useSpecialities,
  useUniversityDetail,
} from "@/widgets/university-detail/store";
import { useParams } from "react-router-dom";
import { UniversityDetailCard } from "@/widgets/university-detail/ui/university-detail-card.tsx";
import { UniversityDetailAbout } from "@/widgets/university-detail/ui/university-detail-about.tsx";
import { UniversityDetailContacts } from "@/widgets/university-detail/ui/university-detail-contacts.tsx";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UniversitySpecialities } from "@/widgets/university-detail/ui/university-specialities.tsx";

export const UniversityDetail = () => {
  const params = useParams();

  const { data, isLoading } = useUniversityDetail(params.id || "");
  const { specialities, isLoading: isSpecialitiesLoading } = useSpecialities(
    params.id || "",
  );

  if (isLoading || isSpecialitiesLoading) return <div>Loading...</div>;

  return (
    <Box mt="24px" ml={{ md: "24px" }}>
      <Flex gap="24px" w="100%" flexWrap="wrap">
        <UniversityDetailCard {...data} />
        <UniversityDetailContacts {...data} />
        <UniversityDetailAbout {...data} />
      </Flex>

      <Text textStyle="xl" fontWeight="bold" my="12px">
        Специальности
      </Text>

      <Flex flexWrap="wrap" gap="12px" w="fit-content">
        {specialities?.map((spec) => <UniversitySpecialities {...spec} />)}
      </Flex>
    </Box>
  );
};
