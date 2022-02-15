import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 auto;

  width: 375px;
  border: 1px solid #eee;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: #f1f3f4;

  position: absolute;
  left: 0;
  right: 0;

  overflow-x: hidden;

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
        <LayoutWrapper>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
