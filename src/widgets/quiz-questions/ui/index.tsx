import { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { QuizQuestion, QuizQuestionNavigate } from "@/features";
import { useNavigate, useParams } from "react-router-dom";
import { useQuestions } from "@/widgets/quiz-questions/store";

export const QuizQuestions = () => {
  const { subjectId } = useParams();
  const { questions, isLoading } = useQuestions(subjectId || "");
  const [activeQuestion, setActiveQuestion] = useState(0);

  const navigate = useNavigate();

  if (isLoading) return <Box>Загрузка...</Box>;

  if (questions.length === 0) return <Box>Вопросов нет ;)</Box>;

  const onNextQuestion = () => {
    if (activeQuestion !== questions?.length - 1)
      setActiveQuestion(activeQuestion + 1);
    else navigate("/quiz");
  };

  return (
    <Box
      bgColor="white"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      p="24px"
      borderRadius="12px"
      maxW="80%"
      mt="24px"
    >
      <QuizQuestionNavigate
        questionNum={questions?.length}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <QuizQuestion
        answers={questions[activeQuestion]?.answers}
        questionTitle={questions[activeQuestion]?.text}
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
          Предыдущий вопрос
        </Button>
        <Button colorScheme="blue" onClick={onNextQuestion}>
          {activeQuestion === questions?.length - 1
            ? "Готово"
            : "Следующий вопрос"}
        </Button>
      </Center>
    </Box>
  );
};
