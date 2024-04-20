import { Box, Text } from "@chakra-ui/react";
import { Speciality } from "@/widgets/university-detail/store";

export const UniversitySpecialities = (speciality: Speciality) => {
  return (
    <Box
      bgColor="white"
      p="24px"
      borderRadius="12px"
      boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
      h="fit-content"
    >
      <Text textStyle="md" fontWeight="semibold">
        {speciality?.name}
      </Text>
      <Text textStyle="sm" color="gray.500">
        {speciality?.code}
      </Text>
      <Text textStyle="sm" color="blue.500" fontWeight="semibold">
        Кол-во грантов: {speciality?.grantCount} Мин. балл на грант:{" "}
        {speciality?.minGrade}
      </Text>
    </Box>
  );
};
