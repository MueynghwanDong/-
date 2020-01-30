import client from './client';

// 로그인
export const login = ({ m_id, pw }) =>
  client.post('/#', { m_id, pw });

// 회원가입
export const register = ({ m_id, pw }) =>
  client.post('/#', { m_id, pw }); // 이메일, 이름, 위치

// 로그인 상태 확인
export const check = () => client.get('/#');

/*
  아이디 : m_id
  비밀번호 : pw
  이메일: email
  이름: name
  위치: location
*/