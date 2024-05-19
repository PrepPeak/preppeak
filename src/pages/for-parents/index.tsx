import { useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Progress,
  Text,
  Center,
} from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Logo, PageTitle } from "@/shared";

import "./style.css";

// Register necessary components for Chart.js
Chart.register(...registerables);

const ForParentsPage = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Progress",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const today = new Date();
  const heatmapData = [
    { date: "2023-01-01", count: 1 },
    { date: "2023-01-22", count: 4 },
    { date: "2023-01-30", count: 2 },
    { date: "2023-02-10", count: 3 },
    { date: "2023-03-15", count: 5 },
    { date: "2023-04-20", count: 2 },
    { date: "2023-05-25", count: 4 },
    { date: "2023-06-10", count: 3 },
    { date: "2023-07-14", count: 1 },
    { date: "2023-08-23", count: 4 },
    { date: "2023-09-02", count: 2 },
    { date: "2023-10-11", count: 3 },
    { date: "2023-11-19", count: 5 },
    { date: "2023-12-25", count: 2 },
    { date: "2024-01-01", count: 4 },
    { date: "2024-01-15", count: 3 },
    { date: "2024-02-05", count: 1 },
    { date: "2024-02-20", count: 2 },
    { date: "2024-03-10", count: 4 },
    { date: "2024-03-25", count: 3 },
    { date: "2024-04-05", count: 5 },
    { date: "2024-04-20", count: 2 },
    { date: "2024-05-05", count: 1 },
    { date: "2024-05-15", count: 4 },
    { date: "2024-05-25", count: 3 },
  ];

  return (
    <Box px="24px" py="16px">
      <Logo />
      <PageTitle>Успехи Вашего ребенка</PageTitle>
      <Flex direction="column" mt="8">
        <Heading size="md" mb="4">
          Общий Прогресс
        </Heading>
        <Flex gap="32px">
          <Box flex="1">
            <Line ref={chartRef} data={data} options={options} />
          </Box>
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Stat mb="4">
              <StatLabel>Математика</StatLabel>
              <StatNumber>85%</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5%
              </StatHelpText>
            </Stat>
            <Stat mb="4">
              <StatLabel>Физика</StatLabel>
              <StatNumber>78%</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                3%
              </StatHelpText>
            </Stat>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" mt="8">
        <Heading size="md" mb="4">
          Последние Достижения
        </Heading>
        <Center justifyContent="flex-start" gap="64px" mt="32px">
          <Box overflow="auto">
            <CalendarHeatmap
              startDate={new Date(today.getFullYear(), 0, 1)}
              endDate={today}
              values={heatmapData}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return `color-scale-${value.count}`;
              }}
              gutterSize={4}
              showWeekdayLabels
            />
          </Box>
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" mb="4">
            <Heading size="sm" mb="2">
              Средний балл на текущий момент
            </Heading>
            <Stat>
              <StatNumber>71/140</StatNumber>
              <Progress colorScheme="green" value={50} size="lg" />
              <Text>Потрачено часов на обучение в неделю: 16/30</Text>
            </Stat>
          </Box>
        </Center>
        <Flex justifyContent="space-between" gap="32px">
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" width="30%">
            <Heading size="sm" mb="2">
              Математика
            </Heading>
            <Text>Средний балл: 27/50</Text>
            <Progress colorScheme="green" value={54} size="lg" />
          </Box>
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" width="30%">
            <Heading size="sm" mb="2">
              Мат. Грамотность
            </Heading>
            <Text>Средний балл: 7/10</Text>
            <Progress colorScheme="green" value={70} size="lg" />
          </Box>
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" width="30%">
            <Heading size="sm" mb="2">
              Грамотность чтения
            </Heading>
            <Text>Средний балл: 15/20</Text>
            <Progress colorScheme="green" value={75} size="lg" />
          </Box>
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" width="30%">
            <Heading size="sm" mb="2">
              Физика
            </Heading>
            <Text>Средний балл: 15/20</Text>
            <Progress colorScheme="green" value={75} size="lg" />
          </Box>
          <Box border="1px solid #ebedf0" borderRadius="lg" p="4" width="30%">
            <Heading size="sm" mb="2">
              История КЗ
            </Heading>
            <Text>Средний балл: 15/20</Text>
            <Progress colorScheme="green" value={75} size="lg" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ForParentsPage;
