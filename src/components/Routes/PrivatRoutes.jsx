import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(state => state.auth.isLogged);
  return !isLogIn ? <Navigate to={redirectTo} /> : Component;
};
