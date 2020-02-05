import qs from 'qs';
import client from './client';

export const writePost = ({ title, body }) =>
  client.post('/board/insert', {
    "title": title,
    "content": body
  });

export const readPost = bno => client.get(`/board/${bno}`)

export const listPosts = ({ page, searchKeyword, searchType }) => {
  const queryString = qs.stringify({
    page,
    searchKeyword,
    searchType
  });
  return client.get(`/board?${queryString}`);
};

export const updatePost = ({ bno, title, body }) =>
  client.patch(`/board/${bno}`, {
    "title": title,
    "content": body
  });

export const removePost = bno => client.delete(`/board/${bno}`);