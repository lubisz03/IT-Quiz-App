import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { connect, ConnectedProps } from 'react-redux';
import { SetQuestions, SetQuestionsAction } from '../actions/actions';
import { Carousel, ProgressBar } from 'react-bootstrap';
import Question from '../components/Question';
import HomeButton from '../components/HomeButton';
import SpinnerPage from '../components/SpinnerPage';

interface PropsType {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
  questions: {
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
  }[];
  answers: {
    questId: number;
    answer: string;
  }[];
  SetQuestions: typeof SetQuestions;
}

const QuizPage: React.FC<PropsType> = ({
  quizSettings,
  questions,
  answers,
  SetQuestions,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < questions.length) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const URL = `${process.env.API_URL}${process.env.API_KEY}${quizSettings.numberOfQuest}${quizSettings.category}${quizSettings.difficulty}`;

    axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        SetQuestions(data);
      })
      .then(() => {
        setTimeout(() => setIsLoading(false), 3000);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section className='quiz-page'>
      <HomeButton />
      {isLoading ? (
        <SpinnerPage />
      ) : (
        <>
          <ProgressBar
            now={((index + 1) / questions.length) * 100}
            variant='light-blue'
          />
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            wrap={false}
            interval={null}
            touch={false}>
            {questions.map((quest) => (
              <Carousel.Item key={quest.id}>
                <Question question={quest} />
              </Carousel.Item>
            ))}
          </Carousel>

          {index != 0 && (
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className='btn btn--control btn--control-prev'>
              &#8249;
            </button>
          )}
          {index + 1 <= answers.length &&
            (index + 1 != questions.length ? (
              <button
                onClick={handleNext}
                className='btn btn--control btn--control-next'>
                &#8250;
              </button>
            ) : (
              <NavLink to='/result'>
                <button className='btn btn--control btn--control-end'>
                  End
                </button>
              </NavLink>
            ))}
        </>
      )}
    </section>
  );
};

const mapStateToProps = (state: {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
  questions: {
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
  }[];
  answers: {
    questId: number;
    answer: string;
  }[];
}) => {
  return {
    quizSettings: state.quizSettings,
    questions: state.questions,
    answers: state.answers,
  };
};

const connector = connect(mapStateToProps, { SetQuestions });

export default connector(QuizPage);
