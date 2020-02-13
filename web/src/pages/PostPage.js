import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import ReplyListContainer from '../containers/post/ReplyListContainer';
import WriteReplyContainer from '../containers/post/WriteReplyContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

const PostPage = () => {
  const { post } = useSelector(({ post }) => ({
    post: post.post,
  }));
  console.log(post)
  return (
    <>
      <Helmet>
        {/* <title>{post.title} - (우리회사)</title> */}
      </Helmet>
      <HeaderContainer />
      <PostViewerContainer />
      <ReplyListContainer />
      <WriteReplyContainer />
      <Footer />
    </>
  );
};

export default PostPage;