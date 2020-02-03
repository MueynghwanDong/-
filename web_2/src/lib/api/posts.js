import client from './client';

export const writePost = ({ title, body }) =>
  client.post('/board/insert', {
    "title": title,
    "content": body
  });