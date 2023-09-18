import React from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  Navigate,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SelectPage from '../pages/SelectPage';
import QuizPage from '../pages/QuizPage';

const AppRouter: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories' element={<SelectPage />} />
          <Route path='/quiz' element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppRouter;
