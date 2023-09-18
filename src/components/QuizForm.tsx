import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  SetDifficulty,
  SetDifficultyAction,
  SetNumOfQuest,
  SetNumOfQuestAction,
} from '../actions/actions';

interface PropsType {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
  SetDifficulty: typeof SetDifficulty;
  SetNumOfQuest: typeof SetNumOfQuest;
}

const QuizForm: React.FC<PropsType> = ({
  quizSettings,
  SetDifficulty,
  SetNumOfQuest,
}) => {
  return (
    <form action='#' className='quiz-form'>
      <div className='quiz-form__section'>
        <p className='quiz-form__title'>Difficulty:</p>
        <div className='quiz-form__options' id='difficulty'>
          <div className='quiz-form__group'>
            <input
              type='radio'
              name='difficulty'
              id='easy'
              value='easy'
              onChange={() =>
                SetDifficulty({
                  ...quizSettings,
                  difficulty: '&difficulty=easy',
                })
              }
              checked={quizSettings.difficulty == '&difficulty=easy'}
            />
            <label htmlFor='easy'>Easy</label>
          </div>

          <div className='quiz-form__group'>
            <input
              type='radio'
              name='difficulty'
              id='medium'
              value='medium'
              onChange={() =>
                SetDifficulty({
                  ...quizSettings,
                  difficulty: '&difficulty=medium',
                })
              }
              checked={quizSettings.difficulty == '&difficulty=medium'}
            />
            <label htmlFor='medium'>Medium</label>
          </div>

          <div className='quiz-form__group'>
            <input
              type='radio'
              name='difficulty'
              id='hard'
              value='hard'
              onChange={() =>
                SetDifficulty({
                  ...quizSettings,
                  difficulty: '&difficulty=hard',
                })
              }
              checked={quizSettings.difficulty == '&difficulty=hard'}
            />
            <label htmlFor='hard'>Hard</label>
          </div>

          <div className='quiz-form__group'>
            <input
              type='radio'
              name='difficulty'
              id='random'
              value=''
              onChange={() =>
                SetDifficulty({ ...quizSettings, difficulty: '' })
              }
              checked={quizSettings.difficulty == ''}
            />
            <label htmlFor='random'>Random</label>
          </div>
        </div>
      </div>
      <div className='quiz-form__section'>
        <p className='quiz-form__title'>Questions Number:</p>
        <div className='quiz-form__options' id='questNum'>
          <div className='quiz-form__group'>
            <input
              type='radio'
              name='questNum'
              id='10'
              value='10'
              onChange={() =>
                SetNumOfQuest({ ...quizSettings, numberOfQuest: '&limit=10' })
              }
              checked={quizSettings.numberOfQuest == '&limit=10'}
            />
            <label htmlFor='10'>10</label>
          </div>

          <div className='quiz-form__group'>
            <input
              type='radio'
              name='questNum'
              id='15'
              value='15'
              onChange={() =>
                SetNumOfQuest({ ...quizSettings, numberOfQuest: '&limit=15' })
              }
              checked={quizSettings.numberOfQuest == '&limit=15'}
            />
            <label htmlFor='15'>15</label>
          </div>

          <div className='quiz-form__group'>
            <input
              type='radio'
              name='questNum'
              id='20'
              value='20'
              onChange={() =>
                SetNumOfQuest({ ...quizSettings, numberOfQuest: '&limit=20' })
              }
              checked={quizSettings.numberOfQuest == '&limit=20'}
            />
            <label htmlFor='20'>20</label>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state: {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
}) => {
  return {
    quizSettings: state.quizSettings,
  };
};

const connector = connect(mapStateToProps, {
  SetDifficulty,
  SetNumOfQuest,
});

export default connector(QuizForm);
