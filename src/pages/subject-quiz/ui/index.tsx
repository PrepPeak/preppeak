import { PageTitle } from "@/shared";
import { QuizQuestions } from "@/widgets";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SubjectQuizPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle>
        <Text
          as="span"
          color="gray.500"
          cursor="pointer"
          onClick={() => navigate(-1)}
        >
          Выбор предметов
        </Text>{" "}
        / Тест
      </PageTitle>
      <QuizQuestions />
    </>
  );
};

export default SubjectQuizPage;
