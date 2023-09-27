import React, { useEffect, useState } from 'react';
import great from '../assets/great.svg';
import ok from '../assets/ok.svg';
import bad from '../assets/bad.svg';
import { connect, ConnectedProps } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';

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

  interface answersProps {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
  }

  // function findTrueProperty(obj: answersProps): keyof answersProps | null {
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key) && obj[key] === 'true') {
  //       return key as keyof answersProps;
  //     }
  //   }
  //   return null; // Return null if no property has a value of 'true'
  // }

  useEffect(() => {
    // questions.forEach((question, index) => {
    //   if (answers[index].answer !== correctAnsw) {
    //     setWrongAnswers((prevState) => [...prevState, question]);
    //   }
    // });

    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const result = (wrongAnswers.length / answers.length) * 100;

  return (
    <section className='result-page'>
      <HomeButton />
      {isLoading ? (
        <Spinner
          animation='border'
          style={{ width: '10rem', height: '10rem' }}
        />
      ) : (
        <div className='heading-result result-page__heading'>
          {result < 50 && (
            <>
              <img src={bad} alt='bad' className='heading-result__icon' />
              <h1
                className='heading-result__main'
                style={{ color: 'orangered' }}>
                Bad!
              </h1>
            </>
          )}
          {result >= 50 && result < 80 && (
            <>
              <img src={ok} alt='ok' className='heading-result__icon' />
              <h1 className='heading-result__main' style={{ color: 'green' }}>
                Ok!
              </h1>
            </>
          )}
          {result >= 80 && (
            <>
              <img src={great} alt='great' className='heading-result__icon' />
              <h1 className='heading-result__main' style={{ color: 'gold' }}>
                Great!
              </h1>
            </>
          )}
          <h3 className='heading-result__sub'>
            {(wrongAnswers.length / answers.length) * 100}%
          </h3>
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
