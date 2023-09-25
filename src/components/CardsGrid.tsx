import React, { useEffect, useState, useRef } from 'react';
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

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className='g-5'>
        {cardData.map((data, idx) => (
          <Col key={idx}>
            <motion.div
              id={`card-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}>
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
