import React from 'react';
import logo from './footage/logoImage.png'; // 로고 이미지 경로를 정확하게 설정하세요.

export default function Header() {
  return (
    <header style={{ 
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      paddingLeft: '1rem', 
      backgroundColor: 'rgba(255, 255, 255, 0.95)', // 수정된 배경색
      position: 'relative', // 추가된 position 속성
      zIndex: 10,
    }}>
      <img src={logo} alt="로고" style={{ height: '70px'}} />
      <nav>
        {/* 메뉴 아이템들을 여기에 추가하세요. */}
      </nav>
    </header>
  );
}
