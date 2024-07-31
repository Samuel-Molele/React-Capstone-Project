import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import LandingPage from './component/LandingPage';
import Store from './component/Store';
import Cart from './component/Cart';
import Auth from './component/UserRegistration';

const App = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <Router>
      <Header username={username} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Auth onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
