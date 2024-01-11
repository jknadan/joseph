import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Login.css 파일 임포트

export default function LoginPage() {

const navigate = useNavigate(); // useNavigate 사용

  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        ID,
        password
      });
      console.log(response);
  
      const data = response.data;
      
      if (data.isSuccess) {
        console.log('로그인 성공:', data);
        alert('로그인 성공!');
        // TODO: 로그인 후 페이지 리다이렉션 또는 상태 업데이트
      } else {
        console.error('로그인 실패:', data);
        alert(data.message); // 오류 메시지 표시
      }
    } catch (error) {
      console.error('로그인 중 네트워크 오류 발생:', error);
      alert('로그인 중 알 수 없는 오류가 발생했습니다.');
    }
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
            value={ID}
            onChange={(e) => setID(e.target.value)}
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

        <p className="text"> 회원가입을 안하신 순장님은 회원가입을 진행해주세요! </p>
        <button type="button" className="submit-button" onClick={handleRegister}>회원가입</button>
{/* 
        <p calssName="text"> 회원가입을 안하신 순장님은 회원가입을 진행해주세요! </p>
        <button type="button" className="submit-button" onClick={handleRegister}>회원가입</button> */}
      </form>
    </div>
  );
};
