const questionsReducerDefaultState: {
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
}[] = [];

export const questionsReducer = (
  state = questionsReducerDefaultState,
  action: {
    type: string;
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
) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return [...action.data];
    case 'REMOVE_QUESTIONS':
      return [];
    default:
      return state;
  }
};
