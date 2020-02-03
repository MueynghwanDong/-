import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/auth/login', {
    "m_id": username,
    "pw": password
  });

// 회원가입
export const register = ({ username, password, email, fullName, location }) =>
  client.post('/auth/join', {
    "m_id": username,
    "pw": password,
    "name": fullName,
    "email": email,
    "location": location
  }); // 이메일, 이름, 위치

// 로그인 상태 확인
export const check = () => {client.post('/auth/check')};

// 로그아웃
export const logout = () => client.post('/auth/logout');

/*
  이메일: email
  이름: fullName
  위치: location
*/