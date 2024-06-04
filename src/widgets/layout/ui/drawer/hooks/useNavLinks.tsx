import { FiAirplay, FiHome, FiLink } from "react-icons/fi";
import { NavLinkType } from "@/widgets/layout/ui/drawer/types/nav-link-types.ts";
import { BsFileBarGraph } from "react-icons/bs";
import { useBreakpointValue } from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";
import { IoDice } from "react-icons/io5";

export const useNavLinks = (): NavLinkType[] => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return [
    {
      title: "Главная",
      link: "/",
      icon: <FiHome size={isMobile ? "24px" : "16px"} />,
    },
    {
      title: "Список университетов",
      link: "/university-list",
      icon: <AiFillBank size={isMobile ? "24px" : "16px"} />,
    },
    {
      title: "Шансы поступления",
      link: "/chances",
      icon: <IoDice size={isMobile ? "24px" : "16px"} />,
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
