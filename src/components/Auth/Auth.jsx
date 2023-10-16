import { NavLink } from 'react-router-dom';
import { StyledNav } from './Auth.styled';

export const Auth = () => {
  return (
    <StyledNav>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Register</NavLink>
    </StyledNav>
  );
};
