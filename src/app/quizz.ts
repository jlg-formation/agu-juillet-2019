export class Quizz {
  name: string;
  questions: Question[] = [];
}

export interface Question {
  label: string;
  correctAnswer: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
}
