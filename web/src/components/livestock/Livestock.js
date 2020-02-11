import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

import LivestockChart from '../common/Chart/LivestockChart';

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
      <LivestockChart myProps={'myProps'} />
    </LivestockBlock>
  );
};

export default My;