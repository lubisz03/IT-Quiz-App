import React from 'react';

import CardsGrid from '../components/CardsGrid';

const SelectPage: React.FC = () => {
  return (
    <section className='select-page'>
      <div className='heading-secondary select-page__heading-container'>
        <h2 className='heading-secondary__main'>Select Quiz</h2>
        <h4 className='heading-secondary__sub'>1 of 2</h4>
      </div>
      <CardsGrid />
    </section>
  );
};

export default SelectPage;
