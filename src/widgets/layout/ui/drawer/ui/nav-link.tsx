import { Link } from "react-router-dom";
import { NavLinkType } from "@/widgets/layout/ui/drawer/types/nav-link-types.ts";
import { Center, Text } from "@chakra-ui/react";

export const NavLink = ({ title, link, icon }: NavLinkType) => {
  return (
    <Link to={link}>
      <Center
        justifyContent="flex-start"
        gap="6px"
        p="6px"
        _hover={{ bgColor: "gray.100" }}
        borderRadius="12px"
      >
        {icon}
        <Text textStyle="md" display={{ base: "none", md: "block" }}>
          {title}
        </Text>
      </Center>
    </Link>
  );
};
