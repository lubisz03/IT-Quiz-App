import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { quizSettingsReducer } from '../reducers/quizSettings';
import { questionsReducer } from '../reducers/questions';
import { answersReducer } from '../reducers/answers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    quizSettings: quizSettingsReducer,
    questions: questionsReducer,
    answers: answersReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
