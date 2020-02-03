import qs from 'qs';
import client from './client';

export const writePost = ({ title, body }) =>
  client.post('/board/insert', {
    "title": title,
    "content": body
  });

  export const readPost = id => client.get(`/board/${id}`)

  export const listPosts = ({ page, keyword, type }) => {
    const queryString = qs.stringify({
      page,
      keyword,
      type
    });
    return client.get(`/board?${queryString}`);
  };