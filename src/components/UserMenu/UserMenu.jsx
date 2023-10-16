import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const userToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const handleClick = userToken => {
    dispatch(logOut(userToken));
  };

  return (
    <>
      <p>Welcome, {userName}</p>
      <button onClick={() => handleClick(userToken)}>LogOut</button>
    </>
  );
};
