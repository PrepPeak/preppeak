import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  logo: string;
  numberOfSpecialities: number;
  onCardClick: () => void;
};

export const UniversityCardLayout = ({
  name,
  logo,
  numberOfSpecialities,
  onCardClick,
}: Props) => {
  return (
    <Flex
      flexDir="column"
      bg="white"
      p="12px"
      borderRadius="12px"
      cursor="pointer"
      onClick={onCardClick}
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
      justifyContent="center"
    >
      <Center w="100%" justifyContent="flex-start" gap="12px">
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
