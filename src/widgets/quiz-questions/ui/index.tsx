import { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { QuizQuestion, QuizQuestionNavigate } from "@/features";
import { quizQuestions } from "@/widgets/quiz-questions/ui/data.ts";
import { useNavigate } from "react-router-dom";

export const QuizQuestions = () => {
  const [activeQustion, setActiveQustion] = useState(1);

  const navigate = useNavigate();

  const onNextQuestion = () => {
    if (activeQustion !== 7) setActiveQustion(activeQustion + 1);
    else navigate("/quiz");
  };

  return (
    <Box
      bgColor="white"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      p="24px"
      borderRadius="12px"
      maxW="80%"
    >
      <QuizQuestionNavigate
        questionNum={quizQuestions?.length}
        activeQuestion={activeQustion}
        setActiveQuestion={setActiveQustion}
      />
      <QuizQuestion
        answers={quizQuestions[activeQustion]?.answers}
        questionTitle={quizQuestions[activeQustion]?.title}
      />
      <Center
        w="100%"
        justifyContent={activeQustion === 1 ? "flex-end" : "space-between"}
        mt="36px"
      >
        <Button
          display={activeQustion === 1 ? "none" : "block"}
          colorScheme="blue"
          onClick={() => setActiveQustion(activeQustion - 1)}
        >
          Предыдущий вопрос
        </Button>
        <Button colorScheme="blue" onClick={onNextQuestion}>
          Следующий вопрос
        </Button>
      </Center>
    </Box>
  );
};
