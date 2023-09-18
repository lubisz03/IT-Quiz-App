const quizSettingsReducerDefaultState: {
  difficulty: string;
  category: string;
  numberOfQuest: string;
} = {
  difficulty: '&difficulty=easy',
  category: '',
  numberOfQuest: '&limit=20',
};

export const quizSettingsReducer = (
  state = quizSettingsReducerDefaultState,
  action: {
    type: string;
    data: {
      difficulty: string;
      category: string;
      numberOfQuest: string;
    };
  }
) => {
  switch (action.type) {
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.data.difficulty };
    case 'SET_CATEGORY':
      if (action.data.category == '&tags=random') {
        return { ...state, category: '' };
      } else {
        return { ...state, category: action.data.category };
      }
    case 'SET_NUM_OF_QUEST':
      return { ...state, numberOfQuest: action.data.numberOfQuest };
    default:
      return state;
  }
};
