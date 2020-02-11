import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Main from './pages/Main';
import QuestionListPage from './pages/QuestionListPage';
import { Helmet } from 'react-helmet-async';
import MyPage from './pages/MyPage';

import { useSelector } from 'react-redux';

const App = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  if (user) {
    return (
      <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Switch>
        <Route component={Main} path={"/"} exact />
        <Route component={LoginPage} path={"/login"} />
        <Route component={RegisterPage} path={'/register'} />
        <Route component={WritePage} path={"/write"} />
        <Route component={PostPage} path={"/posts/:bno"} />
        <Route component={PostListPage} path={'/posts'} />
        <Route component={QuestionListPage} path={"/faq"} />
        <Route component={MyPage} path={"/mypage"} />
        <Route component={Main} />
      </Switch>
      </>
    );
  } else {
    return (
      <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Switch>
        <Route component={LoginPage} path={"/login"} />
        <Route component={RegisterPage} path={'/register'} />
        <Route component={Main} />
      </Switch>
      </>
    );    
  }
}

export default App;
