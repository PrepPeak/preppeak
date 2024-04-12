import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  logo: string;
  numberOfSpecialities: number;
};

export const UniversityCardLayout = ({
  name,
  logo,
  numberOfSpecialities,
}: Props) => {
  return (
    <Flex
      flexDir="column"
      bg="white"
      p="12px"
      borderRadius="12px"
      cursor="pointer"
    >
      <Center w="100%" justifyContent="space-between" gap="12px">
        <Image src={logo} alt={name} w="50px" h="50px" />
        <Stack>
          <Text textStyle="md" textColor="gray.900" fontWeight="bold">
            {name}
          </Text>
          <Text textStyle="sm" textColor="gray.500">
            {numberOfSpecialities} специальностей
          </Text>
        </Stack>
      </Center>
    </Flex>
  );
};
