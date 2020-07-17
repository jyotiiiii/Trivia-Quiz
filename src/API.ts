import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
//combine correct_answer and incorrect_answers into one array to map in UI
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum Category {
  ANIMALS = 27,
  ART = 25,
  CELEBRITIES = 26,
  FILM = 11,
  GENERAL = 9,
  HISTORY = 23,
  TELEVISION = 14,
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: Category
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
