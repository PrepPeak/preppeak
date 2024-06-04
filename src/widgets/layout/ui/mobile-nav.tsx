import { useNavLinks } from "@/widgets/layout/ui/drawer/hooks/useNavLinks.tsx";
import { Box } from "@chakra-ui/react";
import { NavLink } from "@/widgets/layout/ui/drawer/ui/nav-link.tsx";

export const MobileNav = () => {
  const navLinks = useNavLinks();

  return (
    <Box
      display={{ base: "flex", lg: "none" }}
      p="12px 24px"
      w="100%"
      justifyContent="space-between"
      borderTop="0.6px solid"
      borderColor="gray.200"
      position="fixed"
      bottom={0}
      zIndex={999}
      bgColor="white"
    >
      {navLinks.map((navLink) => (
        <NavLink key={navLink.title} {...navLink} />
      ))}
    </Box>
  );
};
