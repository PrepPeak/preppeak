import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@remix-run/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@/app/theme";

type Props = {
  router: Router;
  client: QueryClient;
};

export const Providers = ({ router, client }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
