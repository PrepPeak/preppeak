import { Logo } from "@/shared";
import {
  Text,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "@/features/sing-in-form/store";

export const SignInForm = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { mutate } = useSignIn();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.data.access_token);
        navigate("/");
      },
    });
  };

  return (
    <Center
      borderRadius="24px"
      p="50px"
      bgColor="white"
      flexDir="column"
      w="400px"
    >
      <Logo />
      <Box w="100%" mt="24px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="20px">
            <FormControl isRequired isInvalid={!!errors?.phone}>
              <FormLabel>Телефон</FormLabel>
              <Input
                {...register("phone", {
                  required: "Это поле обязательное",
                })}
                placeholder="+7 (999) 999-99-99"
                w="100%"
                type="number"
              />
            </FormControl>
            <FormControl isRequired isInvalid={!!errors?.password}>
              <FormLabel>Пароль</FormLabel>
              <Input
                {...register("password", {
                  required: "Это поле обязательное",
                })}
                placeholder="**********"
                w="100%"
                type="password"
              />
            </FormControl>
            <Button w="100%" colorScheme="blue" type="submit">
              Войти
            </Button>
            <Text
              w="100%"
              textAlign="center"
              fontSize="14px"
              color="blue.500"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => navigate("/register")}
            >
              Регистрация
            </Text>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};
