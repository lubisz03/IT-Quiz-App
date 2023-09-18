import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SetQuestions, SetQuestionsAction } from '../actions/actions';
import { Carousel } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Question from '../components/Question';

interface PropsType {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
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
  SetQuestions: typeof SetQuestions;
}

const QuizPage: React.FC<PropsType> = ({
  quizSettings,
  questions,
  SetQuestions,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const URL = `${process.env.API_URL}${process.env.API_KEY}${quizSettings.numberOfQuest}${quizSettings.category}${quizSettings.difficulty}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => SetQuestions(data))
      .then(() => setIsLoading(false))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Improve questions data performance

  return (
    <section className='quiz-page'>
      {!isLoading && (
        <>
          <ProgressBar
            now={((index + 1) / questions.length) * 100}
            variant='light-blue'
          />
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            wrap={false}
            interval={null}>
            {questions.map((quest) => (
              <Carousel.Item key={quest.id}>
                <Question question={quest} />
              </Carousel.Item>
            ))}
          </Carousel>
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
    answers: {
      answer_a: string;
      answer_b: string;
      answer_c: string;
      answer_d: string;
    };
    correct_answer: string;
  }[];
}) => {
  return {
    quizSettings: state.quizSettings,
    questions: state.questions,
  };
};

const connector = connect(mapStateToProps, { SetQuestions });

export default connector(QuizPage);
