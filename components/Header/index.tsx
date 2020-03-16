import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Container from '../Container';
import { H1, Paragraph, H3 } from '../Typography';
import Button from '../Button';
import { StyledHeader } from './styles';
import Box from '../Box';
import { useAuth } from '../../hooks';
import QuestionForm from '../QuestionForm';
import Loader from '../Loader';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '700px',
    width: '100%'
  }
};

interface HeaderProps {
  title?: string;
  description?: string;
  image?: string;
}

Modal.setAppElement('#__next');

const Header: React.FC<HeaderProps> = ({
  title = "Teqnical | Interview Questions",
  description = "Questions from technical interviews all over the world",
  image = "https://placehold.it/200x200"
}) => {
  const { user, googleSignIn, anonymously } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const notify = useCallback(
    (message: string) => {
      toast(message, {
        type: toast.TYPE.INFO
      });
    },
    []
  )

  const onSubmitQuestion = () => {
    if (user) {
      // to go page
      setIsOpen(true);
    } else {
      setPrompt(true);
    }
  };

  const loginAnonymously = () => {
    setLoading(true)
    setPrompt(false);
    anonymously()
      .then(() => {
        // it worked, set is open
        setIsOpen(true);
      })
      .catch(() => {
        // errrrrrr
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const loginWithGoogle = () => {
    setLoading(true)
    setPrompt(false);
    googleSignIn()
      .then(() => {
        // it worked, set is open
        setIsOpen(true);
      })
      .catch((error: any) => {
        // errrrrrr
        switch (error.code) {
          case 'auth/popup-closed-by-user':
            notify('Why did you close that?')
            break;
          default:
            notify(error.message)
            break;
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Teqnical" />
        <meta property="og:url" content="https://teqnical.now.sh" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@francoxavier33" />
        <meta name="twitter:site" content="@francoxavier33" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      {loading && <Loader />}
      <StyledHeader>
        <Container>
          <Link href="/" passHref>
            <Box>
              <H1 fontSize="32" fontWeight="400">{'{'}teqnical{'}'}</H1>
            </Box>
          </Link>
          <div className="tagline">
            <Paragraph>
              Questions from technical interviews all over the world
            </Paragraph>
          </div>
          <Button variant="primary" onClick={() => onSubmitQuestion()}>
            submit question
          </Button>
        </Container>
      </StyledHeader>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <QuestionForm
          user={user}
          onClose={() => setIsOpen(!isOpen)}
          onSubmit={() => setIsOpen(!isOpen)}
        />
      </Modal>
      <Modal
        isOpen={prompt}
        onRequestClose={() => setPrompt(false)}
        style={customStyles}
      >
        <Box display="flex" justifyContent="center">
          <Box padding={5}>
            <Button variant="primary" onClick={() => loginAnonymously()}>
              Anonymous
            </Button>
          </Box>
          <Box padding={5}>
            <Button variant="primary" onClick={() => loginWithGoogle()}>
              Login in with Google
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
