import { useUniversityDetail } from "@/widgets/university-detail/store";
import { useParams } from "react-router-dom";
import { UniversityDetailCard } from "@/widgets/university-detail/ui/university-detail-card.tsx";
import { UniversityDetailAbout } from "@/widgets/university-detail/ui/university-detail-about.tsx";
import { UniversityDetailContacts } from "@/widgets/university-detail/ui/university-detail-contacts.tsx";
import { Flex } from "@chakra-ui/react";

export const UniversityDetail = () => {
  const params = useParams();

  const { data, isLoading } = useUniversityDetail(params.id || "");

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <UniversityDetailCard {...data} />
      <Flex gap="24px">
        <UniversityDetailAbout {...data} />
        <UniversityDetailContacts {...data} />
      </Flex>
    </>
  );
};
