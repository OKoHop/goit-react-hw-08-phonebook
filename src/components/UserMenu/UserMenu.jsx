import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  return (
    <>
      <p>Welcome, {userName}</p>
      <button>LogOut</button>
    </>
  );
};
