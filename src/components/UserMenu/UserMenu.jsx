import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Welcome, {userName}</p>
      <button onClick={() => handleClick()}>LogOut</button>
    </>
  );
};
