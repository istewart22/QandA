/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const unansweredQuestions = getUnansweredQuestions();
    setQuestions(unansweredQuestions);
    setQuestionsLoading(false);
  }, []);

  const handleAskQuestionClick = () => {
    console.log('TODO - move to the AskPage');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>

        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading…</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
