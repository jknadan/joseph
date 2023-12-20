import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Login.css 파일 임포트

export default function LoginPage() {

const navigate = useNavigate(); // useNavigate 사용

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
  };
  const handleRegister = () => {
    // 회원가입 처리 로직 또는 페이지 이동
    navigate("/register");
  };
  return (
    <div className="login-background">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>로그인</h2>
        <div>
          <input 
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <input 
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="submit-button">로그인</button>
        {/* <p calssName="text"> 회원가입을 안하신 순장님은 회원가입을 진행해주세요! </p> */}
        <button type="button" className="submit-button" onClick={handleRegister}>회원가입</button>
      </form>
    </div>
  );
};
