export class Quizz {
  name: string;
  questions: Question[] = [];
}

export interface Question {
  label: string;
}
