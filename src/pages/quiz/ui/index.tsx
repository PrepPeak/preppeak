import { PageTitle } from "@/shared";
import { Tests } from "@/entities/start-test-card/ui/test.tsx";

export const QuizPage = () => {
  return (
    <>
      <PageTitle>Пробное тестирование</PageTitle>
      <Tests />
    </>
  );
};

export default QuizPage;
