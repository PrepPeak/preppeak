import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export const ChancesForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center
        w={{ base: "100%", md: "520px" }}
        bgColor="white"
        p="18px"
        borderRadius="12px"
        mt="24px"
        boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
        flexDir="column"
        alignItems="flex-start"
        gap="24px"
      >
        <Text textStyle="xl" fontWeight="semibold">
          Узнайте ваши шансы поступления!
        </Text>
        <Menu>
          <MenuButton as={Button} colorScheme="blue" w="100%">
            Специальности
          </MenuButton>
          <MenuList w="100%">
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </>
  );
};
