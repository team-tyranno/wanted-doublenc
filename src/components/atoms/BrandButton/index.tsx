import { IBrandProps } from 'types';
import { useRouter } from 'next/router';
import * as S from './style';

export const BrandButton = ({ query, data }: { query: string; data: IBrandProps }) => {
  const router = useRouter();
  const { id, name, imageUrl } = data;

  const onClick = () => {
    router.push({
      pathname: `/brands/${id}`,
      query: { id: query },
    });
  };

  return (
    <S.Container onClick={onClick}>
      <img src={imageUrl} alt={`${name} 로고`} />
      <div>{name}</div>
    </S.Container>
  );
};
