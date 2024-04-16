import { UniversityCardLayout } from "@/entities";
import { UniversityCard as UniversityCardType } from "@/widgets/univercity-cards/models";
import { useNavigate } from "react-router-dom";

type Props = {
  university: UniversityCardType;
};
export const UniversityCard = ({ university }: Props) => {
  const { name, logo, numberOfSpecialities, id } = university;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/university/${id}`);
  };

  return (
    <UniversityCardLayout
      onCardClick={onCardClick}
      name={name}
      logo={logo}
      numberOfSpecialities={numberOfSpecialities}
    />
  );
};
