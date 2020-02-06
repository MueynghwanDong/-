import React, { useCallback } from 'react';
import Search from '../../components/posts/Search';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { listPosts } from '../../lib/api/posts';
import { changeField } from '../../modules/posts';

const SearchContainer = () => {
  const dispatch = useDispatch();
  var { lastPage, posts, loading, page, searchType, searchKeyword } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
    page: posts.page,
    searchType: posts.searchType,
    searchKeyword: posts.searchKeyword,
  }));

  const buildLink = ({ page, searchKeyword, searchType }) => {
    const query = qs.stringify({ page, searchKeyword, searchType });
    return `/posts?${query}`;
  };

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
    dispatch(listPosts({ page, searchKeyword, searchType }));
  };

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  // const { page = 1, searchKeyword = null, searchType = "all" } = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  
  return (
    <Search
      page={page}
      lastPage={lastPage}
      searchKeyword={searchKeyword}
      searchType={searchType}
      onChangeType={onChangeType}
      onChangeKeyword={onChangeKeyword}
      onSubmit={onSubmit}
      buildLink={buildLink}
    />
  );
};

export default SearchContainer;