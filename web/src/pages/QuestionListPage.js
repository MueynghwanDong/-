import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import QuestionListContainer from '../containers/questions/QuestionListContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const QuestionListPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <QuestionListContainer />
      <Footer />
    </>
  );
};

export default QuestionListPage;