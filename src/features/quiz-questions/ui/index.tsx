import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { AnswerType } from "@/widgets/quiz-questions/models";
import { MathJax } from "better-react-mathjax";

type Props = {
  questionTitle: string;
  answers: AnswerType[];
};

export const QuizQuestion = (props: Props) => {
  const { questionTitle, answers } = props;
  return (
    <Box mt="12px">
      <Text fontSize="xl" fontWeight="bold">
        <MathJax inline dynamic>
          {questionTitle}
        </MathJax>
      </Text>
      <RadioGroup display="flex" flexDir="column" gap="12px" mt="12px">
        {answers.map((answer) => (
          <Radio value={answer.text} key={answer.id}>
            <MathJax inline dynamic>
              {answer.text}
            </MathJax>
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
