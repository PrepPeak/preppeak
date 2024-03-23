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
    <ChakraDrawer placement="left" onClose={onClose} isOpen={true}>
      <DrawerContent>
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
