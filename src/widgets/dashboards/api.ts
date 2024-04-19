import { request } from "@/shared";
import { AxiosResponse } from "axios";
import {
  DashboardReportRaw,
  SubjectResponse,
} from "@/widgets/dashboards/models.ts";

export const getDashboardReport = (): Promise<
  AxiosResponse<DashboardReportRaw>
> => {
  const url = "/dashboard/report/";

  return request.get(url);
};

export const getDashboardSubjects = (): Promise<
  AxiosResponse<SubjectResponse>
> => {
  const url = "/dashboard/subjects/";

  return request.get(url);
};
