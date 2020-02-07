import React from 'react';
import Header from '../containers/common/HeaderContainer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const NotFoundBlock = styled(Responsive)`
  margin-top: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const NotFoundPage = () =>{
    return (
      <>
      <Header />
      <NotFoundBlock>
        <h1>404 Not Found</h1>
      </NotFoundBlock>
      </>
    );
};
export default NotFoundPage;