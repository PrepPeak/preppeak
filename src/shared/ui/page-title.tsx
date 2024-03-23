import { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";
export const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <Text fontSize="24px" fontWeight="bold" mt="24px">
      {children}
    </Text>
  );
};
