import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashbaord from './components/Dsashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

const App = () => {
  const [logged, setlogged] = useState(Cookies.get('user') && Cookies.get('user').length !== '')
  //remove this nigga
  useEffect(() => {
    Cookies.set('user', 'fucking user')
  }, [])

  console.log('rendered')
  

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={logged ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={logged ? <Dashbaord /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
