import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

import BarnCards from '../common/Card/BarnCards';

const MyBlock = styled(Responsive)`
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
    <MyBlock>
      <h1>내 축사</h1>
      <BarnCards />
    </MyBlock>
  );
};

export default My;