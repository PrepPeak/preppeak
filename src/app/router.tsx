import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const SignInPage = lazy(() => import("@/pages/sign-in/ui"));
const HomePage = lazy(() => import("@/pages/home/ui"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);