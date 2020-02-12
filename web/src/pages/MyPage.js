import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import My from '../components/my/My';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const MyPage = () =>{
    return (
      <>
      <Helmet>
        <title>내 축사 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <My />
      <Footer />
      </>
    );
};
export default MyPage;