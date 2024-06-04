import { Box, Center, Text } from "@chakra-ui/react";
import { useDashboardReport } from "@/widgets/dashboards/store.ts";
import { daysOfWeekArray } from "@/widgets/dashboards/models.ts";
import { SubjectsList } from "@/widgets/dashboards/ui/subjects-list.tsx";

export const Dashboards = () => {
  const { report, isLoading } = useDashboardReport();

  if (isLoading) return <>Loading...</>;

  return (
    <Box mt="24px">
      <Box
        p="24px"
        borderRadius="12px"
        boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
        bgColor="white"
      >
        <Text textStyle="md" fontWeight="bold">
          Мои Результаты
        </Text>
        <Center gap="12px" justifyContent="flex-start" mt="12px">
          {daysOfWeekArray?.map((day) => (
            <Center
              key={day.id}
              w="60px"
              h="60px"
              borderRadius="12px"
              bgColor={
                report?.streakWeekDay && report?.streakWeekDay >= day.id
                  ? "green.500"
                  : "gray.100"
              }
              color={
                report?.streakWeekDay && report?.streakWeekDay >= day.id
                  ? "gray.500"
                  : "gray.900"
              }
            >
              <Text textStyle="sm">{day.week}</Text>
            </Center>
          ))}
        </Center>
        <Text textStyle="sm" color="gray.400" mt="12px">
          Пройденых дней на этой неделе
        </Text>
        <Text textStyle="md" color="gray.900" mt="24px">
          {report?.daysUntilNextTest}
          <Text as={"span"} textStyle="sm" color="gray.400">
            {" "}
            дней до следующего ЕНТ
          </Text>
        </Text>
        <Text textStyle="md" color="gray.900" mt="24px">
          {report?.goalPoints}
          <Text as={"span"} textStyle="sm" color="gray.400">
            {" "}
            Целевые баллы
          </Text>
        </Text>

        <Center
          w="80%"
          bgColor="green.200"
          justifyContent="space-between"
          borderRadius="50px"
          mt="24px"
        >
          <Center w="50%" bgColor="green.500" borderRadius="50px">
            <Text textStyle="md" color="gray.900" my="6px">
              {report?.studiedHours}
            </Text>
          </Center>
          <Text textStyle="md" color="gray.900" mr="24px" my="6px">
            {report?.totalHours}
          </Text>
        </Center>
        <Text textStyle="sm" color="gray.400" mt="12px">
          Всего часов на обучение
        </Text>
      </Box>
      <SubjectsList />
    </Box>
  );
};
