import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClick = (): void => {
    RemoveQuestions();
    ClearAnswers();
    navigate('/');
  };

  return (
    <button className='btn btn--home' onClick={() => handleClick()}>
      <AiFillHome />
    </button>
  );
};

const mapStateToProps = (state: {}) => {
  return {};
};

const connector = connect(mapStateToProps, { RemoveQuestions, ClearAnswers });

export default connector(HomeButton);
