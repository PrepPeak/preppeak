export type DashboardReportRaw = {
  streak_week_day: string;
  days_until_next_test: number;
  goal_points: number;
  studied_hours: number;
  total_hours: number;
};

export type DashboardReport = {
  streakWeekDay: number;
  daysUntilNextTest: number;
  goalPoints: number;
  studiedHours: number;
  totalHours: number;
};

export type Subject = {
  id: number;
  name: string;
  percentage: number;
};

export type SubjectResponse = {
  subjects: Subject[];
};

export const daysOfWeekArray = [
  {
    id: 1,
    week: "Пн",
  },
  {
    id: 2,
    week: "Вт",
  },
  {
    id: 3,
    week: "Ср",
  },
  {
    id: 4,
    week: "Чт",
  },
  {
    id: 5,
    week: "Пт",
  },
  {
    id: 6,
    week: "Сб",
  },
  {
    id: 7,
    week: "Вс",
  },
];
