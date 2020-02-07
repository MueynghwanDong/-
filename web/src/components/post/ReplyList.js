import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const ReplyListBlock = styled(Responsive)`
  margin-top: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const ReplyItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  p {
    margin-top: 0rem;
  }
`;

const ReplyItem = ({ reply }) => {
  const { replytext } = reply;
  return (
    <ReplyItemBlock>
      <p>{replytext}</p>
    </ReplyItemBlock>
  );
};

const Reply = ({ replys, loading, error }) => {
  // 에러 발생 시
  if (error) {
    console.log(error)
  return <ReplyListBlock>에러가 발생했습니다. </ReplyListBlock>;
  }

  return (
    <ReplyListBlock>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && replys && (
        <div>
          {replys.map(reply => (
            <ReplyItem reply={reply} key={reply.bno} />
          ))}
        </div>
      )}
    </ReplyListBlock>
  );
};

export default Reply;