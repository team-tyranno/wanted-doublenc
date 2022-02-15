import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCategoryPath, getCategotyData, getMenuList } from 'utils';
import { ICafeProps, IPathProps, IMenuProps, ICategoryDetailProps } from 'types';
import { BrandHeader, BrandLists, MenuSelector } from 'components';

const CategoryId = ({ datas, menus }: { datas: ICafeProps; menus: Array<IMenuProps> }) => {
  const router = useRouter();
  const { id, name, conCategory2s } = datas;

  const [selected, setIsSelected] = useState<number>(id);

  const onClick = (key: number) => {
    router.push(`/categories/${id}`);
    setIsSelected(key);
  };

  const parseMenu = menus.flat() as unknown as Array<ICategoryDetailProps>;
  return (
    <>
      <BrandHeader title={name}>
        <MenuSelector menuList={parseMenu} selected={selected} onClick={onClick} />
      </BrandHeader>
      <BrandLists query={id.toString()} datas={conCategory2s} />
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
