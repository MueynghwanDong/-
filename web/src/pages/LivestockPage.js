import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Livestock from '../components/livestock/Livestock';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const LivestockPage = () =>{
    return (
      <>
      <Helmet>
        <title>내 가축 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <Livestock />
      <Footer />
      </>
    );
};
export default LivestockPage;