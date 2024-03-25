import { FiAirplay, FiHome, FiLink, FiPhone } from "react-icons/fi";
import { NavLinkType } from "@/widgets/layout/ui/drawer/types/nav-link-types.ts";

export const useNavLinks = (): NavLinkType[] => {
  return [
    {
      title: "Home",
      link: "/",
      icon: <FiHome />,
    },
    {
      title: "About",
      link: "/about",
      icon: <FiLink />,
    },
    {
      title: "Contact",
      link: "/contact",
      icon: <FiPhone />,
    },
    {
      title: "Quiz",
      link: "/quiz",
      icon: <FiAirplay />,
    },
  ];
};
