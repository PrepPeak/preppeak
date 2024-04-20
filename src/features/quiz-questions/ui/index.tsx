import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { AnswerType } from "@/widgets/quiz-questions/models";
import { MathJax } from "better-react-mathjax";

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
            <Radio value={answer.id.toString()} key={answer.id}>
              <MathJax inline dynamic>
                {answer.text}
              </MathJax>
            </Radio>
          ))}
        </RadioGroup>
      )}
    </Box>
  );
};
