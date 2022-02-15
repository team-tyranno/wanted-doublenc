import { BrandButton } from 'components';
import { IBrandProps } from 'types';
import * as S from './style';

export const BrandLists = ({ datas }: { datas: Array<IBrandProps> }) => {
  return (
    <S.Container>
      {datas.map((data) => (
        <BrandButton key={data.id} data={data} />
      ))}
    </S.Container>
  );
};
