import { lazy, ReactNode, useEffect, useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/widgets";

const SignInPage = lazy(() => import("@/pages/sign-in/ui"));
const HomePage = lazy(() => import("@/pages/home/ui"));
const QuizPage = lazy(() => import("@/pages/quiz/ui"));
const RegisterPage = lazy(() => import("@/pages/register/ui"));
const SubjectChoicePagePage = lazy(
  () => import("@/pages/subject-choice-page/ui"),
);
const SubjectQuizPage = lazy(() => import("@/pages/subject-quiz/ui"));

type Props = {
  children: ReactNode;
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true); // Added loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setChecking(false); // Auth check completed
  }, []);

  return { isLoggedIn, checking };
};

const ProtectedRoute = ({ children }: Props) => {
  const { isLoggedIn, checking } = useAuth();

  if (checking) {
    // You can return a loader here or null if you prefer to wait silently
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export const router = createBrowserRouter([
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz/:subjectId",
        element: <SubjectQuizPage />,
      },
      { path: "/subject-choose", element: <SubjectChoicePagePage /> },
      { path: "subject-choose", element: <SubjectChoicePagePage /> },
    ],
  },
]);
