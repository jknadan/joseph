import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Register.css'; // CSS 스타일시트를 임포트합니다.

export default function RegisterPage() {
  // 여러 상태 변수들을 useState 훅으로 선언하여 입력값을 관리합니다.
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 비밀번호와 비밀번호 확인의 가시성을 관리하기 위한 상태입니다.
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 폼 제출 이벤트 핸들러입니다. 회원가입 로직을 처리합니다.
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원가입 처리 로직 구현
  };

  // 비밀번호 가시성을 토글하는 함수입니다.
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword => !showPassword);
  };

  // 비밀번호 확인 가시성을 토글하는 함수입니다.
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(showConfirmPassword => !showConfirmPassword);
  };

  // 회원가입 양식을 렌더링합니다.
  return (
    <div className="register-background">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>회원가입</h2>

        {/* 이름 입력 필드 */}
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
        />

        {/* 소속 순 입력 필드 */}
        <label htmlFor="group">소속 순</label>
        <input
          id="group"
          type="text"
          placeholder="소속 순(ex. 12)"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="register-input"
        />

        {/* 전화번호 입력 필드 */}
        <label htmlFor="phone">전화번호</label>
        <input
          id="phone"
          type="text"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="register-input"
        />

        {/* 사용자 이름 입력 필드 */}
        <label htmlFor="username">아이디</label>
        <input
          id="username"
          type="text"
          placeholder="사용하고자 하는 아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
        />

        {/* 비밀번호 입력 필드와 토글 아이콘 */}
        <label htmlFor="password">비밀번호</label>
        <div className="password-container">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            className="register-input password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisiblity} className="password-icon">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        {/* 비밀번호 확인 입력 필드와 토글 아이콘 */}
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <div className="password-container">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          />
          <span onClick={toggleConfirmPasswordVisibility} className="password-icon">
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        {/* 회원가입 제출 버튼 */}
        <button type="submit" className="register-button">회원가입</button>
      </form>
    </div>
  );
};
