import React from 'react';
import CardsGrid from '../components/CardsGrid';
import HomeButton from '../components/HomeButton';

const SelectPage: React.FC = () => {
  return (
    <section className='select-page'>
      <HomeButton />
      <div className='heading-secondary select-page__heading-container'>
        <h2 className='heading-secondary__main'>Categories</h2>
      </div>
      <CardsGrid />
    </section>
  );
};

export default SelectPage;
