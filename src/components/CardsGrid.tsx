import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CardsGrid: React.FC = () => {
  const cardData = [
    {
      title: 'Card 1',
      text: 'This is the content of Card 1',
      image: 'image1.jpg',
    },
    {
      title: 'Card 2',
      text: 'This is the content of Card 2',
      image: 'image2.jpg',
    },
    {
      title: 'Card 1',
      text: 'This is the content of Card 1',
      image: 'image1.jpg',
    },
    {
      title: 'Card 2',
      text: 'This is the content of Card 2',
      image: 'image2.jpg',
    },
    {
      title: 'Card 1',
      text: 'This is the content of Card 1',
      image: 'image1.jpg',
    },
    {
      title: 'Card 2',
      text: 'This is the content of Card 2',
      image: 'image2.jpg',
    },
    {
      title: 'Card 1',
      text: 'This is the content of Card 1',
      image: 'image1.jpg',
    },
    {
      title: 'Card 2',
      text: 'This is the content of Card 2',
      image: 'image2.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <Container>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant='top' src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsGrid;
