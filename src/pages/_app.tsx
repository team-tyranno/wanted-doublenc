import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  width: 375px;
  height: 812px;
  border: 1px solid #eee;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: #f1f3f4;

  @media screen and (max-width: 375) {
    width: 100%;
    height: 100%;
  }
`;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
