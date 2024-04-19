import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSubjects } from "@/entities/subject-choice-card/store";

export const SubjectChoiceCard = () => {
  const navigate = useNavigate();
  const { subjects, isLoading } = useSubjects();

  if (isLoading) return <Text>Загрузка...</Text>;

  return (
    <Flex mt="24px" w="720px" flexDir="column" gap="12px">
      {subjects?.map((subject) => (
        <Center
          key={subject?.id}
          justifyContent="space-between"
          w="100%"
          bgColor="white"
          p="18px"
          borderRadius="12px"
          boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
        >
          <Center gap="12px">
            {/*<FiBook />*/}
            <Text fontSize="md" fontWeight="bold">
              {subject?.name}
            </Text>
          </Center>
          <Button
            colorScheme="blue"
            onClick={() => navigate(`/quiz/${subject?.id}`)}
          >
            Пройти
          </Button>
        </Center>
      ))}
    </Flex>
  );
};
