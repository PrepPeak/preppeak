import { Box, Center, Divider, Link, Stack, Text } from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { IoEarth } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

type Props = {
  phone?: string;
  url?: string;
  facebook?: string;
  instagram?: string;
};
export const UniversityDetailContacts = (props: Props) => {
  const { phone, url, facebook, instagram } = props;
  return (
    <Box
      bgColor="white"
      p="24px"
      borderRadius="12px"
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
      w={{ base: "100%", md: "fit-content" }}
    >
      <Text textStyle="xl" fontWeight="bold">
        Контакты
      </Text>
      <Stack gap="6px" w={{ base: "100%", md: "200px" }} mt="24px">
        <Center justifyContent="flex-start" w="100%" gap="12px">
          <BiPhone />
          <Text color="gray.900" textStyle="md">
            {phone}
          </Text>
        </Center>
        <Divider />

        <Center justifyContent="flex-start" w="100%" gap="12px">
          <IoEarth />
          <Link href={url}>
            <Text color="gray.900" textStyle="md">
              Веб-сайт
            </Text>
          </Link>
        </Center>
        <Divider />

        <Center justifyContent="flex-start" w="100%" gap="12px">
          <FiFacebook />
          <Link href={facebook}>
            <Text color="gray.900" textStyle="md">
              Facebook
            </Text>
          </Link>
        </Center>
        <Divider />

        <Center justifyContent="flex-start" w="100%" gap="12px">
          <FaInstagram />
          <Link href={instagram}>
            <Text color="gray.900" textStyle="md">
              Instagram
            </Text>
          </Link>
        </Center>
      </Stack>
    </Box>
  );
};
