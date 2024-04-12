import { AxiosResponse } from "axios";
import { GetUniversityCardsResponse } from "@/widgets/univercity-cards/models";
import { request } from "@/shared";

export const getUniversityCards = (): Promise<
  AxiosResponse<GetUniversityCardsResponse>
> => {
  const url = "/university/";

  return request.get(url);
};
