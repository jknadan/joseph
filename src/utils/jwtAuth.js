// jwtAuth.js
import {jwtDecode} from 'jwt-decode';

// jwt 토큰 저장
const saveToken = (token) => {
    localStorage.setItem('AccessToken', token);
}

// jwt 토큰 꺼내기
const getToken = () => {
    return localStorage.getItem('AccessToken');
};

//jwt토큰 해석하기
const decodeToken = () => {
    const token = getToken();
    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("토큰 디코딩 실패", error);
        return null;
    }
};

// 토큰 내 정보 가져오기
const getUserInfo = () => {
    const decoded = decodeToken();
    if (!decoded) return null;

    return {
        userId: decoded.userId,
        name: decoded.name 
    };
};

// 함수 내보내기
const jwtAuth = {
    saveToken,
    getToken,
    decodeToken,
    getUserInfo
};

export default jwtAuth;
