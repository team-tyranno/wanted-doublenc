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
  height: 100%;
`;

const Container = styled.div`
  margin: 0 auto;

  width: 375px;
  border: 1px solid #eee;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: #f1f3f4;

  @media screen and (max-width: 375) {
    width: 100%;
    height: 100%;
  }
`;

// 임시
const Navbar = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 15px;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-weight: 600;
  color: #000000;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  background-color: #fff;
  height: 59px;
  z-index: 50;
  width: 373px;
  max-width: 48rem;
  border-bottom: 1px solid transparent;
  padding: 0px;
  margin: 0px;
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
            <Navbar />
            <Component {...pageProps} />
          </AppLayout>
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
