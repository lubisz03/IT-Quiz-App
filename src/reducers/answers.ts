const answersReducerDefaultState: {
  questId: number;
  answer: string;
}[] = [];

export const answersReducer = (
  state = answersReducerDefaultState,
  action: {
    type: string;
    data: {
      questId: number;
      answer: string;
    };
  }
) => {
  switch (action.type) {
    case 'SET_ANSWER':
      const existingObjectIndex = state.findIndex(
        (obj) => obj.questId === action.data.questId
      );

      if (existingObjectIndex !== -1) {
        state[existingObjectIndex] = action.data;
        return [...state];
      } else {
        return [...state, action.data];
      }
    case 'CLEAR_ANSWERS':
      return [];
    default:
      return state;
  }
};
