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
import ResultPage from '../pages/ResultPage';

const AppRouter: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/xd' element={<HomePage />} />
          <Route path='/categories' element={<SelectPage />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/' element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppRouter;
