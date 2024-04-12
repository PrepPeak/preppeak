import { AxiosResponse } from "axios";
import { UniversityDetailRawType } from "@/widgets/university-detail/models";
import { request } from "@/shared";

export const getUniversityDetail = (
  id: string,
): Promise<AxiosResponse<UniversityDetailRawType>> => {
  const url = `/university/${id}`;

  return request.get(url);
};
