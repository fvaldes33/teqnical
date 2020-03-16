import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from '../styled';
import { theme } from '../theme';
import { BaseStyles, Header } from '../components';
import { useAuth } from '../hooks';
import 'highlight.js/styles/shades-of-purple.css';
import 'react-toastify/dist/ReactToastify.min.css';

function CustomApp({ Component, pageProps }: AppProps) {
  // console log here
  const { user } = useAuth();

  const modifiedProps = { ...pageProps, user };

  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <Header />
      <Component {...modifiedProps} />
      <ToastContainer
        autoClose={5000}
        position={toast.POSITION.TOP_CENTER}
      />
    </ThemeProvider>
  );
}

export default CustomApp;
