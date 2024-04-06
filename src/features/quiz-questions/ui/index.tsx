import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { AnswerType } from "@/widgets/quiz-questions/models";

type Props = {
  questionTitle: string;
  answers: AnswerType[];
};

export const QuizQuestion = (props: Props) => {
  const { questionTitle, answers } = props;
  return (
    <Box mt="12px">
      <Text fontSize="xl" fontWeight="bold">
        {questionTitle}
      </Text>
      <RadioGroup display="flex" flexDir="column" gap="12px" mt="12px">
        {answers.map((answer) => (
          <Radio value={answer.text} key={answer.id}>
            {answer.text}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
