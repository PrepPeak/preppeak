import { PageTitle } from "@/shared";
import { AppLayout } from "@/widgets";
import { QuizQuestion } from "@/pages/quiz/ui/quiz-question.tsx";
import { questions } from "@/pages/quiz/ui/data.ts";
import { useState } from "react";
import { Button, Center } from "@chakra-ui/react";

export const QuizPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <AppLayout>
      <PageTitle>Пробное тестирование</PageTitle>
      <QuizQuestion
        {...questions[activeIndex]}
        questionNumber={activeIndex + 1}
      />
      <Center justifyContent="flex-start" gap="12px" mt="24px">
        <Button
          colorScheme="gray"
          onClick={() =>
            activeIndex === 0
              ? setActiveIndex(activeIndex)
              : setActiveIndex(activeIndex - 1)
          }
        >
          Prev
        </Button>
        <Button
          colorScheme="blue"
          onClick={() =>
            activeIndex === 2
              ? setActiveIndex(activeIndex)
              : setActiveIndex(activeIndex + 1)
          }
        >
          Next
        </Button>
      </Center>
    </AppLayout>
  );
};

export default QuizPage;
