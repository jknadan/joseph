import React from 'react';
import backgroundImage from './footage/mainPageImage.jpeg'; // 배경 이미지 경로를 정확하게 설정하세요.

export default function MainPageBackground() {
  return (
    <div style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        backgroundColor:'rgba(0, 0, 0, 0.5)' }}>
      {/* 배경 이미지 설정 */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)' // 검은색 오버레이에 투명도 적용
      }} />
    </div>
  );
}