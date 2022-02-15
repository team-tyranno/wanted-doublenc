import { IBrandProps, IMenuProps } from 'types';
import { getBrandsData } from 'utils';

const BrandsId = (datas: Array<IMenuProps>) => {
  console.log(datas);

  return <div>ds</div>;
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
      datas: datas[0].conItems,
    },
  };
}

export default BrandsId;
