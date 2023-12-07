import React,  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './footage/logoImage.png'; // 로고 이미지 경로를 정확하게 설정하세요.
import Sidebar from './Sidebar';
import './Login.css';

export default function Header() {

  const navigate = useNavigate(); // useNavigate 사용

  const [sidebarOpen,setSidebarOpen] = useState(false);

  const toggleSidebar = () => { // 사이드바 토글 함수
    setSidebarOpen(!sidebarOpen);
  };
  const goToLogin = () => {
    navigate("/login"); // 경로 변경
  };

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
      <a href="/">
      <img src={logo} alt="로고" style={{ height: '70px'}} />
      </a>
      <nav style={{ position: 'relative' }}>
          {/* 로그인 버튼 추가 */}
          <button className="login-button" onClick={goToLogin}>
            로그인
          </button>
      <button className={`menu-button ${sidebarOpen ? 'close' : ''}`} onClick={toggleSidebar}>
        {sidebarOpen ? 'X' : '메뉴'}
      </button>

     <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        {/* 메뉴 아이템들을 여기에 추가하세요. */}
      </nav>
    </header>
  );
}
