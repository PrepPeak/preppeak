import { Box, Center, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { AnswerType } from "@/widgets/quiz-questions/models";
import { MathJax } from "better-react-mathjax";
import { BiCheck } from "react-icons/bi";

type Props = {
  questionTitle: string;
  answers: AnswerType[];
  correctAnswerIds: number[];
};

export const QuizQuestion = (props: Props) => {
  const { questionTitle, answers, correctAnswerIds } = props;
  return (
    <Box mt="12px">
      <Text fontSize="xl" fontWeight="bold">
        <MathJax inline dynamic>
          {questionTitle}
        </MathJax>
      </Text>
      {correctAnswerIds?.length === 0 ? (
        <RadioGroup display="flex" flexDir="column" gap="12px" mt="12px">
          {answers.map((answer) => (
            <Radio value={answer.id.toString()} key={answer.id}>
              <MathJax inline dynamic>
                {answer.text}
              </MathJax>
            </Radio>
          ))}
        </RadioGroup>
      ) : (
        <RadioGroup
          display="flex"
          flexDir="column"
          gap="12px"
          mt="12px"
          value={correctAnswerIds?.[0].toString()}
        >
          {answers.map((answer) => (
            <Radio
              value={answer.id.toString()}
              key={answer.id}
              colorScheme="green"
            >
              <Center gap="12px">
                <MathJax inline dynamic>
                  {answer.text}
                </MathJax>
                {answer.id === correctAnswerIds?.[0] && (
                  <BiCheck color="green" size="24px" />
                )}
              </Center>
            </Radio>
          ))}
        </RadioGroup>
      )}
    </Box>
  );
};
