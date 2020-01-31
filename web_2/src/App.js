import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Main from './pages/Main';
const App = () =>{
  return (
    <>
    <Route component={PostListPage} path={['/@:username', '/']} exact />
    <Route component={LoginPage} path={'/login'} />
    <Route component={RegisterPage} path={'/register'} />
    <Route component={WritePage} path={"/write"} />
    <Route component={PostPage} path={"/@:username/:postId"} />
    <Route component={Main} path={"/main"} />
    </>
  );
}

export default App;
