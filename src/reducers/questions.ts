const questionsReducerDefaultState: {
  id: number;
  question: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
  };
  correct_answer: string;
}[] = [];

export const questionsReducer = (
  state = questionsReducerDefaultState,
  action: {
    type: string;
    data: {
      id: number;
      question: string;
      answers: {
        answer_a: string;
        answer_b: string;
        answer_c: string;
        answer_d: string;
      };
      correct_answer: string;
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
