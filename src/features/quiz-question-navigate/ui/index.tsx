import { Box, Center, Text } from "@chakra-ui/react";
import { Dispatch } from "react";
import { Timer } from "@/entities";

type Props = {
  questionNum: number;
  activeQuestion: number;
  setActiveQuestion: Dispatch<number>;
  isActiveTest: boolean;
};
export const QuizQuestionNavigate = (props: Props) => {
  const { questionNum, activeQuestion, setActiveQuestion, isActiveTest } =
    props;

  console.log(isActiveTest);

  return (
    <Box>
      <Center justifyContent="space-between" w="100%">
        <Text fontStyle="md" color="gray.500" fontWeight="bold">
          {activeQuestion + 1} из {questionNum}
        </Text>
        {isActiveTest && <Timer hours={3} />}
      </Center>
      <Center
        mt="12px"
        gap="12px"
        overflowX="scroll"
        w="100%"
        justifyContent="flex-start"
      >
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
            minW="40px"
            h="40px"
          >
            {index + 1}
          </Center>
        ))}
      </Center>
    </Box>
  );
};
