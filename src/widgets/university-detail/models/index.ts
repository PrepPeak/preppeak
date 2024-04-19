export type UniversityDetailRawType = {
  id: string;
  name: string;
  logo: string;
  code: string;
  address: string;
  description: string;
  price: number;
  rating: number;
  dormitory: boolean;
  military_faculty: boolean;
  students_number: number;
  status: boolean;
  type: string;
  instagram: string;
  facebook: string;
  phone: string;
  url: string;
};

export type UniversityDetailType = Omit<
  UniversityDetailRawType,
  "military_faculty" | "students_number"
> & {
  militaryFaculty: boolean;
  studentsNumber: number;
};
