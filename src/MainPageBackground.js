import React from 'react';
import backgroundImage from './footage/mainPageImage.jpeg';
import './App.css'; // CSS 파일 import

export default function MainPageBackground() {
  return (
    <div className="backgroundImage" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* 배경 이미지 설정 */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // 검은색 오버레이에 투명도 적용
        zIndex:0
      }} />
    </div>
  );
}
