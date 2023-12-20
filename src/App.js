import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainPageBackground from './MainPageBackground';
import MainContent from './MainContent';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

// const MainContent = require('./MainContent');
// const LoginPage = require('./LoginPage');

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', height: '100vh' }}>
        <MainPageBackground />
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}