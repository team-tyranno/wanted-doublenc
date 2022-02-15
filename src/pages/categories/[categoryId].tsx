import { getCategoryPath, getCategotyData } from 'utils';
import { ICafeProps, IPathProps } from 'types';
import { BrandHeader, BrandLists } from 'components';

const CategoryId = ({ datas }: { datas: ICafeProps }) => {
  const { conCategory2s } = datas;

  return (
    <>
      <BrandHeader />
      <BrandLists datas={conCategory2s} />
    </>
  );
};

export async function getStaticProps({ params }: { params: IPathProps }) {
  const { categoryId } = params;
  const datas = await getCategotyData(categoryId);

  return {
    props: {
      datas,
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
