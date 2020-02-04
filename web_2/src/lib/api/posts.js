import qs from 'qs';
import client from './client';

export const writePost = ({ title, body }) =>
  client.post('/board/insert', {
    "title": title,
    "content": body
  });

  export const readPost = bno => client.get(`/board/${bno}`)

  export const listPosts = ({ page, searchKeyword, searchType }) => {
    if(searchKeyword) {
      const queryString = qs.stringify({
        page,
        searchKeyword,
        searchType
      });
      return client.get(`/board?${queryString}`);
    };
    return client.get('/board');  // 확인 필요
  };