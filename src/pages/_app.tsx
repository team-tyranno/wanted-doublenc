import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';

const Container = styled.div`
  disply: flex;
  justify-content: center;
  align-items: center;

  width: 375px;
  height: 812px;

  background: #f1f3f4;
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
