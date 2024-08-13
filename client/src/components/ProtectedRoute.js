import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = () => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
