import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useDetailedTest,
  useSubjects,
} from "@/entities/subject-choice-card/store";
import { useMutation, useQueryClient } from "react-query";
import { request } from "@/shared";

export const SubjectChoiceCard = () => {
  const navigate = useNavigate();
  const { subjects, isLoading } = useSubjects();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("test_id");

  const { detailedTest, isLoading: isDetailedLoading } = useDetailedTest(
    testId || "",
  );

  const queryClient = useQueryClient();

  const { mutate } = useMutation(() =>
    request.patch(`/test/${testId}/complete/`),
  );

  if (isLoading || isDetailedLoading) return <Text>Загрузка...</Text>;

  if (detailedTest?.subjects.length !== 0) {
    return (
      <>
        <Text textStyle="md" fontWeight="semibold">
          Тест №{detailedTest?.id}
        </Text>
        <Flex
          mt="24px"
          w={{ base: "100%", md: "720px" }}
          flexDir="column"
          gap="12px"
        >
          {detailedTest?.subjects.map((subject) => (
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
                onClick={() =>
                  navigate(`/quiz/${subject?.id}/?test_id=${detailedTest?.id}`)
                }
              >
                Пройти
              </Button>
            </Center>
          ))}
          <Center justifyContent="flex-end">
            <Button
              w="fit-content"
              colorScheme="pink"
              onClick={() =>
                mutate(undefined, {
                  onSuccess: () => {
                    navigate("/quiz");
                    queryClient.invalidateQueries("tests");
                  },
                })
              }
            >
              Завершить тест
            </Button>
          </Center>
        </Flex>
      </>
    );
  }

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
