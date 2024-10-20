// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Chats from './components/Chats'; // Этот компонент мы создадим дальше
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats/*" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
