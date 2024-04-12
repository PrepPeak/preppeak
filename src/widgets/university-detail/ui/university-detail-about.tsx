import { Box, Text, Stack, Center } from "@chakra-ui/react";
import { PiMedalMilitary, PiMoney } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import { BsHouse, BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

type Props = {
  price?: number;
  status?: boolean;
  militaryFaculty?: boolean;
  studentsNumber?: number;
  dormitory?: boolean;
  rating?: number;
};
export const UniversityDetailAbout = (props: Props) => {
  const { price, status, militaryFaculty, studentsNumber, dormitory, rating } =
    props;
  return (
    <Box
      bgColor="white"
      p="24px"
      borderRadius="12px"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      mt="24px"
      w="fit-content"
    >
      <Stack gap="6px" w="320px">
        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <PiMoney fill="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Средняя цена
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {price} ₸
          </Text>
        </Center>

        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <GrStatusGood fill="#5755FF" color="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Статус
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {status ? "Государственный" : "Частный"}
          </Text>
        </Center>

        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <PiMedalMilitary fill="#5755FF" color="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Военная кафедра
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {militaryFaculty ? "Есть" : "Нет"}
          </Text>
        </Center>

        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <BsHouse fill="#5755FF" color="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Общежитие
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {dormitory ? "Есть" : "Нет"}
          </Text>
        </Center>

        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <AiFillStar fill="#5755FF" color="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Рейтинг
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {rating}
          </Text>
        </Center>

        <Center justifyContent="space-between" w="100%">
          <Center gap="6px">
            <BsPerson fill="#5755FF" color="#5755FF" />
            <Text color="blue.500" textStyle="md">
              Кол-во студентов
            </Text>
          </Center>

          <Text color="gray.900" textStyle="md">
            {studentsNumber}
          </Text>
        </Center>
      </Stack>
    </Box>
  );
};
