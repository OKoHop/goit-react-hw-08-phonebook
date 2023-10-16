import { NavLink } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/phonebook">Phonebook</NavLink>
    </StyledNav>
  );
};
