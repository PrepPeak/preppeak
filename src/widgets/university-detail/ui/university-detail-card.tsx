import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";

type Props = {
  name?: string;
  logo?: string;
  code?: string;
  address?: string;
  description?: string;
};
export const UniversityDetailCard = (props: Props) => {
  const { name, logo, code, address, description } = props;

  return (
    <Box
      bgColor="white"
      p="24px"
      borderRadius="12px"
      boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      w="640px"
    >
      <Center w="100%" justifyContent="flex-start" gap="24px">
        <Image src={logo} w="120px" h="120px" />
        <Stack gap="12px">
          <Text fontSize="24px" fontWeight="bold" color="gray.900">
            {name}
          </Text>
          <Center gap="6px" justifyContent="flex-start">
            <IoLocation />
            <Text textStyle="md" color="gray.500">
              {address}
            </Text>
          </Center>
          <Text textStyle="md" color="gray.500">
            Код: {code}
          </Text>
        </Stack>
      </Center>
      <Text textStyle="md" color="gray.900" mt="24px">
        {description}
      </Text>
    </Box>
  );
};
