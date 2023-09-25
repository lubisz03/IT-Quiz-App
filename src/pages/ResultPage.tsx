import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

interface PropsType {
  questions: {
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
  answers: {
    questId: number;
    answer: string;
  }[];
}

const ResultPage: React.FC<PropsType> = ({ questions, answers }) => {
  const initialWrongAnswers: {
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

  const [isLoading, setIsLoading] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState(initialWrongAnswers);

  useEffect(() => {
    questions.forEach((question, index) => {
      if (answers[index].answer !== question.correct_answer) {
        setWrongAnswers((prevState) => [...prevState, question]);
      }
    });

    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  console.log(wrongAnswers);

  return (
    <section className='result-page'>
      {!isLoading && (
        <div className='result__body'>
          <div className='heading__result result__heading'>
            <div className='heading__result-icon'>
              <img src='' alt='' />
            </div>
            <div className='heading__result-main'>Congrats!</div>
            <div className='heading__result-sub'>90%</div>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state: {
  questions: {
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
  answers: {
    questId: number;
    answer: string;
  }[];
}) => {
  return {
    questions: state.questions,
    answers: state.answers,
  };
};

const connector = connect(mapStateToProps, {});

export default connector(ResultPage);
