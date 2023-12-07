import React from 'react';
import './sideBar.css'; // 사이드바 CSS

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* 메뉴 내용 */}
      <ul>
        <li><a href="/" onClick={toggleSidebar}>홈</a></li>
        <li><a href="#about" onClick={toggleSidebar}>출석관리</a></li>
        <li><a href="#services" onClick={toggleSidebar}>회계관리</a></li>
        <li><a href="#contact" onClick={toggleSidebar}>관리자 페이지</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
