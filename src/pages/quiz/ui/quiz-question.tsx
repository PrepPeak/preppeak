import { QuizQuestionType } from "@/pages/quiz/ui/types.ts";
import { Box, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = QuizQuestionType & {
  questionNumber: number;
};

export const QuizQuestion = ({ question, answers, questionNumber }: Props) => {
  const [value, setValue] = useState<string>();

  return (
    <Box mt="12px" bgColor="white" p="12px" borderRadius="12px">
      <Text textStyle="xl" fontWeight="bold">
        {questionNumber}){question}
      </Text>
      <RadioGroup
        display="flex"
        flexDir="column"
        mt="6px"
        onChange={setValue}
        value={value}
      >
        {answers.map((answer) => (
          <Radio value={answer}>{answer}</Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
