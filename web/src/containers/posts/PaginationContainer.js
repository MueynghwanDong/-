import React, { useCallback } from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { listPosts, changeField } from '../../modules/posts';

const PaginationContainer = ({ location }) => {
  const dispatch = useDispatch();
  var { lastPage, posts, page, searchType, searchKeyword, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    page: posts.page,
    searchType: posts.searchType,
    searchKeyword: posts.searchKeyword,
    loading: loading['posts/LIST_POSTS'],
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);

  const onChangeType = e => {
    onChangeField({ key: 'searchType', value: e.target.value });
  };

  const onChangeKeyword = e => {
    onChangeField({ key: 'searchKeyword', value: e.target.value });
  };

  const onSubmit = () => {
    dispatch(listPosts({ page, searchType, searchKeyword }))
  }

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  // const { page = 1, searchKeyword, searchType = "all" } = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  
  return (
    <Pagination
      page={page}
      lastPage={lastPage}
      searchKeyword={searchKeyword}
      searchType={searchType}
      onChangeType={onChangeType}
      onChangeKeyword={onChangeKeyword}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(PaginationContainer);