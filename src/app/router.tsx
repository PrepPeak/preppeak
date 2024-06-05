import { lazy, ReactNode, useEffect, useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/widgets";

const SignInPage = lazy(() => import("@/pages/sign-in/ui"));
const UniversityList = lazy(() => import("@/pages/university-list/ui"));
const QuizPage = lazy(() => import("@/pages/quiz/ui"));
const RegisterPage = lazy(() => import("@/pages/register/ui"));
const SubjectChoicePagePage = lazy(
  () => import("@/pages/subject-choice-page/ui"),
);
const SubjectQuizPage = lazy(() => import("@/pages/subject-quiz/ui"));
const UniversityDetailPage = lazy(() => import("@/pages/university-detail"));
const DashboardsPage = lazy(() => import("@/pages/dashboards/"));
const LeaderboardPage = lazy(() => import("@/pages/leaderboard/"));
const ForParentsPage = lazy(() => import("@/pages/for-parents/"));
const HomePage = lazy(() => import("@/pages/home/"));
const ChancesPage = lazy(() => import("@/pages/chances/"));
const Profile = lazy(() => import("@/pages/profile/"));

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
  { path: "/home", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <UniversityList /> },
      { path: "/university-list", element: <UniversityList /> },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz/:subjectId",
        element: <SubjectQuizPage />,
      },
      { path: "/subject-choose", element: <SubjectChoicePagePage /> },
      { path: "/university/:id", element: <UniversityDetailPage /> },
      { path: "/chances", element: <ChancesPage /> },
      { path: "/dashboards", element: <DashboardsPage /> },
      { path: "/leaderboard", element: <LeaderboardPage /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/for-parents", element: <ForParentsPage /> },
]);
