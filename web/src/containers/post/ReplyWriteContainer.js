import React, { useEffect } from 'react';
import ReplyWrite from '../../components/post/ReplyWrite';
import { useDispatch, useSelector } from 'react-redux';
import { listReplys } from '../../modules/replys';

const ReplyWriteContainer = () => {
  const dispatch = useDispatch();
  const { replytext, bno } = useSelector(({ replys, post }) => ({
    replytext: replys.replytext,
    bno: post.bno,
  }));
  
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(listReplys({ page, searchKeyword, searchType }));
  };
   
  return (
    <ReplyWrite
      replytext={replytext}
      bno={bno}
      onSubmit={onSubmit}
    />
  );
};

export default ReplyWriteContainer;