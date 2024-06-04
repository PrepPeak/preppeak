import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Drawer } from "@/widgets/layout/ui/drawer/ui";
import { Outlet } from "react-router-dom";
import { MobileNav } from "@/widgets/layout/ui/mobile-nav.tsx";

export function AppLayout() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box w="100%" overflowY="auto">
      {!isMobile && <Drawer />}
      <Box
        ml={{ base: "0", md: "320px" }}
        p={{ base: "8px 24px 100px", md: "8px 24px" }}
        bgColor="rgba(0, 0, 0, 0.01)"
        h="100vh"
        overflowY="auto"
      >
        <Outlet />
      </Box>
      <MobileNav />
    </Box>
  );
}
