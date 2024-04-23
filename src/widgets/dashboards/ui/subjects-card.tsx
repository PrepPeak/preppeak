import { Subject } from "@/widgets/dashboards/models.ts";
import { Box, Center, Progress, Text } from "@chakra-ui/react";

type Props = {
  subject: Subject;
};
export const SubjectCard = ({ subject }: Props) => {
  const { name, percentage } = subject;
  return (
    <Center
      flexDir="column"
      justifyContent="space-between"
      bgColor="white"
      p="18px"
      borderRadius="12px"
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
      w={{ base: "100%", md: "200px" }}
      h="200px"
    >
      <Text textStyle="md">{name}</Text>
      <Box w="100%">
        <Progress value={percentage} colorScheme="green" />
        <Text textStyle="md" color="gray.500" mt="12px">
          Охвачено вопросов
        </Text>
      </Box>
      <Text textStyle="md">{percentage}% правильных ответов</Text>
    </Center>
  );
};
