import { BrandButton } from 'components';
import { IBrandProps } from 'types';
import * as S from './style';

export const BrandLists = ({ query, datas }: { query: string; datas: Array<IBrandProps> }) => {
  console.log();
  return (
    <S.Container>
      {datas.map((data) => (
        <BrandButton key={data.id} query={query} data={data} />
      ))}
    </S.Container>
  );
};
