import React, { useState, useEffect } from 'react';
import Highlight from 'react-highlight.js';
import { StyledListing } from './styles';
import { Question } from '../../types';
import { Box } from '..';
import { H2, Paragraph, SmallParagraph } from '../Typography';
import { useAuth } from '../../hooks';

interface ListingProps {
  mode: string;
  questions: Question[];
  search: Question[];
  deleteQuestion: (id: string) => void
}

const Listing: React.FC<ListingProps> = ({ mode, search, questions, deleteQuestion }) => {
  const [listing, setListing] = useState<Question[]>([]);
  const { user } = useAuth();

  useEffect(
    () => {
      if (mode === 'firebase') {
        setListing(questions);
      } else {
        setListing(search)
      }
    },
    [mode, search, questions]
  )

  if (!listing.length) {
    return (
      <Box>
        <H2>No Questions</H2>
      </Box>
    );
  }

  const isoDate = (question: any) => {
    if (typeof question.createdDate === 'string') {
      return (new Date(question.createdDate)).toLocaleDateString();
    }

    return question.createdDate.toDate().toLocaleDateString();
  }

  return (
    <StyledListing>
      {listing.map((question: Question) => (
        <li key={question.id}>
          {user && user.uid === question.createdById &&
            <span className="trash" onClick={() => deleteQuestion(question.id)}>
              <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m25 32c-1.1016 0-2 0.89844-2 2v43.199c0 5.3984 4.3984 9.8008 9.8008 9.8008h34.398c5.3984 0 9.8008-4.3984 9.8008-9.8008v-43.199c0-1.1016-0.89844-2-2-2s-2 0.89844-2 2v43.199c0 3.1992-2.6016 5.8008-5.8008 5.8008h-34.398c-3.1992 0-5.8008-2.6016-5.8008-5.8008v-43.199c0-1.1016-0.89844-2-2-2z" />
                  <path d="m86 24h-22v-5.8984c0-3.8984-3.1992-7.1016-7.1016-7.1016h-13.797c-3.8984 0-7.1016 3.1992-7.1016 7.1016v5.8984h-22c-1.1016 0-2 0.89844-2 2s0.89844 2 2 2h72c1.1016 0 2-0.89844 2-2s-0.89844-2-2-2zm-26 0h-20v-5.8984c0-1.6992 1.3984-3.1016 3.1016-3.1016h13.699c1.6992 0 3.1016 1.3984 3.1016 3.1016l-0.003906 5.8984z" />
                  <path d="m52 71v-31c0-1.1016-0.89844-2-2-2s-2 0.89844-2 2v31c0 1.1016 0.89844 2 2 2s2-0.89844 2-2z" />
                  <path d="m42 71v-31c0-1.1016-0.89844-2-2-2s-2 0.89844-2 2v31c0 1.1016 0.89844 2 2 2s2-0.89844 2-2z" />
                  <path d="m62 71v-31c0-1.1016-0.89844-2-2-2s-2 0.89844-2 2v31c0 1.1016 0.89844 2 2 2s2-0.89844 2-2z" />
                </g>
              </svg>
            </span>
          }
          <Paragraph>{question.question}</Paragraph>
          <SmallParagraph>
            {question.createdBy} | {isoDate(question)} | {question.language} {question.company && `| ${question.company}`}
          </SmallParagraph>

          <Highlight language={question.language?.toLowerCase()}>
            {question.answer}
          </Highlight>

          {question.link &&
            <SmallParagraph>
            Open on <a href={question.link} target="_blank" rel="noopener nofollow">{question.link}</a>
            </SmallParagraph>
          }
        </li>
      ))}
    </StyledListing>
  )
};

export default Listing;
