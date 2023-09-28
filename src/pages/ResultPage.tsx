import React, { useEffect, useState } from 'react';
import great from '../assets/great.svg';
import ok from '../assets/ok.svg';
import bad from '../assets/bad.svg';
import { connect, ConnectedProps } from 'react-redux';
import SpinnerPage from '../components/SpinnerPage';
import HomeButton from '../components/HomeButton';

interface PropsType {
  questions: {
    id: number;
    question: string;
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
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
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
  }[] = [];

  const [isLoading, setIsLoading] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState(initialWrongAnswers);

  interface answersI {
    questId: number;
    answer: string;
  }

  interface questionI {
    id: number;
    question: string;
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
  }

  const isAnswerCorrect = (answerObj: answersI, questionObj: questionI) => {
    const selectedAnswer = answerObj.answer;
    const correctAnswers = Object.keys(questionObj.correct_answers).filter(
      (key) =>
        (questionObj.correct_answers as Record<string, string>)[key] === 'true'
    );

    // Check if the selected answer is one of the correct answers
    return correctAnswers.includes(selectedAnswer);
  };

  useEffect(() => {
    const quest = {
      id: 443,
      question: 'What is the HTML Tag for the largest heading',
      description: null,
      correct_answers: {
        answer_a_correct: 'false',
        answer_b_correct: 'false',
        answer_c_correct: 'true',
        answer_d_correct: 'false',
      },
    };

    const ans = {
      questId: 443,
      answer: 'answer_c_correct',
    };

    questions.map((question, index) => {
      if (!isAnswerCorrect(answers[index], question)) {
        setWrongAnswers((prevState) => [...prevState, question]);
      }
    });

    console.log(isAnswerCorrect(ans, quest));
    setTimeout(() => setIsLoading(false), 3000);
    console.log(wrongAnswers);
  }, []);

  const result = (wrongAnswers.length / answers.length) * 100;

  return (
    <section className='result-page'>
      <HomeButton />
      {isLoading ? (
        <SpinnerPage />
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
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
    };
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
