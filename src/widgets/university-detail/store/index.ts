import { useQuery } from "react-query";
import { getUniversityDetail } from "@/widgets/university-detail/api";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";
import {
  UniversityDetailRawType,
  UniversityDetailType,
} from "@/widgets/university-detail/models";
import { AxiosResponse } from "axios";
import { request } from "@/shared";

export const useUniversityDetail = (id: string) => {
  const { data, isLoading } = useQuery(
    "universityDetail",
    () =>
      getUniversityDetail(id).then((res) =>
        convertKeysToCamelCase<UniversityDetailRawType, UniversityDetailType>(
          res.data,
        ),
      ),
    {
      enabled: !!id,
    },
  );

  return {
    data,
    isLoading,
  };
};
export type SpecialityRaw = {
  id: number;
  name: string;
  min_grade: number;
  grant_count: number;
  code: string;
};

export type Speciality = {
  id: number;
  name: string;
  minGrade: number;
  grantCount: number;
  code: string;
};

export type SpecialityResponseRaw = {
  specialities: SpecialityRaw[];
};

export type SpecialityResponse = {
  specialities: Speciality[];
};

export const getSpecialities = (
  id: string,
): Promise<AxiosResponse<SpecialityResponseRaw>> => {
  const url = `/university/${id}/specialities/`;

  return request.get(url);
};

export const useSpecialities = (id: string) => {
  const { data, isLoading } = useQuery<SpecialityResponse>(
    "specialities",
    () =>
      getSpecialities(id).then((res) =>
        convertKeysToCamelCase<SpecialityResponseRaw, SpecialityResponse>(
          res.data,
        ),
      ),
    {
      enabled: !!id,
    },
  );

  return {
    specialities: data?.specialities || [],
    isLoading,
  };
};
