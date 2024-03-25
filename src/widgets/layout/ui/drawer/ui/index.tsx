import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Drawer as ChakraDrawer,
} from "@chakra-ui/react";
import { Logo } from "@/shared";
import { useNavLinks } from "../hooks/useNavLinks";
import { NavLink } from "./nav-link";

export const Drawer = () => {
  const { onClose } = useDisclosure();
  const navLinks = useNavLinks();
  return (
    <ChakraDrawer
      placement="left"
      onClose={onClose}
      isOpen={true}
      trapFocus={false}
      variant="alwaysOpen"
    >
      <DrawerContent
        maxW="320px"
        boxShadow="0px 32px 64px -12px rgba(16, 24, 40, 0.14);"
      >
        <DrawerHeader>
          <Logo />
        </DrawerHeader>
        <DrawerBody display="flex" flexDir="column">
          {navLinks.map((navLink) => (
            <NavLink key={navLink.title} {...navLink} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
