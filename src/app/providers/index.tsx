import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@remix-run/router";
import { theme } from "@/app/theme";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MathJaxContext } from "better-react-mathjax";

type Props = {
  router: Router;
  client: QueryClient;
};

export const Providers = ({ router, client }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Suspense fallback={<div>Loading...</div>}>
          <MathJaxContext>
            <RouterProvider router={router} />
          </MathJaxContext>
        </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
