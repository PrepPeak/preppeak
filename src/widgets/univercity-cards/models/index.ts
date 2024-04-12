export type UniversityCardRaw = {
  id: string;
  name: string;
  logo: string;
  number_of_specialities: number;
};

export type UniversityCard = {
  id: string;
  name: string;
  logo: string;
  numberOfSpecialities: number;
};

export type GetUniversityCardsResponse = {
  universities: UniversityCardRaw[];
};
