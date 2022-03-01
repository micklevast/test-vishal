import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashbaord from './components/Dsashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

const App = () => {
  const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashbaord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
