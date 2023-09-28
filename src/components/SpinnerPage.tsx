import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerPage: React.FC = () => {
  return (
    <div className='spinner'>
      <Spinner animation='border' style={{ width: '10rem', height: '10rem' }} />
    </div>
  );
};

export default SpinnerPage;
