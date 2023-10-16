import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { StyledBtn, StyledDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledDiv>
      <p>Welcome, {userName}</p>
      <StyledBtn onClick={() => handleClick()}>LogOut</StyledBtn>
    </StyledDiv>
  );
};
