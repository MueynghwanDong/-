import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Barn from '../components/barn/Barn';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const BarnPage = () =>{
    return (
      <>
      <Helmet>
        <title>내 축사 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <Barn />
      <Footer />
      </>
    );
};
export default BarnPage;