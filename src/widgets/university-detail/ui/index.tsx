import { useUniversityDetail } from "@/widgets/university-detail/store";
import { useParams } from "react-router-dom";
import { UniversityDetailCard } from "@/widgets/university-detail/ui/university-detail-card.tsx";
import { UniversityDetailAbout } from "@/widgets/university-detail/ui/university-detail-about.tsx";
import { UniversityDetailContacts } from "@/widgets/university-detail/ui/university-detail-contacts.tsx";
import { Box, Flex } from "@chakra-ui/react";

export const UniversityDetail = () => {
  const params = useParams();

  const { data, isLoading } = useUniversityDetail(params.id || "");

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box mt="24px" ml="24px">
      <Flex gap="24px" w="100%" flexWrap="wrap">
        <UniversityDetailCard {...data} />
        <UniversityDetailContacts {...data} />
      </Flex>
      <UniversityDetailAbout {...data} />
    </Box>
  );
};
