import { useQuery } from "react-query";
import { getDashboardReport, getDashboardSubjects } from "./api.ts";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";
import {
  DashboardReport,
  DashboardReportRaw,
  SubjectResponse,
} from "@/widgets/dashboards/models.ts";

export const useDashboardReport = () => {
  const { data, isLoading } = useQuery<DashboardReport>("dashboardReport", () =>
    getDashboardReport().then((res) =>
      convertKeysToCamelCase<DashboardReportRaw, DashboardReport>(res.data),
    ),
  );

  return {
    report: data,
    isLoading,
  };
};

export const useDashboardSubjects = () => {
  const { data, isLoading } = useQuery<SubjectResponse>(
    "dashboardSubjects",
    () => getDashboardSubjects().then((res) => res.data),
  );

  return {
    subjects: data?.subjects || [],
    isLoading,
  };
};
