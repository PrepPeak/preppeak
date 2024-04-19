import { Center, Text } from "@chakra-ui/react";
import { Dispatch } from "react";
import { Timer } from "@/entities";

type Props = {
  questionNum: number;
  activeQuestion: number;
  setActiveQuestion: Dispatch<number>;
};
export const QuizQuestionNavigate = (props: Props) => {
  const { questionNum, activeQuestion, setActiveQuestion } = props;

  return (
    <Center justifyContent="space-between" w="100%">
      <Text fontStyle="md" color="gray.500" fontWeight="bold">
        {activeQuestion + 1} из {questionNum}
      </Text>
      <Timer hours={3} />
      <Center gap="12px">
        {[...Array(questionNum)]?.map((_, index) => (
          <Center
            key={index}
            bgColor={index === activeQuestion ? "blue.500" : "blue.200"}
            color={index === activeQuestion ? "white" : "blue.500"}
            borderRadius="50px"
            border="1px solid"
            borderColor="blue.500"
            cursor="pointer"
            onClick={() => setActiveQuestion(index)}
            w="40px"
            h="40px"
          >
            {index + 1}
          </Center>
        ))}
      </Center>
    </Center>
  );
};
