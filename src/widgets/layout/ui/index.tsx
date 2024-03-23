import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Drawer } from "@/widgets/layout/ui/drawer/ui";

type Props = {
  children: ReactNode;
};

export function AppLayout({ children }: Props) {
  return (
    <Box w="100%">
      <Drawer />
      <Box ml="320px" p="8px 24px" bg="gray.100" h="100vh">
        {children}
      </Box>
    </Box>
  );
}
