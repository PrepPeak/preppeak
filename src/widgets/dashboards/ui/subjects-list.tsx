import { useDashboardSubjects } from "@/widgets/dashboards/store.ts";
import { SubjectCard } from "@/widgets/dashboards/ui/subjects-card.tsx";
import { Center } from "@chakra-ui/react";

export const SubjectsList = () => {
  const { subjects, isLoading } = useDashboardSubjects();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Center justifyContent="flex-start" gap="24px" flexWrap="wrap" mt="48px">
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </Center>
  );
};
