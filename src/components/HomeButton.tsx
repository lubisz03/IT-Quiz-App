import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { connect, ConnectedProps } from 'react-redux';
import {
  RemoveQuestions,
  RemoveQuestionsAction,
  ClearAnswers,
  ClearAnswersAction,
} from '../actions/actions';

interface PropsType {
  RemoveQuestions: typeof RemoveQuestions;
  ClearAnswers: typeof ClearAnswers;
}

const HomeButton: React.FC<PropsType> = ({ RemoveQuestions, ClearAnswers }) => {
  const handleClick = (): void => {
    RemoveQuestions();
    ClearAnswers();
  };

  return (
    <NavLink to='/' className='btn--home'>
      <button className='btn btn--home__body' onClick={() => handleClick()}>
        <AiFillHome />
      </button>
    </NavLink>
  );
};

const mapStateToProps = (state: {}) => {
  return {};
};

const connector = connect(mapStateToProps, { RemoveQuestions, ClearAnswers });

export default connector(HomeButton);
