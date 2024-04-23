import { useState } from "react";
import { Box, Button, Center, useToast } from "@chakra-ui/react";
import { QuizQuestion, QuizQuestionNavigate } from "@/features";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuestions } from "@/widgets/quiz-questions/store";

export const QuizQuestions = () => {
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const { questions, isLoading } = useQuestions(
    subjectId || "",
    searchParams.get("test_id") || "",
  );
  const [activeQuestion, setActiveQuestion] = useState(0);

  const navigate = useNavigate();
  const toast = useToast();

  if (isLoading) return <Box>Загрузка...</Box>;

  if (questions.length === 0) return <Box>Вопросов нет ;)</Box>;

  const onNextQuestion = () => {
    // mutate(
    //   {
    //     subjectId: subjectId || "",
    //     testId: searchParams.get("test_id") || "",
    //     answerId: "1",
    //     questionId: questions[activeQuestion]?.id.toString() || "",
    //   },
    //   {
    //     onSuccess: () => {
    //
    //     },
    //   },
    // );
    if (activeQuestion !== questions?.length - 1)
      setActiveQuestion(activeQuestion + 1);
    else {
      toast({
        title: "Предмет пройден!",
        description: "Выберите другие предметы чтобы их пройти",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate(-1);
    }
  };

  return (
    <Box
      bgColor="white"
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
      p="24px"
      borderRadius="12px"
      maxW={{ base: "100%", md: "80%" }}
      mt="24px"
    >
      <QuizQuestionNavigate
        questionNum={questions?.length}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
        isActiveTest={questions[activeQuestion]?.correctAnswerIds?.length === 0}
      />
      <QuizQuestion
        answers={questions[activeQuestion]?.answers}
        questionTitle={questions[activeQuestion]?.text}
        correctAnswerIds={questions[activeQuestion]?.correctAnswerIds}
      />
      <Center
        w="100%"
        justifyContent={activeQuestion === 0 ? "flex-end" : "space-between"}
        mt="36px"
      >
        <Button
          display={activeQuestion === 0 ? "none" : "block"}
          colorScheme="blue"
          onClick={() => setActiveQuestion(activeQuestion - 1)}
        >
          Предыдущий
        </Button>
        <Button colorScheme="blue" onClick={onNextQuestion}>
          {activeQuestion === questions?.length - 1 ? "Готово" : "Следующий"}
        </Button>
      </Center>
    </Box>
  );
};
