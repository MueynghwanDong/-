import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReplyList from '../../components/post/ReplyList';
import { listReplys } from '../../modules/replys';

const ReplyListContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { bno } = match.params;
  const { replys, error, loading } = useSelector(
    ({ replys, loading }) => ({
      replys: replys.replys,
      error: replys.error,
      loading: loading['replys/LIST_ReplyS'],
    }),
  );
  useEffect(() => {
    dispatch(listReplys({ bno }));
  }, [dispatch])

  return (
    <ReplyList
      loading={loading}
      error={error}
      replys={replys}
      bno={bno}
    />
  );
};

export default withRouter(ReplyListContainer);