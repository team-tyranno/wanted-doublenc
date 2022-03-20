import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCategoryPath, getCategotyData, getMenuList } from 'utils';
import { ICafeProps, IPathProps, IMenuProps, ICategoryDetailProps } from 'types';
import { Caret, NavBar, BrandLists, MenuSelector } from 'components';

import styled from 'styled-components';

export const Button = styled.button`
  -webkit-box-direction: normal;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  padding: 19px;
`;

const CategoryId = ({ datas, menus }: { datas: ICafeProps; menus: Array<IMenuProps> }) => {
  const router = useRouter();
  const { id, name, conCategory2s } = datas;

  const [selected, setIsSelected] = useState<number>(id);

  const onClick = (key: number) => {
    router.push(`/categories/${key}`);
    console.log('aya');
    setIsSelected(key);
  };

  const parseMenu = menus.flat() as unknown as Array<ICategoryDetailProps>;
  return (
    <>
      <NavBar
        leftButton={
          <Button type="button" onClick={() => router.back()}>
            <Caret direction="left" />
          </Button>
        }
        title={name}
      />
      <MenuSelector menuList={parseMenu} selected={selected} onClick={onClick} />
      <BrandLists query={id.toString()} datas={conCategory2s} data-cy="brandLists" />
    </>
  );
};

export async function getStaticProps({ params }: { params: IPathProps }) {
  const { categoryId } = params;

  const [datas, menus] = await Promise.all([getCategotyData(Number(categoryId)), getMenuList()]);
  return {
    props: {
      datas,
      menus,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCategoryPath();

  return {
    paths,
    fallback: false,
  };
}

export default CategoryId;
