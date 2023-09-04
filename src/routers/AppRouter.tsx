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

const AppRouter: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quizes' element={<SelectPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppRouter;
