import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";

type Props = {
  questionTitle: string;
  answers: string[];
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
          <Radio value={answer} key={answer}>
            {answer}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
