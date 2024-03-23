import { AppLayout, UniversityCards } from "@/widgets";
import { PageTitle } from "@/shared";

export const HomePage = () => {
  return (
    <AppLayout>
      <PageTitle>Шансы поступления</PageTitle>
      <UniversityCards />
    </AppLayout>
  );
};

export default HomePage;
