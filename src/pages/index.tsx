import { useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { getCategoryList, getItemList } from 'utils';
import { NavBar, Caret, MainFooter } from 'components';

export const Button = styled.button`
  display: flex;
  overflow: visible;

  margin: 0;
  border: none;
  box-shadow: none !important;
  padding: 19px;
  background-color: #fff;
  text-transform: none;
  cursor: pointer;

  -webkit-appearance: button;
  -webkit-box-direction: normal;
`;

const Home: NextPage = () => {
  useEffect(() => {
    getCategoryList();
    getItemList();
  }, []);

  return (
    <>
      <NavBar
        data-test="main-header"
        leftButton={
          <Button type="button">
            <Caret direction="left" />
          </Button>
        }
        title="니콘내콘"
      />

      <section data-test="main-carousel">
        <img alt="" src="/images/main-carousel-1.png" style={{ height: '141px' }} />
      </section>

      <section data-test="main-category" />

      <section data-test="main-discount" />

      <MainFooter data-test="main-footer" />
    </>
  );
};

export default Home;
