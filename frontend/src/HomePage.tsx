import React, { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const unansweredQuestions = getUnansweredQuestions();
    setQuestions(unansweredQuestions);
    setQuestionsLoading(false);
  }, []);

  return (
    <Page>
      <div>
        <div>
          <PageTitle>Unanswered Questions</PageTitle>

          <button>Ask a question</button>
        </div>
        {questionsLoading ? (
          <div>Loading…</div>
        ) : (
          <QuestionList data={questions} />
        )}
      </div>
    </Page>
  );
};
