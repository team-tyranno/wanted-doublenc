import type { NextPage } from 'next';
import styled from 'styled-components';

import { getCategoryList, getItemList } from 'utils';
import { ICategoryDetailProps, IMenuProps } from 'types';
import { NavBar, Caret, MainCarousel, MainCategory, MainDiscount, MainFooter } from 'components';

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
      <MainCarousel data-test="main-carousel" />
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
