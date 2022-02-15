import React from 'react';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import '../../public/fonts/fonts.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow-x: hidden;

  width: 375px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f1f3f4;

  @media screen and (max-width: 375px) {
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
