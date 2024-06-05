export type AnswerType = {
  id: number;
  text: string;
};

export type QuestionTypeRaw = {
  id: number;
  text: string;
  answers: AnswerType[];
  correct_answer_ids: number[];
  user_answer_ids: number[];
};

export type QuestionType = {
  id: number;
  text: string;
  answers: AnswerType[];
  correctAnswerIds: number[];
  userAnswerIds: number[];
};

export type QuestionsTypeRaw = {
  questions: QuestionTypeRaw[];
};

export type QuestionsType = {
  questions: QuestionType[];
};
