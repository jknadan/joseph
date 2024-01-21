// jwtAuth.js
import {jwtDecode} from 'jwt-decode';
import {axios} from 'axios';

// jwt 토큰 저장
const saveToken = (accessToken,refreshToken) => {
    localStorage.setItem('AccessToken', accessToken);
    localStorage.setItem('RefreshToken',refreshToken);
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
// refreshToken을 서버에 보내서 AccessToken을 재발급하기
const sendRefreshToken = async () => {

    const refreshToken = localStorage.getItem('RefreshToken');
    if (!refreshToken) return null;
    // refreshToken 서버에 보내서 유효기간 검증하기
    try {
        const response = await axios.get('YOUR_API_ENDPOINT', {
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        });

        // 유효기간 검증 성공 처리
        console.log(response.data);
        return response.data;
    } catch (error) {
        // 에러 처리
        console.error("유효기간 검증 중 오류 발생:", error);
        return null;
    }


}

// 함수 내보내기
const jwtAuth = {
    saveToken,
    getToken,
    decodeToken,
    getUserInfo
};

export default jwtAuth;
