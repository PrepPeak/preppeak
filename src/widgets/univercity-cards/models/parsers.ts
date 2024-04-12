import {
  UniversityCard,
  UniversityCardRaw,
} from "@/widgets/univercity-cards/models/index.ts";

export const parseUniversityCard = (raw: UniversityCardRaw): UniversityCard => {
  const { number_of_specialities, ...rest } = raw;

  return {
    ...rest,
    numberOfSpecialities: number_of_specialities,
  };
};
