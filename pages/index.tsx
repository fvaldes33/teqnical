import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import { toast } from 'react-toastify';
import { Box, SearchBar, Container, Listing } from '../components';
import questionStore, { QuestionStoreProps } from '../stores/question';
import { useStore } from '../hooks';
import { Question } from '../types';

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
const index = client.initIndex('questions');

const Home = () => {

  const [mode, setMode] = useState<string>('firebase');
  const [search, setSearch] = useState<Question[]>([]);
  const { loading, questions } = useStore<QuestionStoreProps>(questionStore);

  useEffect(
    () => {
      questionStore.getQuestions();
    },
    []
  );

  const onSearch = (term: string) => {
    if (!term.length) {
      setSearch([]);
      setMode('firebase');
      return;
    }

    setMode('algloia');
    index.search(term)
      .then((responses) => {
        if (responses.hits) {
          setSearch(responses.hits as unknown as Question[]);
        } else {
          setSearch([]);
        }
      });
  }

  const deleteQuestion = (id: string) => {
    questionStore.deleteQuestion(id)
      .then(() => {
        toast('Your question has been deleted', {
          type: toast.TYPE.INFO
        })
      })
  }

  return (
    <>
      <Box as="section" mt={10}>
        <Container thin>
          <SearchBar
            onSearch={onSearch}
          />
        </Container>
      </Box>
      <Box as="section" mt={5} mb={10}>
        <Container thin>
          {loading ?
            <div>Loading...</div>
          :
            <Listing
              mode={mode}
              search={search}
              questions={questions}
              deleteQuestion={deleteQuestion} />
          }
        </Container>
      </Box>
    </>
  );
};

export default Home;
