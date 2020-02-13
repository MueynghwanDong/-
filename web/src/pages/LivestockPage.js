import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import LivestockContainer from '../containers/livestock/LivestockContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const LivestockPage = () =>{
    return (
      <>
      <Helmet>
        <title>내 가축 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <LivestockContainer />
      <Footer />
      </>
    );
};
export default LivestockPage;