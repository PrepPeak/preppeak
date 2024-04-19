import { FiAirplay, FiHome, FiLink } from "react-icons/fi";
import { NavLinkType } from "@/widgets/layout/ui/drawer/types/nav-link-types.ts";
import { BsFileBarGraph } from "react-icons/bs";

export const useNavLinks = (): NavLinkType[] => {
  return [
    {
      title: "Список университетов",
      link: "/",
      icon: <FiHome />,
    },
    {
      title: "Дашборды",
      link: "/dashboards",
      icon: <FiLink />,
    },
    {
      title: "Лидерборд",
      link: "/leaderboard",
      icon: <BsFileBarGraph />,
    },
    {
      title: "Quiz",
      link: "/quiz",
      icon: <FiAirplay />,
    },
  ];
};
