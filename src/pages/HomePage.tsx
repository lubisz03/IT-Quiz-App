import React from 'react';
import { motion } from 'framer-motion';
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

  return (
    <section className='home-page' style={style}>
      <div className='home-page__heading-container heading-primary'>
        <motion.h1
          initial={{ opacity: 0, x: -450 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: [0.71, 1.88, 1, 1] }}
          className='heading-primary__main'>
          IT Quiz
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, x: 450 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: [0.71, 1.88, 1, 1] }}
          className='heading-primary__sub'>
          Test your knowledge now
        </motion.h4>
      </div>
      <NavLink to='/quizes'>
        <button className='btn btn--blue'>Start</button>
      </NavLink>
    </section>
  );
};

export default HomePage;
