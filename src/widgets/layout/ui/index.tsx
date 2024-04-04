import { Box } from "@chakra-ui/react";
import { Drawer } from "@/widgets/layout/ui/drawer/ui";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Box w="100%">
      <Drawer />
      <Box ml="320px" p="8px 24px" bg="gray.100" h="100vh">
        <Outlet />
      </Box>
    </Box>
  );
}
