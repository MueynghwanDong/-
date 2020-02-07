import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import ReplyListContainer from '../containers/post/ReplyListContainer';
import ReplyWriteContainer from '../containers/post/ReplyWriteContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <ReplyListContainer />
      <ReplyWriteContainer />
    </>
  );
};

export default PostPage;