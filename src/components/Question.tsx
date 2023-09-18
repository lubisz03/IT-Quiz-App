import React from 'react';

interface PropsType {
  question: {
    id: number;
    question: string;
    answers: {
      answer_a: string;
      answer_b: string;
      answer_c: string;
      answer_d: string;
    };
  };
}

const Question: React.FC<PropsType> = ({ question }) => {
  return (
    <div className='question'>
      <h3 className='question__content'>{question.question}</h3>
      <form className='question__answs'>
        <div className='question__answ-group'>
          <input type='radio' name='answ' id='answ_a' />
          <label htmlFor='answ_a'>{question.answers.answer_a}</label>
        </div>
        <div className='question__answ-group'>
          <input type='radio' name='answ' id='answ_b' />
          <label htmlFor='answ_b'>{question.answers.answer_b}</label>
        </div>

        <div className='question__answ-group'>
          <input type='radio' name='answ' id='answ_c' />
          <label htmlFor='answ_c'>{question.answers.answer_c}</label>
        </div>

        <div className='question__answ-group'>
          <input type='radio' name='answ' id='answ_d' />
          <label htmlFor='answ_d'>{question.answers.answer_d}</label>
        </div>
      </form>
    </div>
  );
};

export default Question;
