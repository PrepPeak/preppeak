import { Box, Button, Center, Text } from "@chakra-ui/react";
import { Logo } from "@/shared";
import { useNavigate } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { HomePageIcon } from "@/pages/chances/HomePage.tsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Center
      w="100%"
      h="100vh"
      bgColor="gray.100"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box maxW="1120px" w="100%">
        <Center
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid"
          borderColor="blue.100"
          py="24px"
        >
          <Logo />
          <Center gap="24px">
            <Text
              cursor="pointer"
              color="blue.500"
              fontWeight="bold"
              onClick={() => navigate("/sign-in")}
            >
              Войти
            </Text>
            <Button colorScheme="blue" onClick={() => navigate("/register")}>
              Зарегистрироваться
            </Button>
          </Center>
        </Center>
        <Center>
          <Box maxW="50%">
            <Text textStyle="md" fontWeight="semibold">
              <Text as={"span"} color="blue.500">
                PrepPeak
              </Text>{" "}
              - твой ключ к успеху в образовании!
            </Text>
            <Text
              textStyle="2xl"
              fontWeight="semibold"
              color="orange.500"
              my="30px"
            >
              Что такое PrepPeak?
            </Text>
            <Text textStyle="md" fontWeight="semibold">
              <Text as={"span"} color="blue.500">
                PrepPeak
              </Text>{" "}
              - это инновационная образовательная платформа, разработанная для
              помощи школьникам достичь своих желанных баллов на ЕНТ. Мы
              предлагаем симулятор тестирования, трекер подготовки, анализы
              тестов и поддержку, чтобы помочь будущим абитуриентам успешно
              сдать ЕНТ и поступить в вуз мечты.
            </Text>
            <Center w="fit-content" gap="12px" mt="24px">
              <Text
                cursor="pointer"
                textStyle="md"
                fontWeight="semibold"
                color="green.500"
                onClick={() => navigate("/sign-in")}
              >
                Попробовать бесплатно{" "}
              </Text>
              <AiOutlineRight fill="green.500" />
            </Center>
          </Box>
          <HomePageIcon />
        </Center>
      </Box>
    </Center>
  );
};

export default HomePage;
