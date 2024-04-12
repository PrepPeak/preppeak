import { UniversityCardLayout } from "@/entities";
import { UniversityCard as UniversityCardType } from "@/widgets/univercity-cards/models";

type Props = {
  university: UniversityCardType;
};
export const UniversityCard = ({ university }: Props) => {
  const { name, logo, numberOfSpecialities } = university;
  return (
    <UniversityCardLayout
      name={name}
      logo={logo}
      numberOfSpecialities={numberOfSpecialities}
    />
  );
};
