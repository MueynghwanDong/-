import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

import LivestockChart from '../common/Chart/LivestockChart';
import { Link } from 'react-router-dom';

const LivestockBlock = styled(Responsive)`
  margin-top: 8rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const My = () => {
  // 에러 발생 시

  return (
    <LivestockBlock>
      <h1>내 가축</h1>
      <Link to="/mypage">홈</Link>
      <h4>가축 종류 적혀는 곳 ex)소</h4>
      <LivestockChart myProps={'myProps'} />
    </LivestockBlock>
  );
};

export default My;