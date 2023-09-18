import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import codeImg from '../assets/programming.jpg';
import devopsImg from '../assets/devops.jpg';
import networkingImg from '../assets/networking.jpg';
import cloudImg from '../assets/cloud.jpg';
import dockerImg from '../assets/docker.jpg';
import kubernetesImg from '../assets/kubernetes.jpg';
import linuxImg from '../assets/linux.jpg';
import jsImg from '../assets/js.jpg';
import pythonImg from '../assets/python.jpg';
import phpImg from '../assets/php.jpg';
import sqlImg from '../assets/sql.jpg';
import randomImg from '../assets/random.jpg';
import SettingsModal from './SettingsModal';
import { connect, ConnectedProps } from 'react-redux';
import { SetCategory, SetCategoryAction } from '../actions/actions';

interface PropsType {
  quizSettings: {
    difficulty: string;
    category: string;
    numberOfQuest: string;
  };
  SetCategory: typeof SetCategory;
}

const CardsGrid: React.FC<PropsType> = ({ quizSettings, SetCategory }) => {
  const cardData = [
    {
      title: 'html',
      image: `${codeImg}`,
    },
    {
      title: 'bash',
      image: `${devopsImg}`,
    },
    {
      title: 'wordpress',
      image: `${networkingImg}`,
    },
    {
      title: 'laravel',
      image: `${cloudImg}`,
    },
    {
      title: 'docker',
      image: `${dockerImg}`,
    },
    {
      title: 'kubernetes',
      image: `${kubernetesImg}`,
    },
    {
      title: 'linux',
      image: `${linuxImg}`,
    },
    {
      title: 'javascript',
      image: `${jsImg}`,
    },
    {
      title: 'devops',
      image: `${pythonImg}`,
    },
    {
      title: 'php',
      image: `${phpImg}`,
    },
    {
      title: 'mysql',
      image: `${sqlImg}`,
    },
    {
      title: 'random',
      image: `${randomImg}`,
    },
  ];

  // Initialize a state to track whether each row should be animated
  const [animateRows, setAnimateRows] = useState<boolean[]>(
    cardData.map(() => false)
  );

  // Create a function to check if an element is in the viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= window.innerHeight;
  };

  // Use the useEffect hook to check initial visibility and add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Loop through each card and check if it's in the viewport
      cardData.forEach((_, idx) => {
        const card = document.getElementById(`card-${idx}`);
        if (card && isElementInViewport(card) && !animateRows[idx]) {
          setAnimateRows((prev) => {
            const newAnimateRows = [...prev];
            newAnimateRows[idx] = true;
            return newAnimateRows;
          });
        }
      });
    };

    // Check initial visibility
    cardData.forEach((_, idx) => {
      const card = document.getElementById(`card-${idx}`);
      if (card && isElementInViewport(card) && !animateRows[idx]) {
        setAnimateRows((prev) => {
          const newAnimateRows = [...prev];
          newAnimateRows[idx] = true;
          return newAnimateRows;
        });
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateRows, cardData]);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className='g-5'>
        {cardData.map((data, idx) => (
          <Col key={idx}>
            <motion.div
              id={`card-${idx}`}
              initial={animateRows[idx] ? 'visible' : 'hidden'}
              animate={animateRows[idx] ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}>
              <SettingsModal title={data.title}>
                <Card
                  className='card'
                  onClick={() =>
                    SetCategory({
                      ...quizSettings,
                      category: `&tags=${data.title}`,
                    })
                  }>
                  <div className='card__overlay'>&nbsp;</div>
                  <Card.Img
                    variant='top'
                    src={`${data.image}`}
                    className='card__img'
                  />
                  <Card.Body className='card__body'>
                    <Card.Title className='card__title heading-tertiary'>
                      {data.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </SettingsModal>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
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
  SetCategory,
});

export default connector(CardsGrid);
