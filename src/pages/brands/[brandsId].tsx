import { IBrandProps } from 'types';
import { getBrandsData } from 'utils';
import { BrandHeader, NumItems } from 'components';

interface IBrandsIdProps {
  datas: IBrandProps;
}

const BrandsId = ({ datas }: IBrandsIdProps) => {
  const { name, conItems } = datas;
  return (
    <BrandHeader title={name}>
      <NumItems num={conItems.length} />
    </BrandHeader>
  );
};

interface IQueryProps {
  query: {
    id: string;
    brandsId: string;
  };
}

export async function getServerSideProps({ query }: IQueryProps) {
  const { id, brandsId } = query;
  const datas: Array<IBrandProps> = await getBrandsData(id, brandsId);

  return {
    props: {
      datas: datas[0],
    },
  };
}

export default BrandsId;
