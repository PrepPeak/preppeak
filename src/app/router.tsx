import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/widgets";

const SignInPage = lazy(() => import("@/pages/sign-in/ui"));
const HomePage = lazy(() => import("@/pages/home/ui"));
const QuizPage = lazy(() => import("@/pages/quiz/ui"));
const SubjectChoicePagePage = lazy(
  () => import("@/pages/subject-choice-page/ui"),
);
const SubjectQuizPage = lazy(() => import("@/pages/subject-quiz/ui"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-in", element: <SignInPage /> },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz/mock",
        element: <SubjectQuizPage />,
      },
      { path: "/subject-choose", element: <SubjectChoicePagePage /> },
      { path: "subject-choose", element: <SubjectChoicePagePage /> },
    ],
  },
]);
