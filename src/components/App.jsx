import { Home } from 'pages/HomePage/Home';
import { Login } from 'pages/Login/Login';
import { Phonebook } from 'pages/PhoneBook/PhoneBook';
import { Register } from 'pages/Registration/Registrater';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../pages/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshPage } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshPage());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
