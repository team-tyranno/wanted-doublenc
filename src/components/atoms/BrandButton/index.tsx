import { IBrandProps } from 'types';
import * as S from './style';

export const BrandButton = ({ data }: { data: IBrandProps }) => {
  const { name, imageUrl } = data;
  return (
    <S.Container>
      <img src={imageUrl} alt={`${name} 로고`} />
      <div>{name}</div>
    </S.Container>
  );
};
