import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SetAnswer, SetAnswerAction } from '../actions/actions';

interface PropsType {
  question: {
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
  };
  SetAnswer: typeof SetAnswer;
}

const Question: React.FC<PropsType> = ({ question, SetAnswer }) => {
  return (
    <div className='question'>
      <h3 className='question__content heading-tertiary'>
        {question.question}
      </h3>
      <form className='question__answs'>
        <div className='question__answ-group'>
          <input type='radio' name='answ' id={`answ_a_${question.id}`} />
          <label
            htmlFor={`answ_a_${question.id}`}
            onClick={() =>
              SetAnswer({
                questId: question.id,
                answer: 'answer_a_correct',
              })
            }>
            {question.answers.answer_a}
          </label>
        </div>
        <div className='question__answ-group'>
          <input type='radio' name='answ' id={`answ_b_${question.id}`} />
          <label
            htmlFor={`answ_b_${question.id}`}
            onClick={() =>
              SetAnswer({
                questId: question.id,
                answer: 'answer_b_correct',
              })
            }>
            {question.answers.answer_b}
          </label>
        </div>

        {question.answers.answer_c && (
          <div className='question__answ-group'>
            <input type='radio' name='answ' id={`answ_c_${question.id}`} />
            <label
              htmlFor={`answ_c_${question.id}`}
              onClick={() =>
                SetAnswer({
                  questId: question.id,
                  answer: 'answer_c_correct',
                })
              }>
              {question.answers.answer_c}
            </label>
          </div>
        )}

        {question.answers.answer_d && (
          <div className='question__answ-group'>
            <input type='radio' name='answ' id={`answ_d_${question.id}`} />
            <label
              htmlFor={`answ_d_${question.id}`}
              onClick={() =>
                SetAnswer({
                  questId: question.id,
                  answer: 'answer_d_correct',
                })
              }>
              {question.answers.answer_d}
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state: {}) => {
  return {};
};

const connector = connect(mapStateToProps, {
  SetAnswer,
});

export default connector(Question);
