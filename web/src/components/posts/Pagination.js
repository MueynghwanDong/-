import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const PostSearchBlock = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PostTypeSelect = styled.select`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom : 0.5rem;
  margin-left : 0.5rem;
  margin-right : 0.5rem;
  outline: none;
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom : 0.5rem;
  margin-left : 0.5rem;
  margin-right : 1rem;
  outline:none;
  &:focus{
      color:$oc-teal-7;
      border-bottom: 1px solid ${palette.gray[7]};
  }
`;

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PageNumber = styled.div`

`;

const buildLink = ({ page, searchKeyword, searchType }) => {
  const query = qs.stringify({ page, searchKeyword, searchType });
  return `/posts?${query}`;
};

const Pagination = ({ page, lastPage, searchType, searchKeyword, onChangeType, onChangeKeyword, onSubmit }) => {
  return (
    <>
    <PaginationBlock>
      { page !== 1 &&
        <Button
          disabled={page === 1}
          to={
            page === 1 ? undefined : buildLink({ page: page - 1, searchKeyword, searchType })
          }
        >
          이전
        </Button>
      }
      { page > 2 &&
        <PageNumber>
          <Link
            to={page > 2 && buildLink({ page: page - 2, searchKeyword, searchType })}
          >
            {page-2}
          </Link>
        </PageNumber>
      }
      { page > 1 &&
        <PageNumber>
          <Link
            to={page > 1 && buildLink({ page: page - 1, searchKeyword, searchType })}
          >
            {page-1}
          </Link>
        </PageNumber>
      }
      <PageNumber>
        <b>
          {page}
        </b>
      </PageNumber>
      { page < lastPage &&
        <PageNumber>
          <Link
            to={page < lastPage && buildLink({ page: page + 1, searchKeyword, searchType })
            }
          >
            {page+1}
          </Link>
        </PageNumber>
      }
      { page < lastPage-1 &&
        <PageNumber>
          <Link
            to={page < lastPage-1 && buildLink({ page: page + 2, searchKeyword, searchType })}
          >
            {page+2}
          </Link>
        </PageNumber>
      }
      { page !== lastPage &&
        <Button
          disabled={page === lastPage}
          to={
            page === lastPage
              ? undefined
              : buildLink({ page: page + 1, searchKeyword, searchType })
          }
        >
          다음
        </Button>
      }
    </PaginationBlock>
      <PostSearchBlock>
        <form onSubmit={onSubmit}>
          <PostTypeSelect name="searchType" onChange={onChangeType}>
            <option value="all">전체</option>
            <option value="title_content">제목+내용</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="user">작성자</option>
          </PostTypeSelect>
          <StyledInput
            autoComplete="search"
            name="searchKeyword"
            placeHolder="검색하세요"
            onChange={onChangeKeyword}
            value={searchKeyword}
          />
          <Button
          >
            검색
          </Button>
        </form>
      </PostSearchBlock>
    </>
  );
};

export default Pagination;