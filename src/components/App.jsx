import { Home } from 'pages/HomePage/Home';
import { Login } from 'pages/Login/Login';
import { Phonebook } from 'pages/PhoneBook/PhoneBook';
import { Register } from 'pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
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
