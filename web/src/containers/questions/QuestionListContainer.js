import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuestionList from '../../components/questions/QuestionList';

const QuestionListContainer = () => {
  const { questions, error, loading } = useSelector(
    ({ questions, loading }) => ({
      questions: questions.questions,
      error: questions.error,
      loading: loading['quetions/LIST_QUETIONS'],
    }),
  );

  return (
    <QuestionList
      loading={loading}
      error={error}
      questions={questions}
    />
  );
};

export default withRouter(QuestionListContainer);