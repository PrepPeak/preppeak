import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Drawer as ChakraDrawer,
} from "@chakra-ui/react";
import { Logo } from "@/shared";

export const Drawer = () => {
  const { onClose } = useDisclosure();
  return (
    <ChakraDrawer placement="left" onClose={onClose} isOpen={true}>
      <DrawerContent>
        <DrawerHeader>
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
