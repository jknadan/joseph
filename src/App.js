import React from 'react';
import Header from './Header';
import MainPageBackground from './MainPageBackground';
import MainContent from './MainContent';

export default function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MainPageBackground />
      <Header />
      <MainContent />
    </div>
  );
}