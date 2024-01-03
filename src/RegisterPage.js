import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Register.css'; // CSS 스타일시트를 임포트합니다.

export default function RegisterPage() {
  // 여러 상태 변수들을 useState 훅으로 선언하여 입력값을 관리합니다.
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [phone, setPhone] = useState('');
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 비밀번호와 비밀번호 확인의 가시성을 관리하기 위한 상태입니다.
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 폼 제출 이벤트 핸들러입니다. 회원가입 로직을 처리합니다.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: 회원가입 처리 로직 구현
    console.log(
        `이름: ${name}, 
        소속 순: ${group}, 
        전화번호: ${phone}, 
        아이디: ${ID}, 
        비밀번호: ${password}, 
        비밀번호 확인: ${confirmPassword}`
      );
  // 유효성 검사 예시
  if (!name || !group || !phone || !ID || !password || !confirmPassword) {
    alert('모든 필드를 채워주세요.');
    return;
  }

  if (password !== confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // TODO: 추가적인 유효성 검사 로직 구현
//http://221.138.161.26:4000
  // 회원가입 API에 데이터 전송
  try {
    const response = await fetch('http://localhost:4000/users', { // 백엔드 API 엔드포인트로 변경 필요
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        group,
        phone,
        ID,
        password,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      // 성공적인 회원가입 처리
      console.log('회원가입 성공:', data);
      // TODO: 로그인 페이지로 리디렉션 또는 상태 업데이트
    } else {
      // 서버에서 회원가입 오류 처리
      console.error('회원가입 실패:', data);
      alert(data.message); // 오류 메시지 표시
    }
  } catch (error) {
    // 네트워크 오류 처리
    console.error('회원가입 중 네트워크 오류 발생:', error);
    alert('회원가입 중 오류가 발생했습니다.');
  }
  };
  // group 필드에 한글 입력 금지
  const handleGroupChange = (e) => {
    const value = e.target.value;
    // 한글 정규 표현식입니다. 
    const koreanPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  
    // 입력된 값에 한글이 포함되어 있는지 검사합니다.
    if (koreanPattern.test(value)) {
      // 한글이 포함되어 있으면 사용자에게 경고를 표시합니다.
      alert('한글은 입력할 수 없습니다. 숫자만 입력해주세요.');
      // 한글을 제외한 값으로 상태를 업데이트합니다.
      setGroup(value.replace(koreanPattern, ''));
    } else {
      // 한글이 없으면 입력값을 상태에 저장합니다.
      setGroup(value);
    }
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
          placeholder="소속 순(ex. 12)" // '12순' 이렇게 적어도 숫자만 분리할 수  있도록
          value={group}
          onChange={handleGroupChange}
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
        <label htmlFor="ID">아이디</label>
        <input
          id="username"
          type="text"
          placeholder="사용하고자 하는 아이디"
          value={ID}
          onChange={(e) => setID(e.target.value)}
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
