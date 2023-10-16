import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyledNav, StyledDiv } from './AppBar.styled';

export const AppBar = () => {
  const isLogIn = useSelector(state => state.auth.isLogged);

  return (
    <StyledDiv>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/register">Register</NavLink>
      </StyledNav>

      {isLogIn && <UserMenu />}
    </StyledDiv>
  );
};
