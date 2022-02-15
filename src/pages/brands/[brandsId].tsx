import { IBrandProps } from 'types';
import { useRouter } from 'next/router';
import { getBrandsData } from 'utils';
import { Caret, NavBar, ItemLists, NumItems } from 'components';

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

interface IBrandsIdProps {
  datas: IBrandProps;
}

const BrandsId = ({ datas }: IBrandsIdProps) => {
  const router = useRouter();
  const { name, conItems } = datas;
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
      <NumItems num={conItems.length} />
      <ItemLists conItems={conItems} />
    </>
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
  const datas: Array<IBrandProps> = await getBrandsData(Number(id), Number(brandsId));

  return {
    props: {
      datas: datas[0],
    },
  };
}

export default BrandsId;
