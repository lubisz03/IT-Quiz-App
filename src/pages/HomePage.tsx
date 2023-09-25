import React from 'react';
import { easeOut, motion } from 'framer-motion';
import image1 from '../assets/image1.jpg';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const style = {
    backgroundImage: `linear-gradient(
        rgba(34, 40, 49, 0.9), 
        rgba(34, 40, 49, 0.9)
      ),
      url(${image1})`,
  };

  const line1 = 'IT QUIZ';
  const line2 = 'TEST YOUR KNOWLEDGE NOW';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        ease: easeOut,
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeOut,
      },
    },
  };

  return (
    <section className='home-page' style={style}>
      <motion.div
        className='home-page__heading-container heading-primary'
        variants={sentence}
        initial='hidden'
        animate='visible'>
        <div className='heading-primary__main'>
          {line1.split('').map((char, index) => {
            return (
              <motion.h1
                key={char + '-' + index}
                variants={letter}
                className='heading-primary__main-letter'>
                {char}
              </motion.h1>
            );
          })}
        </div>
        <div className='heading-primary__sub'>
          {line2.split('').map((char, index) => {
            return (
              <motion.h1
                key={char + '-' + index}
                variants={letter}
                className='heading-primary__sub-letter'>
                {char}
              </motion.h1>
            );
          })}
        </div>
      </motion.div>
      <NavLink to='/categories'>
        <button className='btn btn--blue'>Start</button>
      </NavLink>
    </section>
  );
};

export default HomePage;
