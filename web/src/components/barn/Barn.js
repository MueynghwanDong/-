import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

import BarnChart from '../common/Chart/BarnChart';
import { Link } from 'react-router-dom';

const BarnBlock = styled(Responsive)`
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
    <BarnBlock>
      <h1>내 축사</h1>
      <h4>가축 수 ex) 4마리</h4>
      <Link to="/mypage">홈</Link>
      <BarnChart myProps={'myProps'} />
    </BarnBlock>
  );
};

export default My;