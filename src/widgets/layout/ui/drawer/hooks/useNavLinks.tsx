import { FiAirplay, FiHome, FiLink } from "react-icons/fi";
import { NavLinkType } from "@/widgets/layout/ui/drawer/types/nav-link-types.ts";
import { BsFileBarGraph } from "react-icons/bs";
import { useBreakpointValue } from "@chakra-ui/react";

export const useNavLinks = (): NavLinkType[] => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return [
    {
      title: "Список университетов",
      link: "/",
      icon: <FiHome size={isMobile ? "24px" : "16px"} />,
    },
    {
      title: "Дашборды",
      link: "/dashboards",
      icon: <FiLink size={isMobile ? "24px" : "16px"} />,
    },
    {
      title: "Лидерборд",
      link: "/leaderboard",
      icon: <BsFileBarGraph size={isMobile ? "24px" : "16px"} />,
    },
    {
      title: "Quiz",
      link: "/quiz",
      icon: <FiAirplay size={isMobile ? "24px" : "16px"} />,
    },
  ];
};
