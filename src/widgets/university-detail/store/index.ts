import { useQuery } from "react-query";
import { getUniversityDetail } from "@/widgets/university-detail/api";
import { convertKeysToCamelCase } from "@/shared/heplers.ts";
import {
  UniversityDetailRawType,
  UniversityDetailType,
} from "@/widgets/university-detail/models";

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
