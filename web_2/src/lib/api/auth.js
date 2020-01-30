import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/#', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/#', { username, password }); // 이메일, 이름, 위치

// 로그인 상태 확인
export const check = () => client.get('/#');

/*
  이메일: email
  이름: fullName
  위치: location
*/