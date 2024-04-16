import { extendTheme } from "@chakra-ui/react";
import components from "@/app/theme/components";
import foundations from "@/app/theme/foundations";

export const theme = extendTheme({
  ...foundations,
  components,
});
