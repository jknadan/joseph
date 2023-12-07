import React, { useState } from 'react';
import './Login.css'; // Login.css 파일 임포트

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
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
      </form>
    </div>
  );
};
