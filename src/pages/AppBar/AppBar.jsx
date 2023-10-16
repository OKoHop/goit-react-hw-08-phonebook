import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { StyledHeader } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Auth } from 'components/Auth/Auth';

export const AppBar = () => {
  const isLogIn = useSelector(state => state.auth.isLogged);

  return (
    <StyledHeader>
      <Navigation />
      {isLogIn ? <UserMenu /> : <Auth />}
    </StyledHeader>
  );
};
