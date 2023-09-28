import {
  SET_DIFFICULTY,
  SET_CATEGORY,
  SET_NUM_OF_QUEST,
  SET_QUESTIONS,
  REMOVE_QUESTIONS,
  SET_ANSWER,
  CLEAR_ANSWERS,
} from './actionTypes';

export interface SetDifficultyAction {
  type: typeof SET_DIFFICULTY;
  data: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
}

export interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  data: {
    category: string;
  };
}

export interface SetNumOfQuestAction {
  type: typeof SET_NUM_OF_QUEST;
  data: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
}

export interface SetQuestionsAction {
  type: typeof SET_QUESTIONS;
  data: {
    id: number;
    question: string;
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
    answers: {
      answer_a: string;
      answer_b: string;
      answer_c: string;
      answer_d: string;
    };
  }[];
}

export interface RemoveQuestionsAction {
  type: typeof REMOVE_QUESTIONS;
}

export interface SetAnswerAction {
  type: typeof SET_ANSWER;
  data: {
    questId: number;
    answer: string;
  };
}

export interface ClearAnswersAction {
  type: typeof CLEAR_ANSWERS;
}

export const SetDifficulty = (data: {
  difficulty: string;
  category: string;
  numberOfQuest: string;
}): SetDifficultyAction => {
  return {
    type: SET_DIFFICULTY,
    data,
  };
};

export const SetCategory = (data: {
  difficulty: string;
  category: string;
  numberOfQuest: string;
}): SetCategoryAction => {
  return {
    type: SET_CATEGORY,
    data,
  };
};

export const SetNumOfQuest = (data: {
  difficulty: string;
  category: string;
  numberOfQuest: string;
}): SetNumOfQuestAction => {
  return {
    type: SET_NUM_OF_QUEST,
    data,
  };
};

export const SetQuestions = (
  data: {
    id: number;
    question: string;
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
    answers: {
      answer_a: string;
      answer_b: string;
      answer_c: string;
      answer_d: string;
    };
  }[]
): SetQuestionsAction => {
  return {
    type: SET_QUESTIONS,
    data,
  };
};

export const RemoveQuestions = (): RemoveQuestionsAction => {
  return {
    type: REMOVE_QUESTIONS,
  };
};

export const SetAnswer = (data: {
  questId: number;
  answer: string;
}): SetAnswerAction => {
  return {
    type: SET_ANSWER,
    data,
  };
};

export const ClearAnswers = (): ClearAnswersAction => {
  return {
    type: CLEAR_ANSWERS,
  };
};
