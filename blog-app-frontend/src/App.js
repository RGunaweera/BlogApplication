import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import './App.css';

const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
