import { NavLink } from 'react-router-dom';
import { StyledDiv } from './NotFound.styled';

export const NotFound = () => {
  return (
    <main>
      <StyledDiv>
        <h1>Sorry, no such page exists. Please go to page</h1>
        <NavLink to="/login">
          <h2>LogIn</h2>
        </NavLink>
        <h3>or</h3>
        <NavLink to="/register">
          <h2>Registartion</h2>
        </NavLink>
      </StyledDiv>
    </main>
  );
};
