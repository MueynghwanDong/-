import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Main from './pages/Main';
import { Helmet } from 'react-helmet-async';

const App = () =>{
  return (
    <>
    <Helmet>
      <title>REACTERS</title>
    </Helmet>
    <Route component={Main} path={"/"} exact />
    <Route component={LoginPage} path={'/login'} />
    <Route component={RegisterPage} path={'/register'} />
    <Route component={WritePage} path={"/write"} />
    <Route component={PostListPage} path={'/posts'} exact />
    <Route component={PostPage} path={"/posts/:bno"} />
    </>
  );
}

export default App;
