import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
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
      blockScrollOnMount={false}
    >
      <DrawerContent
        maxW="320px"
        boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
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
