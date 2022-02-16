import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

import { getCategoryList, getItemList } from 'utils';
import { ICategoryDetailProps, IMenuProps } from 'types';
import { SlideMenu, NavBar, Caret, MainCategory, MainDiscount, MainFooter } from 'components';

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

const Home: NextPage = ({
  categoryList,
  itemList,
}: {
  categoryList: Array<ICategoryDetailProps>;
  itemList: Array<IMenuProps>;
}) => {
  const [slideMenuVisible, setSlideMenuVisible] = useState(false);
  return (
    <>
      <SlideMenu visible={slideMenuVisible} onClick={setSlideMenuVisible} />
      <NavBar
        data-test="main-header"
        leftButton={
          <Button type="button" onClick={() => setSlideMenuVisible(true)}>
            <img
              alt=""
              src="/images/hamburgerMenu.png"
              style={{ height: '30px', width: '30px', position: 'relative', bottom: '5px' }}
            />
          </Button>
        }
        title="니콘내콘"
      />

      <section data-test="main-carousel">
        <img alt="" src="/images/main-carousel-1.png" style={{ height: '141px' }} />
      </section>

      <MainCategory data-test="main-category" categoryList={categoryList} />
      <MainDiscount data-test="main-discount" itemList={itemList} />
      <MainFooter data-test="main-footer" />
    </>
  );
};

export async function getStaticProps() {
  const [categoryList, itemList] = await Promise.all([getCategoryList(), getItemList()]);
  return {
    props: {
      categoryList,
      itemList,
    },
  };
}

export default Home;
