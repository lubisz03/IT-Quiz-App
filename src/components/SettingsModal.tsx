import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import QuizForm from './QuizForm';
import { NavLink } from 'react-router-dom';

const SettingsModal: React.FC<{ children: any; title: string }> = ({
  children,
  title,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal-container'>
      <div className='modal-container__button' onClick={handleShow}>
        {children}
      </div>

      <Modal
        show={show}
        backdrop='static'
        keyboard={false}
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header className='modal__header'>
          <Modal.Title
            id='contained-modal-title-vcenter'
            className='modal__title'>
            {title}
            {' Quiz'}
          </Modal.Title>
          <button className='btn btn--close' onClick={handleClose}>
            &times;
          </button>
        </Modal.Header>
        <Modal.Body className='modal__body'>
          <QuizForm />
        </Modal.Body>
        <Modal.Footer>
          <NavLink to='/quiz'>
            <button className='btn btn--blue btn--blue--start'>Start</button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SettingsModal;
