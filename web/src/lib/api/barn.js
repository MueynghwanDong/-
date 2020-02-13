import qs from 'qs';
import client from './client';

export const listBarnData = ({ b_id, ls_date }) => {
  const queryString = qs.stringify({
    ls_date,
  });
  return client.get(`/barn/${b_id}?${queryString}`);
};

export const listBarnId = ({ m_id }) =>
  client.get(`/barn/member/${m_id}`);