import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const ReplytextBlock = styled(Responsive)`
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-bottom: 3rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom : 0.5rem;
  margin-left : 0.5rem;
  margin-right : 1rem;
  outline:none;
  width: 800px;
  &:focus{
      color:$oc-teal-7;
      border-bottom: 1px solid ${palette.gray[7]};
  }
`;

const ReplyWrite = ({ replytext, onChangeReplytext, onSubmit }) => {
  return (
  <ReplytextBlock>
    <form>
      <StyledInput
        name="replytext"
        placeHolder="검색하세요"
        onChange={onChangeReplytext}
        value={replytext}
      />
      <Button
        onSubmit={onSubmit}
      >
        등록
      </Button>
    </form>
  </ReplytextBlock>
  )
}

export default ReplyWrite;